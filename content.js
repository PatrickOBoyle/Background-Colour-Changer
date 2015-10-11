var DEFAULT_BG_COLOUR = "blue";

var backgroundColour;

chrome.storage.sync.get({
    bgColour: DEFAULT_BG_COLOUR
    
}, function(details) {
    backgroundColour = details.bgColour;
    
    // Inserted here as it can take time, document this better
    document.body.style.backgroundColor=backgroundColour;
});