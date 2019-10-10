import '../sass/main.scss';
import '../sass/htmlcss.scss';

import createEditor from "./playgroundEditor";

const htmlCodeContainer = document.getElementById('html-code');
const htmlEditor = createEditor(htmlCodeContainer, function(){}, {
  mode : 'xml',
  htmlMode: true,
});
htmlEditor.setValue('<!DOCTYPE>\n<html>\n<head>\n</head>\n<body>\n\t<h1>this is a preview</h1>\n</body>\n</html>');

const cssCodeContainer = document.getElementById('css-code');
const cssEditor = createEditor(cssCodeContainer, function(){}, {
  mode: 'text/css',
});
cssEditor.setValue('body {\n\tbackground-color: red; \n}');