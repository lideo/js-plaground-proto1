const createConsole = function() {
  const consoleEl = document.querySelector('#console .console-output');

  const scrollToBottom = function(el) {
    el.scrollTop = el.scrollHeight;
  }

  const messageTypeLabels = {
    log: '',
    info: 'Info',
    warn: 'Warning',
    error: 'Error',
  }

  function stringifyArguments(list) {
    return list.reduce(function(accumulator, current) {
      return `${accumulator} ${JSON.stringify(current, null, ' ')}`;
    }, '');
  }

  function createConsoleLine(level, message) {
    let line = '<p><span>></span>';
    line += (level != 'log') ? `<span class="level">${messageTypeLabels[level]}</span> ` : '';
    line += `${message}</p>`;

    return line;
  }

  const write = (level = 'log', consoleArguments) => {
    if (level == 'clear') {

      clear();

    } else {

      const node = document.createElement('div');
      node.className = `console-line ${level}`;

      const message = stringifyArguments([...consoleArguments]);

      const line = createConsoleLine(level, message);

      node.innerHTML = line;
      consoleEl.appendChild(node);
      scrollToBottom(consoleEl);
    }
  }

  const clear = () => {
    consoleEl.innerHTML = '';
  }

  // Rewrite some console methods so we can see the output in our custom console too.
  (function() {
    const proxiedMethods = ['log', 'error', 'info', 'warn', 'clear'];
    proxiedMethods.forEach((method) => {
      const proxiedMethod = console[method];
      console[method] = function() {
        write(method, arguments);
        return proxiedMethod.apply(console, arguments);
      }
    });
  })();

  return {
    writeToConsole: write,
    clearConsole: clear,
  }
}

export default createConsole;