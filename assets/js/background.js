chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({
        'url': chrome.extension.getURL('mytab.html'),
        'active': true
    });
});
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: 'Open MyTab',
        id: 'openMyTab',
        contexts: ['all'],
    });
    chrome.contextMenus.create({
        title: 'Send all tabs to MyTab',
        id: 'sendAllTabs',
        contexts: ['all'],
    });
    chrome.contextMenus.create({
    	type: 'separator',
        id: 'division1',
        contexts: ['all'],
    });
    chrome.contextMenus.create({
        title: 'Send only this tabs to MyTab',
        id: 'onlyThisTab',
        contexts: ['all'],
    });
    chrome.contextMenus.create({
        title: 'Send all tabs except this tabs to MyTab',
        id: 'exceptThisTab',
        contexts: ['all'],
    });
    chrome.contextMenus.create({
        title: 'Send all tabs on the right to MyTab',
        id: 'fromLeftTab',
        contexts: ['all'],
    });
    chrome.contextMenus.create({
        title: 'Send all tabs on the left to MyTab',
        id: 'fromRightTab',
        contexts: ['all'],
    });
    chrome.contextMenus.create({
    	type: 'separator',
        id: 'division2',
        contexts: ['all'],
    });
    chrome.contextMenus.create({
        title: 'Send all from all windows to MyTab',
        id: 'allWindows',
        contexts: ['all'],
    });
    chrome.contextMenus.create({
        title: 'Send all from all windows as groups to MyTab',
        id: 'allWindowsAsGroups',
        contexts: ['all'],
    });
    chrome.contextMenus.create({
    	type: 'separator',
        id: 'division3',
        contexts: ['all'],
    });
    chrome.contextMenus.create({
    	type: 'checkbox',
        title: 'Exclude this domain from MyTab',
        id: 'exludeThis',
        contexts: ['all'],
    });
    chrome.contextMenus.create({
    	type: 'separator',
        id: 'division4',
        contexts: ['all'],
    });
    chrome.contextMenus.create({
        title: 'Contact MyTab',
        id: 'contact',
        contexts: ['all'],
    });
    chrome.contextMenus.create({
        title: 'Help',
        id: 'help',
        contexts: ['all'],
    });
});
function getHostName(url) {
	var hostname;
    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }
    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];
    return hostname;
}
chrome.tabs.onActivated.addListener(function() {
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
		chrome.contextMenus.update('exludeThis', {
			title: 'Exclude ' + getHostName(tabs[0].url) + ' from MyTab'
		});
	});
});
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "displayMyTab") {
    }
});
