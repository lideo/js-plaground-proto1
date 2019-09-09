import createEditor from "./playgroundEditor";
import executeCode from "./executeCode";
import createConsole from "./playgroundConsole";

import '../sass/main.scss';

createEditor(document.getElementById('code'), executeCode);
createConsole();

