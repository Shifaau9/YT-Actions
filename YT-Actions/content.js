
// Made By Shifaau9

// Function to remove the specified element

function removeElement(elementSelector) {
  const element = document.querySelector(elementSelector);
  if (element) {
    element.remove();
  }
}

// Call the function to remove the element
removeElement("button.ytp-large-play-button");
