const createConsole = function() {
  const consoleEl = document.querySelector('#console .console-output');

  const scrollToBottom = function(el) {
    el.scrollTop = el.scrollHeight;
  }

  const clear = () => {
    consoleEl.innerHTML = '';
  }

  const write = message => {
    const node = document.createElement('div');
    node.className = 'console-line';
    node.innerHTML = `<p><span>></span> ${message}</p>`;
    consoleEl.appendChild(node);
    scrollToBottom(consoleEl);
  }

  return {
    writeToConsole: write,
    clearConsole: clear,
  }
}

export default createConsole;