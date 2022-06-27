function setBackgroundColor(r, g, b) {
  let colorStyle = "rgb(" + r + "," + g + "," + b + ")";
  document.body.style.backgroundColor = colorStyle;
  console.log("Set background color: ", colorStyle);
}

document.getElementById("save_btn").addEventListener('click', function () {
  let r = parseInt(document.getElementById("id_rgb_r").value) || 0;
  let g = parseInt(document.getElementById("id_rgb_g").value) || 0;
  let b = parseInt(document.getElementById("id_rgb_b").value) || 0;

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs.length);
    let activeTab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      function: setBackgroundColor,
      args: [r, g, b]
    });
  });
});
