import CodeMirror from 'codemirror/lib/codemirror.js';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/theme/oceanic-next.css';
import 'codemirror/lib/codemirror.css';

const createEditor = function (container, onSave) {
  const editor = CodeMirror(container, {
    value: "var a = 42;\n console.log(a); console.error('error!!!');\n",
    mode:  "javascript",
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    theme: 'oceanic-next',
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