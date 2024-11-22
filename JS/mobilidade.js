function acc_audio (){
    const audiobutton = document.getElementById('audio-button')

    const txtForRead = document.getElementById('title')
    const firstpar = document.getElementById('firstpar')
    const FotoCardapioBraile = document.getElementById('FotoCardapioBraile')
    const description = FotoCardapioBraile.alt

    const secndpar = document.getElementById('secndpar')
    const thirthpar = document.getElementById('thirthpar')
    const secondtitle = document.getElementById('secondtitle')
    const fourpar = document.getElementById('fourpar')
    const fithpar = document.getElementById('fithpar')



    audiobutton.addEventListener('click', () => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(txtForRead.textContent)
        const utterance2 = new SpeechSynthesisUtterance(firstpar.textContent)
        const utterance3 = new SpeechSynthesisUtterance(description)
        const utterance4 = new SpeechSynthesisUtterance(secndpar.textContent)
        const utterance5 = new SpeechSynthesisUtterance(thirthpar.textContent)
        const utterance6 = new SpeechSynthesisUtterance(secondtitle.textContent)
        const utterance7 = new SpeechSynthesisUtterance(fourpar.textContent)
        const utterance8 = new SpeechSynthesisUtterance(fithpar.textContent)

        utterance.lang = 'pt-br'
        utterance2.lang = 'pt-br'
        utterance3.lang = 'pt-br'
        utterance4.lang = 'pt-br'
        utterance5.lang = 'pt-br'
        utterance6.lang = 'pt-br'
        utterance7.lang = 'pt-br'
        utterance8.lang = 'pt-br'

        window.speechSynthesis.speak(utterance)
        window.speechSynthesis.speak(utterance2)
        window.speechSynthesis.speak(utterance3)
        window.speechSynthesis.speak(utterance4)
        window.speechSynthesis.speak(utterance5)
        window.speechSynthesis.speak(utterance6)
        window.speechSynthesis.speak(utterance7)
        window.speechSynthesis.speak(utterance8)


        
    })
}

function stop_audio () {
    window.speechSynthesis.cancel()
}


function toggleDarkMode() {
  document.body.classList.toggle('dark-mode')
  
  const isDarkMode = document.body.classList.contains('dark-mode')

  const iconemodoclaro = document.getElementById('icone-modo-claro')

  if (isDarkMode) {
    iconemodoclaro.src = '../IMGS/Luaclara.svg'
  } else {
    iconemodoclaro.src = '../IMGS/Luaescura.svg'
  }
}

function goToSection() {
    window.location.href = '../index.html'
  }