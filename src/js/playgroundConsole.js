const createConsole = function() {
  const consoleEl = document.querySelector('#console');

  const scrollToBottom = function(el) {
    el.scrollTop = el.scrollHeight;
  }

  const clear = () => {
    consoleEl.innerHTML = '';
  }

  const write = message => {
    const node = document.createElement('p');
    node.innerHTML = message;
    consoleEl.appendChild(node);
    scrollToBottom(consoleEl);
  }

  return {
    writeToConsole: write,
    clearConsole: clear,
  }
}

export default createConsole;