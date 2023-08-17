
// Made By Shifaau9

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log('Tab updated:', tabId, changeInfo, tab);
    if (changeInfo.url) {
      convertShortsLink(changeInfo.url).then(updatedUrl => {
        if (updatedUrl !== changeInfo.url) {
          chrome.tabs.update(tabId, { url: updatedUrl });
        }
      });
    }
  });
  
  async function convertShortsLink(url) {
    console.log('Converting link:', url);
    const shortsRegex = /^https:\/\/www\.youtube\.com\/shorts\/([A-Za-z0-9_-]+)$/;
    const match = url.match(shortsRegex);
    console.log('Match:', match);
    if (match) {
      return `https://www.youtube.com/watch?v=${match[1]}`;
    }
    return url;
  }
  
