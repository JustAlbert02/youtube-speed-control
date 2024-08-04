console.log('Content script loaded');
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Received message:', message);
  if (message.command === 'setSpeed') {
    const video = document.querySelector('video');
    if (video) {
      video.playbackRate = message.value;
      console.log('Playback rate set to:', message.value);
    } else {
      console.log('Video element not found');
    }
  }
});
