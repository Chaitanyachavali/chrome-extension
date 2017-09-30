$(document).ready(function() {
    chrome.windows.getCurrent(function(currWindow) {
        chrome.tabs.getAllInWindow(currWindow.id, function(tabs) {
            console.log(tabs);
        });
    });
});