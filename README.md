<div align="center">
  <h1>node-hoyolab</h1>

<p>
        <a href="https://www.npmjs.com/package/node-hoyolab">
            <img src="https://img.shields.io/npm/v/node-hoyolab.svg?logo=npm&logoColor=fff&label=NPM+package&color=red" alt="Node-Hoyolab NPM" />
        </a>
        <a href="https://www.npmjs.com/package/node-hoyolab" target="_blank">
            <img src="https://img.shields.io/npm/dt/node-hoyolab.svg?style=flat-square" alt="Total Downloads" />
        </a>
        <a href="https://github.com/iseizuu/node-hoyolab/blob/master/LICENSE">
            <img src="https://img.shields.io/github/license/iseizuu/node-hoyolab?style=flat-square" alt="MIT License" />
        </a>
    </p>
    <p align="center"> 
    <img src="https://upload-os-bbs.hoyolab.com/upload/2024/01/17/8710bd26132d73c7a07981998d4d2816_2234102251971466197.jpg">
    </p>
</div>

This is a NodeJS library designed as a connector to the Official HoYoLab API, commonly accessed by browsers easily and quickly. This library supports both ESM and CJS, but can only be used in NodeJS environments starting from version 8.17 and above.

This repository is forked from [HoyoApi](https://github.com/vermaysha/hoyoapi/), which is no longer maintained. Therefore, I have refactored the code, added new features, and will continue to maintain and update this repository.

[![view - Documentation](https://img.shields.io/badge/view-Documentation-blue?style=for-the-badge)](https://hoyolab-docs.aizuu.my.id/ 'Go to project documentation')

## Install

[![Version](https://nodei.co/npm/node-hoyolab.png?compact=true)](https://nodei.co/npm/node-hoyolab)

For NPM <br/>
`npm install node-hoyolab`

For Yarn <br/>
`yarn install node-hoyolab`

## Features

| Features          | Genshin Impact | Honkai Impact | Honkai Star Rails | Zenless Zone Zero |
| ----------------- | -------------- | ------------- | ----------------- | ----------------- |
| Daily Check-In    | ✅              | ✅             | ✅                 | ✅                 |
| Redeem            | ❌              | ❌             | ❌                 | ❌                 |
| Battle Chronicles | ✅              | ✅             | ✅                 | ✅                 |
| Diary             | ✅              | ❌             | ❌                 | ❌                 |
| Daily Note        | ✅              | ❌             | ✅                 | ✅                 |
| TCG               | ✅              | ❌             | ❌                 | ❌                 |

## How to obtain HoYoLab Cookie/Token

 - Extension Version (PC)
    1. Download the extension [Cookie-Editor](https://chromewebstore.google.com/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm?hl=id) and install it.
    2. Next, go to Hoyolab and log in with your [HoYoLab](https://www.hoyolab.com/home) account.
    3. Open the extension.
    4. Once you've opened the extension, copy the required cookies `ltoken_v2` and `ltuid_v2`.
    5. Finally, you can use the cookies to run this package.
   
 - Inspect Element/Dev Tools (PC)
    1. Go to Hoyolab and log in with your [HoYoLab](https://www.hoyolab.com/home) account.
    2. Press `ctrl+shift+i` / right click > Inspect
    3. Go to Application and go to tab Cookie
    4. copy the required cookies `ltoken_v2` and `ltuid_v2` from cookie tab.
    5. Done

## About Redeem Function

why the function isnot working?
because the the API/site [Genshin Impact Gift](https://genshin.hoyoverse.com/en/gift) cookie token has a short expiration time, so if it has expired, it needs to be manually refreshed. It has been observed that every few days, when logging in to the game Hoyoverse, it always requests reauthentication first.

## Guides

For detailed guides, see the following:

- [Example Usage](https://hoyolab-docs.aizuu.my.id/media/guide.html)


## Disclaimer

❤️ Always check for the latest version for new features or bug fixes.

🚀 If you have an issue or idea, let me know.

© 2024-present. Licensed under the MIT License.
