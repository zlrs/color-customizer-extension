// This is a background script. 
// It runs in the background!
// Essentially, it is a service worker, in newest standard (manifest V3)
// Colors: http://zhongguose.com

function setBackgroundColor(r, g, b) {
  let colorStyle = "rgb(" + r + "," + g + "," + b + ")";
  console.log("Set background color: ", colorStyle);
  document.body.style.backgroundColor = colorStyle;
}

// Change color of active tab on message
chrome.runtime.onMessage.addListener(async function(message, sender, sendResponse) {
    let {r, g, b} = message;
    if (typeof(r) === 'number' &&
        typeof(g) === 'number' &&
        typeof(b) === 'number') {
      let tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      let activeTab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: setBackgroundColor,
        args: [r, g, b]
      });
    }
  }
);
