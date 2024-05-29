// ==UserScript==
// @name         Reader Dev Commands
// @namespace    https://github.com/matthewdunbar
// @version      2024-05-17
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @url          https://raw.githubusercontent.com/matthewdunbar/userscripts/master/epublican-view.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @run-at       document-idle
// @grant        none
// ==/UserScript==

window.ReactNativeWebView = {
  postMessage: (msg) => {
    console.log(`Received message from diode ${msg}`);
  },
};

window.sendCommand = (cmd) => {
  dispatchEvent(
    new MessageEvent("ReaderCommand", {
      data: cmd,
    })
  );
};

window.Commands = {
  // setToken: (token) => {
  //   return {
  //     _type: "SetAccessToken",
  //     requestId: "requestId",
  //   };
  // },
  openCSB: {
    _type: "OpenBook",
    contentId: "3BAFECA7-66C1-40BC-B6E5-AFDE2D94B527",
    requestId: "requestId",
  },
  // navigateToLocation: (location) => {
  //   return {
  //     _type: "NavigateToLocation",
  //     location: location,
  //     requestId: "requestId",
  //   };
  // },
};
