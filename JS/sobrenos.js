function acc_audio(){
    const audiobutton = document.getElementById('audio-button')

    const title = document.getElementById('title')
    const p1 = document.getElementById('p1')
    const p2 = document.getElementById('p2')
    const p3 = document.getElementById('p3')
    const LogoONG = document.getElementById('logo-img')
    const description = LogoONG.alt

    audiobutton.addEventListener('click', () => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(title.textContent)
        const utterance2 = new SpeechSynthesisUtterance(p1.textContent)
        const utterance3 = new SpeechSynthesisUtterance(p2.textContent)
        const utterance4 = new SpeechSynthesisUtterance(p3.textContent)
        const utterance5 = new SpeechSynthesisUtterance(description)
 
        utterance.lang = 'pt-br'
        utterance2.lang = 'pt-br'
        utterance3.lang = 'pt-br'
        utterance4.lang = 'pt-br'
        utterance5.lang = 'pt-br'

        window.speechSynthesis.speak(utterance)
        window.speechSynthesis.speak(utterance2)
        window.speechSynthesis.speak(utterance3)
        window.speechSynthesis.speak(utterance4)
        window.speechSynthesis.speak(utterance5)
    })
}

function stop_audio() {
    window.speechSynthesis.cancel()
}



function toggleDarkMode() {
    document.body.classList.toggle('dark-mode')
    
    const isDarkMode = document.body.classList.contains('dark-mode')

    const iconemodoclaro = document.getElementById('icone-modo-claro')
    const logo = document.getElementById('logo-img')

    if (isDarkMode) {
      iconemodoclaro.src = '../IMGS/Luaclara.svg'
      logo.src = '../IMGS/Logo Instituto Escura.svg'
    } else {
      iconemodoclaro.src = '../IMGS/Luaescura.svg'
      logo.src = '../IMGS/LogoONG.svg'
    }
}

function goToSection() {
    window.location.href = '../index.html'
  }