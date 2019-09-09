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

  const write = (level = 'log', consoleArguments) => {
    const node = document.createElement('div');
    node.className = `console-line ${level}`;

    const message = stringifyArguments([...consoleArguments]);

    let line = '<p><span>></span>';
    line += (level != 'log') ? `<span class="level">${messageTypeLabels[level]}</span> ` : '';
    line += `${message}</p>`;

    node.innerHTML = line;
    consoleEl.appendChild(node);
    scrollToBottom(consoleEl);
  }

  const clear = () => {
    consoleEl.innerHTML = '';
    write('log', 'Console was cleared.');
  }

  // TODO: rewrite all the rest of the console methods
  // and maybe refactor...
  (function() {
    const proxiedLog = console.log;
    console.log = function() {
      write('log', arguments);
      return proxiedLog.apply(console, arguments);
    };

    const proxiedError = console.error;
    console.error = function() {
      write('error', arguments);
      return proxiedError.apply(console, arguments);
    }

    const proxiedInfo = console.info;
    console.info = function() {
      write('info', arguments);
      return proxiedInfo.apply(console, arguments);
    };

    const proxiedWarn = console.warn;
    console.warn = function() {
      write('warn', arguments);
      return proxiedWarn.apply(console, arguments);
    };

    const proxiedClear = console.clear;
    console.clear = function() {
      clear();
      return proxiedClear.apply(console, arguments);
    };
  })();

  return {
    writeToConsole: write,
    clearConsole: clear,
  }
}

export default createConsole;