import createEditor from "./playgroundEditor";
import executeCode from "./executeCode";
import createConsole from "./playgroundConsole";

import '../sass/index.scss';

createEditor(document.getElementById('code'), executeCode);
createConsole();

