chrome.runtime.onInstalled.addListener(function() {
  chrome.action.disable();
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
            urlMatches: 'www\.amazon\.co\.jp.*(/dp|/gp/product)/[A-Z0-9]{10}'
          }
      })],
      actions: [new chrome.declarativeContent.ShowAction()]
    }]);
  });
});
