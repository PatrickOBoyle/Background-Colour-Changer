// This detects clicks on the Extension Icon (Browser Action Button)
chrome.browserAction.onClicked.addListener(function (tab) { 
    // When it is clicked, we want to run our content.js script to change the background
    chrome.tabs.executeScript(tab.id, {"file": "content.js"});
});