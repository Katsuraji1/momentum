const settingBtn = document.querySelector('.settings')
const settingPopUp = document.querySelector('.setting-menu')
const closeBtn = document.querySelector('.close')
const timeButton = document.querySelector('.timeBtn')
const dateButton = document.querySelector('.dataBtn')
const greetingButton = document.querySelector('.greetingBtn')
const greetingCont = document.querySelector('.greeting-container')
const quotesButton = document.querySelector('.qoutesBtn')
const weatherButton = document.querySelector('.weatherBtn')
const weatherDiv = document.querySelector('.weather')
const audioButton = document.querySelector('.audioBtn')
const playerDiv = document.querySelector('.player')
const typeApi = document.querySelector('.typeApi')
const typeApiLi = document.querySelector('.typeApiLi')
const typeApiText = document.querySelector('.typeApiText')
const tagApi = document.querySelector('.tagApi')
const audioButton1 = document.querySelector('.audioBtn')
const tegText = document.querySelector('.tegText')
const leng = document.querySelector('.leng')
const musicName = document.querySelector('.music-name')
const settingLang = document.querySelector('.settingLang')
const settingSource = document.querySelector('.settingSource')
const settingTime = document.querySelector('.settingTime')
const settingDate = document.querySelector('.settingDate')
const settingGreeting = document.querySelector('.settingGreeting')
const settingQuotes = document.querySelector('.settingQuotes')
const settingWeather = document.querySelector('.settingWeather')
const settingAudioplayer = document.querySelector('.settingAudioplayer')
const settingToDoList = document.querySelector('.settingToDoList')
const namePlaceholder = document.querySelector('.name')
const quoteDiv = document.querySelector('.quoteAndAuthor')
const toDoBtn = document.querySelector('.toDoBtn')
const toDoMenu = document.querySelector('.toDoMenu')
const weatherDefault = document.querySelector('.city')

let isOpen = false

settingBtn.addEventListener('click', ()=>{
    if(isOpen == false){
         settingPopUp.classList.add('setting-menu-open') 
         isOpen = true  
    }
    else if (isOpen == true){
        settingPopUp.classList.remove('setting-menu-open')   
        isOpen = false 
    }

})

closeBtn.addEventListener('click', ()=>{
    settingPopUp.classList.remove('setting-menu-open')   
    isOpen = false 
})


typeApi.addEventListener('click',()=>{
    if (typeApi.value=='Git'){
        tagApi.classList.remove('visible')
        typeApiText.classList.remove('visible')
    } else {

        tagApi.classList.add('visible')
        typeApiText.classList.add('visible')
    }
})      

function enableAndDisable (el1,el2) {
    if (el1.value == 'enable' || el1.value =='вкл'){
        if(leng.value=='en'){
            el1.value = 'disable'
        }
        else if (leng.value=='ru'){
            el1.value = 'выкл'
        }
        el2.classList.add ('hidden')
        }
    else if (el1.value == 'disable'|| el1.value == 'выкл'){
        if(leng.value == 'en'){
        el1.value = 'enable'
        }
else if (leng.value =='ru'){
    el1.value ='вкл'
}
        el2.classList.remove ('hidden')
    }
}

audioButton.addEventListener('click' ,()=>{enableAndDisable(audioButton,playerDiv)})
timeButton.addEventListener('click' , ()=>{enableAndDisable(timeButton,time)})
dateButton.addEventListener('click', ()=>{enableAndDisable(dateButton,data)})
greetingButton.addEventListener('click',()=>{enableAndDisable(greetingButton,greetingCont)})
weatherButton.addEventListener('click', ()=>{enableAndDisable(weatherButton,weatherDiv)})
quotesButton.addEventListener('click',()=>{ enableAndDisable(quotesButton,quoteDiv)})
toDoBtn.addEventListener('click',()=>{enableAndDisable(toDoBtn,toDoMenu)})


function buttonLengEnToRu (el1){
    if (el1.value == 'enable'){
        el1.value = 'вкл'
    }
    else if (el1.value =='disable'){
        el1.value = 'выкл'
    }
}

function buttonLengRuToEn (el1){
    if (el1.value == 'вкл'){
        el1.value = 'enable'
    }
    else if (el1.value =='выкл'){
        el1.value = 'disable'
    }
}

function changeLengRu(){
    getQuotes();
    getWeather()
    showGreeting()
    showDate()
    musicName.textContent =`Моя музыка`
    settingLang.textContent='Язык'
    settingSource.textContent='Источник фото'
    tagApi.textContent = 'Тег для API'
    settingTime.textContent = 'Время'
    settingDate.textContent = 'Дата'
    settingGreeting.textContent = 'Приветствие'
    settingQuotes.textContent = 'Цитата дня'
    settingWeather.textContent = 'Погода'
    settingAudioplayer.textContent = 'Аудиоплеер'
    settingToDoList.textContent = 'Список дел'
    city.placeholder = '[Введите город]'
    namePlaceholder.placeholder = '[Введите имя]'
    buttonLengEnToRu(timeButton)
    buttonLengEnToRu(audioButton)
    buttonLengEnToRu(dateButton)
    buttonLengEnToRu(greetingButton)
    buttonLengEnToRu(weatherButton)
    buttonLengEnToRu(quotesButton)
    buttonLengEnToRu(toDoBtn)
}
    function changeLengRuEn(){
    getQuotes1()
    getWeather1()
    showGreetingEn()
    showDateEn()
    musicName.textContent =`My music`
    settingLang.textContent='Language'
    settingSource.textContent='Photo source'
    tagApi.textContent = 'Tag API'
    settingTime.textContent = 'Time'
    settingDate.textContent = 'Date'
    settingGreeting.textContent = 'Greeting'
    settingQuotes.textContent = 'Quotes'
    settingWeather.textContent = 'Weather'
    settingAudioplayer.textContent = 'Audioplayer'
    settingToDoList.textContent = 'To Do List'
    city.placeholder = '[Enter city]'
    namePlaceholder.placeholder = '[Enter name]'
    buttonLengRuToEn(timeButton)
    buttonLengRuToEn(audioButton)
    buttonLengRuToEn(dateButton)
    buttonLengRuToEn(greetingButton)
    buttonLengRuToEn(weatherButton)
    buttonLengRuToEn(quotesButton)
    buttonLengRuToEn(toDoBtn)
    }
leng.addEventListener('change', changeLen)
    function changeLen(){
if (leng.value == 'ru'){
    changeLengRu()
}
else if (leng.value == 'en'){
    changeLengRuEn()
}
}

function enableAndDisableBtn(el1,el2){
    if (el1.value =='enable'){
        el1.value ='disable'
        enableAndDisable(el1,el2) 
    } else if (el1.value =='disable'){
        el1.value ='enable'
        enableAndDisable(el1,el2) 
    }
    if (el1.value =='вкл'){
        el1.value ='выкл'
        enableAndDisable(el1,el2) 
    } else if (el1.value =='выкл'){
        el1.value ='вкл'
        enableAndDisable(el1,el2)  
    }
}