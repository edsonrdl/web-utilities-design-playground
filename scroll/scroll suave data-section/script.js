//Scroll Suave navegação
function scrollToSectionNav(event) {
    // Evita que o link recarregue a página
    event.preventDefault();
  
    // Obtém o valor do atributo data-section
    const sectionId = event.currentTarget.getAttribute('data-section');
  
    // Realiza o scroll suave para a seção correspondente
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Adiciona o evento de clique aos links
  document.querySelectorAll('[data-section]').forEach(link => {
    link.addEventListener('click', scrollToSectionNav);
  });
  