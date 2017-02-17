'use strict';

chrome.browserAction.onClicked.addListener(jumpToUrl);
function jumpToUrl(tab) {
    chrome.tabs.update({
         url: "http://www.example.com/"
    })
}
