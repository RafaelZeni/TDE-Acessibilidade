function acc_audio (){
    const audiobutton = document.getElementById('audio-button')

    const txtForRead = document.getElementById('title')
    const firstpar = document.getElementById('firstpar')

    audiobutton.addEventListener('click', () => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(txtForRead.textContent)
        const utterance2 = new SpeechSynthesisUtterance(firstpar.textContent)
        utterance.lang = 'pt-br'
        utterance2.lang = 'pt-br'
        window.speechSynthesis.speak(utterance)
        window.speechSynthesis.speak(utterance2)

    })
}

function stop_audio () {
    window.speechSynthesis.cancel()
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

function goToSection() {
    // Redireciona para a Página 2, indo diretamente para a seção "projetos"
    window.location.href = '../index.html';
  }