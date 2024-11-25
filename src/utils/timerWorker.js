let timer;

self.onmessage = (e) => {
  if (e.data === 'start') {
    timer = setTimeout(() => {
      self.postMessage('next');
    }, 5000);
  } else if (e.data === 'stop') {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  } else if (e.data === 'close') {
    if (timer) {
      clearTimeout(timer);
    }
    self.close();
  }
};
