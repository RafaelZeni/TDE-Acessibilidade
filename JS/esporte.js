function acc_audio(){
    const audiobutton = document.getElementById('audio-button')

    const txtForRead = document.getElementById('title')
    const firstpar = document.getElementById('firstpar')
    const FotoCardapioBraile = document.getElementById('FotoCardapioBraile')
    const description = FotoCardapioBraile.alt

    const secndpar = document.getElementById('secndpar')
    const thirthpar = document.getElementById('thirthpar')
    const fourpar = document.getElementById('fourpar')
    const secondtitle = document.getElementById('secondtitle')
    const fithpar = document.getElementById('fithpar')
    const sixpar = document.getElementById('sixpar')
    const thirthtitle = document.getElementById('thirthtitle')
    const seventhpar = document.getElementById('seventhpar')
    const lastpar = document.getElementById('lastpar') 


    audiobutton.addEventListener('click', () => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(txtForRead.textContent)
        const utterance2 = new SpeechSynthesisUtterance(firstpar.textContent)
        const utterance3 = new SpeechSynthesisUtterance(description)
        const utterance4 = new SpeechSynthesisUtterance(secndpar.textContent)
        const utterance5 = new SpeechSynthesisUtterance(thirthpar.textContent)
        const utterance6 = new SpeechSynthesisUtterance(fourpar.textContent)
        const utterance7 = new SpeechSynthesisUtterance(secondtitle.textContent)
        const utterance8 = new SpeechSynthesisUtterance(fithpar.textContent)
        const utterance9 = new SpeechSynthesisUtterance(sixpar.textContent)
        const utterance10 = new SpeechSynthesisUtterance(thirthtitle.textContent)
        const utterance11 = new SpeechSynthesisUtterance(seventhpar.textContent)
        const utterance12 = new SpeechSynthesisUtterance(lastpar.textContent)

        utterance.lang = 'pt-br'
        utterance2.lang = 'pt-br'
        utterance3.lang = 'pt-br'
        utterance4.lang = 'pt-br'
        utterance5.lang = 'pt-br'
        utterance6.lang = 'pt-br'
        utterance7.lang = 'pt-br'
        utterance8.lang = 'pt-br'
        utterance9.lang = 'pt-br'
        utterance10.lang = 'pt-br'
        utterance11.lang = 'pt-br'
        utterance12.lang = 'pt-br'


        window.speechSynthesis.speak(utterance)
        window.speechSynthesis.speak(utterance2)
        window.speechSynthesis.speak(utterance3)
        window.speechSynthesis.speak(utterance4)
        window.speechSynthesis.speak(utterance5)
        window.speechSynthesis.speak(utterance6)
        window.speechSynthesis.speak(utterance7)
        window.speechSynthesis.speak(utterance8)
        window.speechSynthesis.speak(utterance9)
        window.speechSynthesis.speak(utterance10)
        window.speechSynthesis.speak(utterance11)
        window.speechSynthesis.speak(utterance12)
    })
}

function stop_audio() {
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