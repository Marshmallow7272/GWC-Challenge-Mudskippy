// Flag lives only in memory for the duration of the Chrome session
let hasOpenedThisSession = false;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (hasOpenedThisSession) return;
  if (changeInfo.status !== "complete" || !tab.url) return;

  if (tab.url.includes("chatbot.html")) {
    chrome.action.openPopup();
    hasOpenedThisSession = true;
  }
});