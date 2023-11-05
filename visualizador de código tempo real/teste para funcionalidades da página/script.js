      // Função para atualizar a visualização
      function updatePreview() {
        const htmlEditor = document.getElementById('html-editor').value;
        const cssEditor = document.getElementById('css-editor').value;
        const preview = document.getElementById('preview');
        preview.innerHTML = htmlEditor;
        const style = document.createElement('style');
        style.innerHTML = cssEditor;
        preview.appendChild(style);
    }
    document.getElementById('html-editor').addEventListener('input', updatePreview);
    document.getElementById('css-editor').addEventListener('input', updatePreview);

    updatePreview();