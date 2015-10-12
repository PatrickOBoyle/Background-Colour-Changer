DEFAULT_BG_COLOUR = "blue";

/*
    Saves colour value to chrome.storage to change page colour
    and be restored when options are accessed in the future
*/
function saveOptions(){
    // Get the user's selected colour value
    var colourSelected = document.getElementById("colourSelected").value;
    
    // Save the colour selected by the user in Chrome's storage
    // By using .sync, it will save to their account and persist
    chrome.storage.sync.set({      
        bgColour: colourSelected
        
    }, function() {
        // Update the header to let user know their setting was saved.
        var status = document.getElementById('status');
        status.textContent = 'Successfully updated background colour.';
        
        // After 1.75 seconds, revert the header to it's original text
        setTimeout(function() {
          status.textContent = 'Background colour selected:';
        }, 1750);
    });
}

/*
    Restores form info from chrome.storage for auto-filling
*/
function restoreOptions(){
    // Loads the user's selected colour if present
    // Otherwise, it gets the default colour
    chrome.storage.sync.get({
        bgColour: DEFAULT_BG_COLOUR
        
    }, function(details) {
        // Jquery used to set the default dropdown value to
        // the value to user had previously assigned
        $("#colourSelected").val(details.bgColour);
    });
}

// Wait for the page to be loaded, then update the dropdown menu
document.addEventListener("DOMContentLoaded", restoreOptions);

// Wait for the "Update Settings" button to be clicked, then update
// the colour value saved to Chrome's storage
document.getElementById("save").addEventListener("click", saveOptions);