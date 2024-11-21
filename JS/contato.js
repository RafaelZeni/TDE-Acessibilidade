function goToSection() {
    // Redireciona para a Página 2, indo diretamente para a seção "projetos"
    window.location.href = '../index.html';
  }

  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Trocar as imagens nos projetos
    const iconemodoclaro = document.getElementById('icone-modo-claro');
    const logo = document.getElementById('logo-img');

    if (isDarkMode) {
      iconemodoclaro.src = '../IMGS/Luaclara.svg';
    } else {
      iconemodoclaro.src = '../IMGS/Luaescura.svg';
    }
}