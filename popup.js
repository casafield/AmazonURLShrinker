chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  // アクティブなタブのURLを取得
  document.querySelector("#url").value = tabs[0].url;
});
