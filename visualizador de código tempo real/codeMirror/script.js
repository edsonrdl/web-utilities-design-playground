// Obtém o elemento pelo id
var myTextarea = document.getElementById("myCodeMirror");

// Inicializa o CodeMirror
var myCodeMirror = CodeMirror.fromTextArea(myTextarea, {
    mode: "javascript",  // Define o modo (linguagem)
    theme: "material"    // Define o tema (opcional)
});
var code = myCodeMirror.getValue();
console.log(code);
