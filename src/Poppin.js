exports.mod = (mod_info) => {
    logger.logInfo(`   [MOD] Loading: ${mod_info.name} (${mod_info.version}) by ${mod_info.author}`);
    let itemsCache = fileIO.readParsed(global.db.user.cache.items);                            // read from server cache (items)
    let settingsFile = require("../settings.json");                                     // read from settings.json file
    let medSettings = settingsFile.meds;                                                // for tidying up code/abstraction	

    if (medSettings.poppinPills == true) {                                              // if 'poppinPills' var in settings.json is set to true, execute script
        for (let item in itemsCache.data) {
            let cacheData = itemsCache.data[item];                                      // for tidying up code/abstraction	
        
            if (cacheData._id == "544fb37f4bdc2dee738b4567") {                          // Painkillers item ID
                if (typeof medSettings.painkiller == "number") {				        // check `painkiller` var in settings.json if exists or is number
                    cacheData._props.MaxHpResource = medSettings.painkiller;            // if there, change `MaxHpResource` in cache to match the `painkiller` var
                } else {                                                                // otherwise, spit out an error in server console and end script
                    logger.logError(`[MOD] ${mod_info.name}: 'painkiller' variable has no value/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            if (cacheData._id == "5af0548586f7743a532b7e99") {                          // Ibuprofen item ID
                if (typeof medSettings.ibuprofen == "number") {
                    cacheData._props.MaxHpResource = medSettings.ibuprofen;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: 'ibuprofen' variable has no value/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }
        }

        fileIO.write(global.db.user.cache.items, itemsCache);                                  // write all changes to cache (items.json specifically)
        logger.logSuccess(`[MOD] -- ${mod_info.name}: ON (${medSettings.painkiller}, ${medSettings.ibuprofen})`);
    } else {                                                                            // if 'poppinPills' var in settings.json is set to false, skip entire script
        logger.logSuccess(`[MOD] -- ${mod_info.name}: OFF`); 
    }
}