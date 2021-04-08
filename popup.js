chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  // アクティブなタブのURLを取得
  const regex = /(www\.amazon\.co\.jp).*(\/dp|\/gp\/product)(\/[A-Z0-9]{10}).*/;
  let shortenedURL = tabs[0].url.replace(regex, '$1$2$3');
  document.querySelector("#url").value = shortenedURL;
});
