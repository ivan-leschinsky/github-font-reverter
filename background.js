chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.url.indexOf('github.com') > -1) {
    chrome.tabs.insertCSS(tabId, { file: 'github_font.css' })
  }
})
