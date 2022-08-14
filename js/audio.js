import playList from "./playList.js";

const play = document.querySelector('.play')
const playNextBtn = document.querySelector('.play-next')
const playPrevBtn = document.querySelector('.play-prev')
const playListContainer = document.querySelector('.play-list')
const musicDuration = document.querySelector('.endTime')
const voolumeButton = document.querySelector('.volume-button')
const volumeProgressRange = document.querySelector('.volume-progress')
const musicName = document.querySelector('.music-name')

let isPlay=false;
let  audio = new Audio();
let playNum = 0;
let lisMassive = [];
let durationMas = [];
let pauseMas = [];

function playAudio () {
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    lisMassive.forEach(el=>el.classList.remove('item-active'))
    lisMassive[playNum].classList.add('item-active')
    musicName.textContent = `${playList[playNum].title}`
    if (!isPlay){
    audio.play();
     isPlay = true
     play.classList.add('pause')
    }
    else if (isPlay){
    audio.pause() 
    isPlay = false;
    play.classList.remove('pause')
    }  
    audio.addEventListener('ended',playNext)
    playList.forEach(el=>{
        durationMas.push(el.duration)
    })
    musicDuration.textContent  = `${durationMas[playNum]}`
    pauseMas.forEach (el => {
        el.classList.remove('pause')
        if (!isPlay){
            pauseMas[playNum].classList.remove('pause')
        }
        else {
            pauseMas[playNum].classList.add('pause')
        }
    })

}

function playNext (){
    playNum++;
    isPlay = false;
    if(playNum > playList.length - 1){
        playNum=0
    }
    if(isPlay==false){
        pauseMas.forEach(el=>el.classList.remove('pause'))
        pauseMas[playNum].classList.toggle('pause')
        }
     playAudio();

}

function playPrev () {
    playNum--;
    isPlay = false;
    if(playNum < 0){
        playNum = playList.length-1;
    }
        if(isPlay==false){
        pauseMas.forEach(el=>el.classList.remove('pause'))
        pauseMas[playNum].classList.toggle('pause')
        }
    playAudio()

}
play.addEventListener('click',playAudio)   
playNextBtn.addEventListener('click',playNext)
playPrevBtn.addEventListener('click',playPrev)

playList.forEach (el=>{
    const li = document.createElement('li');
    const div = document.createElement ('div');
    div.classList.add('play_mini')
    li.classList.add('play-item')
    li.textContent = el.title;
    playListContainer.append(li);
    lisMassive.push(li)
    li.append(div)
    pauseMas.push(div)
})


setInterval (()=>{
    const progress = document.querySelector('.progress');
    progress.style.width = audio.currentTime / audio.duration *100 +'%';
    const currentTimeTreck = document.querySelector('.startTime')
    currentTimeTreck.textContent = formatTime(audio.currentTime)
    },500)

    function formatTime (number) {
        let min = Math.floor((number/60))
        let sec = Math.floor(number-(min*60))
        if(sec<10){
            sec = `0${sec}`
        }
        return `${min}:${sec}`
    }



     function volumeProgress () {
      let  volumeRange = volumeProgressRange.value/100;;
        audio.volume = volumeRange;
        if(volumeRange == 0) {
            voolumeButton.classList.add('mute')
        }
        else {
            voolumeButton.classList.remove('mute')
        }
        return volumeRange
     }

     volumeProgressRange.addEventListener('click', volumeProgress)
    let curretVolumeProgress = 0;
     function mute (){
        if (audio.volume !== 0 ){
            audio.volume = 0;
            voolumeButton.classList.add('mute')
            curretVolumeProgress = volumeProgressRange.value
            volumeProgressRange.value = 0;
            return curretVolumeProgress
        }
        else if(  audio.volume == 0) {
            volumeProgressRange.value = curretVolumeProgress ;
                audio.volume = volumeProgress();
                voolumeButton.classList.remove('mute')
        }
    }

    voolumeButton.addEventListener('click',mute)

    const timeLine = document.querySelector('.timeline')
    
    timeLine.addEventListener('click' ,e=>{
        const timeLineWidth = window.getComputedStyle(timeLine).width
        const timeToSeek = e.offsetX / parseInt(timeLineWidth) * audio.duration;
        audio.currentTime = timeToSeek
    })
    pauseMas.forEach((el,index) =>{el.addEventListener('click' , ()=>{
        playNum = index;

        if(isPlay == false){
            playAudio()
            isPlay = true
        }
        else if (isPlay==true){
            playAudio()
            isPlay = false
        }
 
    } )

})
