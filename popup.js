document.getElementById('setSpeed').addEventListener('click', () => {
  const speed = parseFloat(document.getElementById('speedInput').value);
  if (isNaN(speed) || speed <= 0) {
    alert('Please enter a valid number greater than 0.');
    return;
  }

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0].url.includes('youtube.com/watch')) {  // Ensure it's a YouTube video page
      console.log('Sending message to content script:', { command: 'setSpeed', value: speed });
      chrome.tabs.sendMessage(tabs[0].id, { command: 'setSpeed', value: speed }).catch((error) => {
        console.error('Error sending message:', error);
      });
    } else {
      console.error('Active tab is not a YouTube video page');
    }
  });
});
