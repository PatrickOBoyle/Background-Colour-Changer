// A default colour to be used if the user has not specified one
var DEFAULT_BG_COLOUR = "blue";

var backgroundColour;

// Call Chrome's storage to get the user's preference
// If they have not specified one, use the default
chrome.storage.sync.get({
    bgColour: DEFAULT_BG_COLOUR
    
}, function(details) {
    // Assign our background colour to the one chrome has stored
    backgroundColour = details.bgColour;
    
    // Change the background of the current window to the
    // background colour the user's / default value
    document.body.style.backgroundColor=backgroundColour;
});