'use strict';

chrome.browserAction.onClicked.addListener(jumpToUrl);
function jumpToUrl(tab) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        console.log(tabs[0].url);
        chrome.tabs.update({
             url: "http://localhost:8000?page=" +
             encodeURIComponent(tabs[0].url)
        })
    });
}
