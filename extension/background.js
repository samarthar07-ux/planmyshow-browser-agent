// Plan my Show Chrome extension service worker (Manifest V3).
// Opens the side panel when the extension action is clicked.

chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch((error) => {
    console.error("Plan my Show could not configure the side panel:", error);
  });
});
