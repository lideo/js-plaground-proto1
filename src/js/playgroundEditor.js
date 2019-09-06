import CodeMirror from 'codemirror/lib/codemirror.js';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/theme/monokai.css';
import 'codemirror/lib/codemirror.css';

const createEditor = function (container, onSave) {
  const editor = CodeMirror.fromTextArea(container, {
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