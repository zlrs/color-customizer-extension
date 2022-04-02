// This is a background script. 
// Essentially this is a service worker.
// Colors: http://zhongguose.com

function setBackgroundColor(r, g, b) {
  let colorStyle = "rgb(" + r + "," + g + "," + b + ")";
  console.log("Set background color: ", colorStyle);
  document.body.style.backgroundColor = colorStyle;
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setBackgroundColor,
    args: [237,85,106] // 苋菜红
  });
});

