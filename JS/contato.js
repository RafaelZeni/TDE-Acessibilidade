function goToSection() {
    window.location.href = '../index.html'
  }


  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode')
    
    const isDarkMode = document.body.classList.contains('dark-mode')

    const iconemodoclaro = document.getElementById('icone-modo-claro')
    const logo = document.getElementById('logo-img')

    if (isDarkMode) {
      iconemodoclaro.src = '../IMGS/Luaclara.svg'
    } else {
      iconemodoclaro.src = '../IMGS/Luaescura.svg'
    }
}