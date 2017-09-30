$(document).ready(function() {
	// chrome.tabs.create({active: true, url: "http://google.com"});
	chrome.tabs.create({'url': chrome.extension.getURL('mytab.html'), 'active': true});
});