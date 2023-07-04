// LOADING => DELETE PAGE LOADING WHEN PAGE LOAD
let loading=document.getElementById('loading')
window.onload=()=>{
    loading.style.display="none"
}
// ==================================================================================
// WHEN CLICK ARROW UP
let arrowUp=document.getElementById('arrow-up')
function arrowUP(){
    scrollTo(0,0);
}
// ==================================================================================
// AUTO WRITE IN MAIN PAGE
let x=1;
const autoWrite=document.getElementById('auto');
const autowritee=()=>{
    const title="Mohamed Shalash . . .    "
    autoWrite.innerText=title.slice(0,x);
    x++;
    if(title.length<x){
        x=1;
    }
};
const stoop=setInterval(autowritee,300)
// ==================================================================================
// WHEN CLCICK BTN BAR IN HEAD => OPEN BAR MENU || CLOSE BAR
document.querySelector('header .bar-icon').addEventListener('click',()=>{
    document.querySelector('header .links').classList.toggle('links-show')
    document.querySelector('header .bar-icon').classList.toggle('bar-icon-show')
})
document.querySelector('header .links').addEventListener('click',()=>{
    document.querySelector('header .links').classList.remove('links-show')
    document.querySelector('header .bar-icon').classList.remove('bar-icon-show')
})
// ==================================================================================
let experince=document.getElementById('experince');
let prograss=document.querySelectorAll('.experince .skill .prograss .prograss-line');
let links =document.querySelectorAll('.links a')
let sections=document.querySelectorAll('.headerLink')
// WHEN SCROLL IN PAGE 
window.onscroll=()=>{
// ARROW UP
    if(scrollY>= 400){
        arrowUp.style.left='20px'
    }
    else{
        arrowUp.style.left=''
    }
// PROGRASS
    if(scrollY >= experince.offsetTop -500){
        prograss.forEach((item)=>{
            item.style.width=item.dataset.width+'%';
        })
    }
    else{
        prograss.forEach((item)=>{
            item.style.width=0;
        })
    }
// HEADER LINKS 
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offest=sec.offsetTop -200;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top >= offest && top < offest + height){
            links.forEach(link=>{
                link.classList.remove('active');
                let activeLink =document.querySelector('.links a[href*=' + id + ']')
                activeLink.classList.add('active')
            })
        }
    })
}
// ==================================================================================
// CATOGRIES IN portfolio PAGE
// WHEN CLICK ANY CATOGIRY MAKE FILLTER
let catogires=document.querySelectorAll('.portfolio .catogires .catogery');
let boxs=document.querySelectorAll('.portfolio .portfolio-boxes section');
catogires.forEach(item=>{
    item.addEventListener('click',(e)=>{
        catogires.forEach(item=>{
            item.classList.remove('active')
        })
        item.classList.add('active')
        boxs.forEach(box=>{
            box.classList.add('hide')
        })
        let boxsActive=document.querySelectorAll(`.portfolio .portfolio-boxes .${item.innerHTML}`);
        boxsActive.forEach(e=>{
            e.classList.remove('hide')
        })
    })    
})
// ====== CHANGE GRID TABLE
let gridDesgin=document.querySelector('.portfolio .icon-grid');
let portfolio=document.querySelector('.portfolio .portfolio-boxes')
let gridDesginMode="c"
gridDesgin.onclick=()=>{
    if(gridDesginMode=="c"){
        gridDesginMode="r"
        gridDesgin.innerHTML=`<span class="material-symbols-outlined">calendar_view_day</span>`
        portfolio.style.gridTemplateColumns="none"
        boxs.forEach(box=>{
            box.classList.add('gridRow')
        })
    }
    else{
        gridDesginMode="c"
        gridDesgin.innerHTML=`<span class="material-symbols-outlined">grid_view</span>`
        portfolio.style.gridTemplateColumns="repeat(auto-fit,minmax(250px,auto))"
        boxs.forEach(box=>{
            box.classList.remove('gridRow')
        })
    }
}
// ==================================================================================
// ALL SETTING 
let setting=document.getElementById('setting-btn');
let settingPage=document.getElementById('setting');
let settingPageClose=document.getElementById('colse-setting');
setting.onclick=()=>{
    settingPage.style.display="block"
    boody.style.overflow="hidden"
};
settingPageClose.onclick=()=>{
    settingPage.style.display="none"
    boody.style.overflow=""
};
// --------------
// colors ==>
let changeColor=document.getElementById('changeColor');
let resetColor=document.getElementById('resetColor');
if(localStorage.colorMode!=null){
    document.documentElement.style.setProperty('--main-color',localStorage.colorMode);
}
changeColor.oninput=(e)=>{
    localStorage.setItem('colorMode',e.target.value);
    document.documentElement.style.setProperty('--main-color',e.target.value);
}
resetColor.onclick=(e)=>{
    localStorage.removeItem('colorMode');
    document.documentElement.style.setProperty('--main-color','#838383');
    e.target.style.animation="colorReset 2s 1 forwards";
    setTimeout(()=>{e.target.style.animation="none";},2000)
}
// --------------
// light mode ==>
let boody=document.getElementById('body');
let lightMode=document.querySelector('.setting-container .scroll-btn');
let lightModeBtn=document.querySelector('.setting-container .scroll-btn .mode');
let lightModeActive="DARK";
if(localStorage.lightMode!=null){
    boody.classList.add(localStorage.lightMode);
}
if(localStorage.lightModeActive!=null){
    lightModeActive=localStorage.lightModeActive;
    lightModeBtn.innerHTML=localStorage.lightModeActive;
}
lightMode.onclick=()=>{
    if(lightModeActive=="DARK"){
        lightModeActive="LIGHT"
        localStorage.setItem('lightMode','lightMode');
        localStorage.setItem('lightModeActive',lightModeActive);
        boody.classList.add('lightMode');
        lightModeBtn.innerHTML="LIGHT";
    }
    else{
        lightModeActive="DARK"
        localStorage.lightModeActive="DARK"
        localStorage.removeItem('lightMode');
        boody.classList.remove('lightMode');
        lightModeBtn.innerHTML=localStorage.lightModeActive;
        lightModeBtn.innerHTML="DARK";
    }
}
// --------------
// BACKGROUND VIDEO ==>
let bgVideos=document.querySelectorAll('.bg-video');
let bgVideosBtn=document.querySelector('.setting-container .videoControl');
let experinceNotVid=document.getElementById('experince')
let bgVideosMode="run";
if(localStorage.bgVideos!=null){
    bgVideos.forEach(vid=>{
        vid.style.display="none"
    })
    bgVideosMode=localStorage.bgVideos;
    bgVideosBtn.innerHTML=`<i class="fa-solid fa-circle-play"></i>`
    experinceNotVid.classList.add('experinceNotVid');
    bgVideosBtn.dataset.msg="background is off"
}
bgVideosBtn.onclick=()=>{
    if(bgVideosMode=="run"){
        bgVideosMode="pause";
        bgVideosBtn.dataset.msg="background is off"
        bgVideos.forEach(vid=>{
            vid.style.display="none"
        })
        bgVideosBtn.innerHTML=`<i class="fa-solid fa-circle-play"></i>`
        experinceNotVid.classList.add('experinceNotVid');
        localStorage.setItem('bgVideos',bgVideosMode)
    }
    else{
        bgVideosMode="run"
        bgVideosBtn.dataset.msg="background is on"
        bgVideos.forEach(vid=>{
            vid.style.display="block"
        })
        bgVideosBtn.innerHTML=`<i class="fa-solid fa-circle-pause"></i>`
        experinceNotVid.classList.remove('experinceNotVid');
        localStorage.removeItem('bgVideos')
    }
}
// --------------
// MUSIC ==>
let music=document.querySelector('.musicPlay');
let musicBtn=document.querySelector('.setting-container .musicControl');
let musicMode="pause";
musicBtn.onclick=()=>{
    if(musicMode=="pause"){
        musicBtn.dataset.msg="music is on"
        musicMode="play";
        musicBtn.innerHTML=`<i class="fa-solid fa-volume-high"></i>`
        musicPlay.play();
    }
    else{
        musicBtn.dataset.msg="music is off"
        musicMode="pause"
        musicBtn.innerHTML=`<i class="fa-solid fa-volume-xmark"></i></i>`
        musicPlay.pause();
    }
}

// ==================================================================================
// MESSAGE WHEN CHANGE IN SETTING
let settingMsg=document.querySelectorAll('.setting-container .settingMsg');
settingMsg.forEach(msg=>{
    msg.addEventListener('click',(e)=>{
        let msgAlert=document.createElement('div');
        msgAlert.className="msg-alert";
        msgAlert.innerHTML=e.target.dataset.msg
        settingPage.appendChild(msgAlert)

        setTimeout(()=>{
            msgAlert.remove()
        },2000)
    })
})

// ==================================================================================
//RANGE
let musicVolume=document.querySelector('.setting-container .musicVolume .countVolume')
function range(value){
    musicPlay.volume=value/100;
    musicVolume.style.display="block"
    musicVolume.innerHTML=value;
    setTimeout(()=>{musicVolume.style.display="none"},5000)
    if(value<=10){
    musicVolume.style.color="#f00"
    }else{
    musicVolume.style.color=""
    }
}
function rangeShow(){
    musicVolume.style.display="block"
}
function rangeHide(){
    musicVolume.style.display="none"
}
// ==================================================================================
//LEARN MORE
let learnMore=document.querySelector('.learn-more')
let learnMoreItems=document.querySelectorAll('.animate-open-learn div');
let btnLearnMore=document.querySelectorAll('.learn-more-btn')
let countLearn=0;
btnLearnMore.forEach(btn=>{
    btn.onclick=()=>{
        learnMoreItems.forEach(item=>{
            item.style.animation='learn1 2s 1 forwards'
            item.style.display="block"
        })
        boody.style.overflow="hidden"
        let mo=setInterval(() => {
            countLearn++;
            if(countLearn==2){
                learnMore.style.animation='learn2 2s 1 forwards'
            }
            if(countLearn==3){
                learnMoreItems.forEach(item=>{
                    item.style.animation=''
                    item.style.display=""
                })
                countLearn=0;
            }
        }, 1000);
        setTimeout(() => {
            clearInterval(mo)
          }, 3000);
    }
})
learnMore.onclick=()=>{
    learnMore.style.animation=''
    boody.style.overflow=""
}