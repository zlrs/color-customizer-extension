document.getElementById("save_btn").addEventListener('click', () => {
  let r = parseInt(document.getElementById("id_rgb_r").value);
  let g = parseInt(document.getElementById("id_rgb_g").value);
  let b = parseInt(document.getElementById("id_rgb_b").value);
  
  chrome.runtime.sendMessage({r, g, b}, function(response) {
    console.log('response from receiver: ', response);
  });
});
