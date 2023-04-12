const greetingTranslation = [
    {
        en: 'Good morning',
        ru: 'Доброе утро'
    },

    {
        en: 'Good afternoon',
        ru: 'Добрый день'
    },

    {
        en: 'Good evening',
        ru: 'Добрый вечер'
    },

    {
        en: 'Good night',
        ru: 'Доброй ночи'
    }

    
]
//Time and Date

const time=document.querySelector('.time')
const data=document.querySelector('.date')
const Greet = document.querySelector('.greeting')


function showTime () {
    const date=new Date();
    const currentTime = date.toLocaleTimeString()
    time.textContent=currentTime;
    setTimeout(showTime,1000)
    showDate();
    showGreeting()
    if (leng.value=='ru'){
        showGreeting()
    }
    else if (leng.value=='en'){
        showGreetingEn()
    }
    if (leng.value=='ru'){
        showDate();
    }
    else if (leng.value=='en'){
        showDateEn();
    }
}
showTime()

function showDate () {
    const date=new Date();
    const options = {weekday: 'long', month: 'long' , day: 'numeric'}
    const currentDate = date.toLocaleDateString('ru-RU',options);
    data.textContent=currentDate;
}

function showDateEn () {
    const date=new Date();
    const options = {weekday: 'long', month: 'long' , day: 'numeric'}
    const currentDate = date.toLocaleDateString('en-US',options);
    data.textContent=currentDate;
}


function getTimeOfDay () {
    const date = new Date ();
    const hours = date.getHours()  
    if (hours>6 && hours<12) return 'morning'
    else if (hours>=12 && hours<18) return 'afternoon'
    else if (hours>=18 && hours<=24) return 'evening'
    else if (hours>=00 && hours<=6) return 'night'
}



function showGreeting () {
    const timeOfDay = getTimeOfDay();
    let day = 0;
    if(timeOfDay == 'morning'){
        day = 0;
    }
    else if(timeOfDay == 'afternoon'){
        day = 1;
    }
    else if(timeOfDay == 'evening'){
        day = 2;
    }
    else if(timeOfDay == 'night'){
        day = 3;
    }
    const greetingTr = greetingTranslation[day].ru
    Greet.textContent=greetingTr;
} 

function showGreetingEn () {
    const timeOfDay = getTimeOfDay();
    let day = 0;
    if(timeOfDay == 'morning'){
        day = 0;
    }
    else if(timeOfDay == 'afternoon'){
        day = 1;
    }
    else if(timeOfDay == 'evening'){
        day = 2;
    }
    else if(timeOfDay == 'night'){
        day = 3;
    }
    const greetingTr = greetingTranslation[day].en
    Greet.textContent=greetingTr;
} 

console.log('1)+15 2)+10 3)+20 4)+15 5)+10 6)+15 7)+20 8)+15 9)+10 10)+20 11)+10');