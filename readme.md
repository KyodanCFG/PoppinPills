Poppin' Pills (for JET Server v1.1.0) ![GitHub all releases](https://img.shields.io/github/downloads/KyodanCFG/PoppinPills/total?color=green&label=Downloads&style=flat-square)
----------------
Version `1.1.0` (`03.13.2021`) 
By Kyodan

![Screenshot](cover.png)

This mod allows you to adjust the amount of uses for Painkillers and Ibuprofen!

**Download the latest release (in ZIP format) here: https://github.com/KyodanCFG/PoppinPills/releases**

## Info

- By default, this mod will enable itself, and Painkillers will have `10` max uses (default `4` uses), and Ibuprofen will have `26` max uses (default `12` uses)

## Installation

1. Extract archive to your `server folder/user/mods` folder 
    * Folder structure should look like `server folder/user/mods/Kyodan-PoppinPills-X.X.X`
2. Close your server (if it's running)
3. Edit `settings.json` in your preferred text editor/IDE, review/modify any settings, then save and close
4. Delete your `server folder/user/cache` folder
5. Run your server (it should generate a new cache)

* If you change a setting in `settings.json`, repeat steps 2-5 above

## Settings

- Below are the default settings:
    * `poppinPills`: true,
    * `painkiller`: 10,
    * `ibuprofen`: 26

- Below are the flags for each setting:
    * `poppinPills` (true|false)            - determines if this script is enabled/disabled
    * `painkiller` (number)                 - determines how much the extract will cost
    * `ibuprofen` (number)                  - determines how much the extract will cost

## Files

- If any of the files below are missing/misplaced, you may have to redownload/reinstall this archive:
    * `src/Poppin.js`
    * `mod.config.json`
    * `settings.json`
    * `readme.md`

## Need help?

1. Join the EmuTarkov Discord: https://discord.gg/33r4FPp
2. @ me in the #support channel which script + version, what the issue is, and a picture/log of that issue (if possible)

## Disclaimer

I am not responsible for any data loss in relation to the use of this mod (including, but not limited to game/profile data and/or content loss, damage caused to your software, computer, or mobile device). I encourage you to back up your server/profile data before using this mod.

## Changelog

- 03.13.21
    * Initial push to Github
	
- 01.26.21
    * Fixed error messages not working properly
    * Simplified/tidied up some strings
