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
    document.body.style.overflow = 'hidden'
}

function enableScroll() {
    document.body.style.overflow = ''
}


window.onload = function() {
    const referrer = document.referrer

    if (referrer.includes('contato.html')) {
      document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' })
    } 
    else if (referrer.includes('sobrenos.html')) {
      document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' })
    }
    else if (referrer.includes('cardapio.html')) {
      document.querySelector('.projetos').scrollIntoView({ behavior: 'smooth' })
    }
    else if (referrer.includes('mobilidade.html')) {
      document.querySelector('.projetos').scrollIntoView({ behavior: 'smooth' })
    }
    else if (referrer.includes('esporte.html')) {
      document.querySelector('.projetos').scrollIntoView({ behavior: 'smooth' })
    }
    
    else {
      document.body.style.overflow = 'hidden';
      document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' })
    }
  }


  function toggleDarkModeHome() {
    document.body.classList.toggle('dark-mode')
    
    const isDarkMode = document.body.classList.contains('dark-mode')

    const iconemodoclaro = document.getElementById('icone-modo-claro')
    const logo = document.getElementById('logo-img')

    if (isDarkMode) {
      iconemodoclaro.src = 'IMGS/Luaclara.svg'
      logo.src = 'IMGS/Logo Instituto Escura.svg'
    } else {
      iconemodoclaro.src = 'IMGS/Luaescura.svg'
      logo.src = 'IMGS/LogoONG.svg'
    }
}