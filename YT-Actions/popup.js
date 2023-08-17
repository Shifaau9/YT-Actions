// Send a message to the content script to remove the element
document.addEventListener('DOMContentLoaded', function () {
  const removeButton = document.getElementById('removeButton');
  if (removeButton) {
    removeButton.addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: removeElement,
        });
      });
    });
  }
});
