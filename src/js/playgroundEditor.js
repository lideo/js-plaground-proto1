import CodeMirror from 'codemirror/lib/codemirror.js';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/theme/monokai.css';
import 'codemirror/lib/codemirror.css';

const createEditor = function (container, onSave) {
  const initialCode = "" +
    "/***********" +
    "\n*" +
    "\n* Happy coding!! " +
    "\n*" +
    "\n/***********/" +
    "\n\n" +
    "\nfunction sum(a, b) {" +
    "\n    return a + b;" +
    "\n}" +
    "\n" +
    "\nconst result1 = sum(1, 2);" +
    "\nconst result2 = sum(345, 22);" +
    "\nconst result3 = sum(-110, 5);" +
    "\n" +
    "\nconsole.log(result1); " +
    "\nconsole.log(result2); " +
    "\nconsole.log(result3); " +
    "\nconsole.error('Hi!'); " +
    "\n";

  const editor = CodeMirror(container, {
    value: initialCode,
    mode:  "javascript",
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    theme: 'monokai',
    gutter: true,
    lineWrapping: true,
  });

  editor.setSize("100%", "100%");
  container.addEventListener('click', () => editor.focus());
  editor.focus();

  const save = () => onSave(editor.getValue());
  editor.setOption("extraKeys", {
    'Ctrl-S': save,
    'Cmd-S': save
  });

  return editor;
};

export default createEditor;