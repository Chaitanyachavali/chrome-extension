chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({
        'url': chrome.extension.getURL('mytab.html'),
        'active': true
    });
});
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: 'MyTab',
        id: 'menu1',
        contexts: ['all'],
    });
});
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "menu1") { 
        console.log("Word " + info.selectionText + " was clicked.");
		  chrome.tabs.create({  
		    url: "http://www.google.com/search?q=" + info.selectionText,
		  });
    }
});
