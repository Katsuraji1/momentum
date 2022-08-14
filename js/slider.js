let randomNum;

const body = document.querySelector('body')

function getRundomNum (min,max) {
min=Math.ceil(min)
max=Math.floor (max);
return Math.floor (Math.random()*(max-min+1))+min;
}

randomNum=getRundomNum(1,20);

let timeOfDay = getTimeOfDay();
function setBg() {
    let bgNum = randomNum.toString().padStart(2,0);
    const img=new Image();
    img.src=`https://raw.githubusercontent.com/Katsuraji1/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
    img.onload=()=> {
    body.style.backgroundImage = `url(https://raw.githubusercontent.com/Katsuraji1/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg)`
}
}
setBg()

const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')


async function getLinkToImage (){
    const img = new Image()
   const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=0LPs3la-5doCuzY_KbnCXvrLMQu6qkeh-cJ2y0j1AFs`
   const res = await fetch (url)
   const data = await res.json();
   img.src = data.urls.regular
   img.onload =()=>{
   body.style.backgroundImage= `url("${img.src}")`
   }
}

async function getLinkToImage1 (){
    const img = new Image()
   const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tegText.value}&client_id=0LPs3la-5doCuzY_KbnCXvrLMQu6qkeh-cJ2y0j1AFs`
   const res = await fetch (url)
   const data = await res.json();
   img.src = data.urls.regular
   img.onload =()=>{
   body.style.backgroundImage= `url("${img.src}")`
   }
}

async function getLinkToImageFliker () {
    const img = new Image ()
     const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=3260ca5e94b235e1b52bf4331ec45001&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`
     const res = await fetch (url)
     const data = await res.json()
     img.src = data.photos.photo[getRundomNum(1,100)].url_l
     img.onload = ()=>{
         body.style.backgroundImage =`url("${img.src}")`
    }
 }

 async function getLinkToImageFliker1 () {
    const img = new Image ()
     const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=3260ca5e94b235e1b52bf4331ec45001&tags=${tegText.value}&extras=url_l&format=json&nojsoncallback=1`
     const res = await fetch (url)
     const data = await res.json()
     img.src = data.photos.photo[getRundomNum(1,100)].url_l
     img.onload = ()=>{
         body.style.backgroundImage =`url("${img.src}")`
    }
 }
typeApi.addEventListener('change', chooseApi)

    function chooseApi(){
    if (typeApi.value == 'Git'){
        setBg()
    }

    else if(typeApi.value == 'Unsplash'){
        getLinkToImage()
    }
            else if(typeApi.value == 'Flickr'){
                getLinkToImageFliker()
        }  
    }
    function tagForApi(){
    if(typeApi.value=='Unsplash'){
    if(tegText.value == 0){
        getLinkToImage()
    } else {
        getLinkToImage1()
    }
}
     else if (typeApi.value == 'Flickr'){
        if(tegText.value == 0){
            getLinkToImageFliker()
        } else {
            getLinkToImageFliker1()
        }
    }
    else{
        setBg() 
    }
}
tegText.addEventListener('change',tagForApi)

    
    slideNext.addEventListener('click', ()=> {
        if(typeApi.value == 'Git' || tagApi.value == undefined){
        randomNum++;
        if (randomNum>20) randomNum=1;
        setBg();
        }
        else if (typeApi.value == 'Unsplash' && tegText.value == 0){
            getLinkToImage() 
        }
        else if (typeApi.value == 'Flickr' && tegText.value == 0 ){
            getLinkToImageFliker()
        }
        else if (typeApi.value == 'Unsplash' && tegText.value !== 0){
            getLinkToImage1()
        }
        else if (typeApi.value == 'Flickr' && tegText.value !== 0){
            getLinkToImageFliker1()
        }
    })
    
    slidePrev.addEventListener('click', ()=> {
        if(typeApi.value == 'Git' || tagApi.value == undefined){
        if(randomNum<=1) randomNum=21;
        randomNum--;
        setBg();
        }
        else if (typeApi.value == 'Unsplash'){
            getLinkToImage() 
        }
        else if (typeApi.value == 'Flickr'){
            getLinkToImageFliker()
        }
    })