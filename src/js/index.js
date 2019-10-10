import createEditor from "./playgroundEditor";
import executeCode from "./executeCode";
import createConsole from "./playgroundConsole";

import '../sass/main.scss';
import '../sass/index.scss';

const codeContainer = document.getElementById('code');

const editor = createEditor(codeContainer, executeCode, {
  mode: 'javascript'
});

createConsole();

