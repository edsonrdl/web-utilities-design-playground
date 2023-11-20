function showStatusCheckBox(checkbox) {
    const checkboxes = document.getElementsByClassName("checkbox");
    const valoresMarcados = [];
  
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        valoresMarcados.push(checkboxes[i].value);
      }
    }
  
    console.log("Valores marcados: " + valoresMarcados.join(", "));
  }
  