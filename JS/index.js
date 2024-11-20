function scrolltoinicio() {
    document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' })
}

function scrollToNextSection() {
    document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' })
}

function scrollToNextSectionProjetos() {
    document.querySelector('.projetos').scrollIntoView({ behavior: 'smooth' })
}

function disableScroll() {
    document.body.style.overflow = 'hidden'; // Desativa o scroll
}

function enableScroll() {
    document.body.style.overflow = ''; // Volta ao comportamento padrão
}


window.onload = function() {
    const referrer = document.referrer;

    // Verifica se veio da página de cadastro/contato
    if (referrer.includes('contato.html')) {
      // Rola suavemente para a seção desejada
      document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
    } else {
      // Comportamento padrão da home
      document.body.style.overflow = 'hidden';
      document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' });
    }
  };