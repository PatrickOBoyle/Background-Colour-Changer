DEFAULT_BG_COLOUR = "blue";

/*
    Saves form info to chrome.storage for auto-filling
*/
function saveOptions(){
    var colourSelected = document.getElementById("colourSelected").value;
    chrome.storage.sync.set({      
        bgColour: colourSelected
        
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        
        status.textContent = 'Successfully updated background colour.';
        setTimeout(function() {
          status.textContent = 'Background Colour';
        }, 1750);
    });
}

/*
    Restores form info from chrome.storage for auto-filling
*/
function restoreOptions(){
    // Loads the user stored info (left) if present, or defaults to the right
    chrome.storage.sync.get({
        bgColour: DEFAULT_BG_COLOUR
        
    }, function(details) {
        $("#colourSelected").val(details.bgColour);
    });
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);