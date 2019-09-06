import createEditor from "./playgroundEditor";
import executeCode from "./executeCode";
import createConsole from "./playgroundConsole";

import '../sass/main.scss';

const playgroundEditor = createEditor(document.getElementById('editor'), executeCode);
const playgroundConsole = createConsole();

// TODO: rewrite all the rest of the console methods
(function() {
  const proxiedLog = console.log;
  console.log = function(message) {
    playgroundConsole.writeToConsole(message);
    return proxiedLog.apply(this, arguments);
  };

  const proxiedError = console.error;
  console.error = function(message) {
    playgroundConsole.writeToConsole(message);
    return proxiedError.apply(this, arguments);
  }
})();

