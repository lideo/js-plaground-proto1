const executeCode = function (code) {
  try {
    (new Function(code))();
  } catch (error) {
    console.error(error);
  }
}

export default executeCode;