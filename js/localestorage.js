const name=document.querySelector('.name')

function setLocaleStorage () {
localStorage.setItem ('name', name.value)
localStorage.setItem('city',city.value)
localStorage.setItem('leng',leng.value)
localStorage.setItem('tegText',tegText.value)
localStorage.setItem('typeApi',typeApi.value)
localStorage.setItem('audioBtn',audioButton.value)
localStorage.setItem('timeBtn',timeButton.value)
localStorage.setItem('dateBtn',dateButton.value)
localStorage.setItem('greetBtn',greetingButton.value)
localStorage.setItem('weatherBtn',weatherButton.value)
localStorage.setItem('quoteBtn',quotesButton.value)
localStorage.setItem('toDoBtn',toDoBtn.value)
}
window.addEventListener('beforeunload',setLocaleStorage)

function getLocaleStorage () {
    if (localStorage.getItem('name')){
        name.value=localStorage.getItem('name');
    }
    if (localStorage.getItem('city')){
        city.value=localStorage.getItem('city');
    }
    if (localStorage.getItem('leng')){
        
        leng.value = localStorage.getItem('leng')
        changeLen()

    }
    if(localStorage.getItem('tegText')){
        tegText.value=localStorage.getItem('tegText')
    }
    if (localStorage.getItem('typeApi')){
        typeApi.value = localStorage.getItem('typeApi')
            tagForApi()
    }
    if (localStorage.getItem('audioBtn')){
        audioButton.value = localStorage.getItem('audioBtn')
        enableAndDisableBtn(audioButton,playerDiv)
    }
    if (localStorage.getItem('timeBtn')){
        timeButton.value = localStorage.getItem('timeBtn')
        enableAndDisableBtn(timeButton,time)
    }
    if (localStorage.getItem('dateBtn')){
        dateButton.value = localStorage.getItem('dateBtn')
        enableAndDisableBtn(dateButton,data)
    }
    if (localStorage.getItem('greetBtn')){
        greetingButton.value = localStorage.getItem('greetBtn')
        enableAndDisableBtn(greetingButton,greetingCont)
    }

    if (localStorage.getItem('weatherBtn')){
        weatherButton.value = localStorage.getItem('weatherBtn')
        enableAndDisableBtn(weatherButton,weatherDiv)
    }

    if (localStorage.getItem('quoteBtn')){
        quotesButton.value = localStorage.getItem('quoteBtn')
        enableAndDisableBtn(quotesButton,quoteDiv)
    }

    if (localStorage.getItem('toDoBtn')){
        toDoBtn.value = localStorage.getItem('toDoBtn')
        enableAndDisableBtn(toDoBtn,toDoMenu)
    }
}
document.addEventListener('DOMContentLoaded',getLocaleStorage)


