// This detects clicks on the Extension Icon (Browser Action Button)
chrome.browserAction.onClicked.addListener(function (tab) { 
    // A default colour to be used if the user has not specified one
    var DEFAULT_BG_COLOUR = "blue";
    
    // Call Chrome's storage to get the user's preference
    // If they have not specified one, use the default
    chrome.storage.sync.get({
        bgColour: DEFAULT_BG_COLOUR
    
    }, function(details) {
        // Assign our background colour to the one chrome has stored
        backgroundColour = details.bgColour;

        // By using the activeTab permission, we can avoid using a content
        // script, and instead use the chrome API chrome.tabs to execute our
        // code here. This is used as a "for all URLs", whereas content scripts
        // need to have their url's specified.
        
        // Change the background of the current window to the
        // background colour the user's / default value
        chrome.tabs.executeScript({
            code: 'document.body.style.backgroundColor="' + backgroundColour + '"'
        });
    });
});