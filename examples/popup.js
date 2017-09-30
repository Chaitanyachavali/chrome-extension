document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickTest');
    checkPageButton.addEventListener('click', function() {
        // https://stackoverflow.com/questions/16185044/get-the-urls-of-all-the-tabs-in-all-windows-using-chrome-extension
        chrome.windows.getAll({
            populate: true
        }, function(windows) {
            windows.forEach(function(window) {
                window.tabs.forEach(function(tab) {
                    // https://developer.chrome.com/extensions/tabs#method-remove
                    // chrome.tabs.remove(214)
                    console.log(tab);
                });
            });
        });
    }, false);
}, false);