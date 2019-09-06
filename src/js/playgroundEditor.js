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
    "\n\n\n" +
    "var a = 42; " +
    "\nconsole.log(a); " +
    "\nconsole.error('error!!!'); " +
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