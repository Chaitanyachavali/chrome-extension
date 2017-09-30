$(document).ready(function() {
    chrome.windows.getCurrent(function(win) {
        chrome.tabs.getAllInWindow(win.id, function(tabsArray) {
            console.log(tabsArray);
        });
    });
});