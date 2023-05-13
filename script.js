const songs=[
  "songs/asan_nahi.mp3",
  "songs/bhula_dena.mp3",
  "songs/chahun.mp3",
  "songs/hum.mp3",
  "songs/piya.mp3",
  "songs/sunf.mp3",
  "songs/sunm.mp3",
  "songs/tum.mp3",
];
const ssname=[
    "Aasan Nahi Yahan",
    "Bhula Dena",
    "Chahun Main Ya Naa",
    "Hum Mar Jayenge",
    "Piya Aaye Na",
    "Sunn Raha Hai(Female)",
    "Sunn Raha Hai(Male)",
    "Tum Hi Ho",
];
const singer=[
    "Arijit Singh",
    "Mustafa Zahid",
    "Palak Muchhal,Arijit Singh",
    "Tulsi Kumar,Arijit Singh",
    "Tulsi Kumar,KK",
    "Shreya Goshal",
    "Ankit Tiwari",
    "Arijit Singh",

];



var i=0;
let r,z;
const play=document.querySelector(".play");
const player=document.querySelector("audio");
const pause=document.querySelector(".pause");
const next=document.getElementById("next");
const back=document.getElementById("previous");
const shuffle=document.getElementById("shuffle");
const artist=document.getElementById("singer");
const sname=document.getElementById("name");
const cimg=document.getElementById("immg")
const slider=document.getElementById("volume");
const Slider=document.getElementById("range");
const tt=document.getElementById("tt");
const it=document.getElementById("in-time")

let playing=false;

play.addEventListener("click",function(){
    playing?pau():plays();
    player.currentTime=z;

})
pause.addEventListener("click",function(){
    playing?pau():plays();
    Slider.value=r;
})
next.addEventListener("click",function(){
    i++;
    if(i>songs.length-1){
        i=0;
    }
    // player.pause();
    let url="cover/img-"+Math.floor(Math.random()*2)+".jpg";
    cimg.src=url;
    // pau()
    player.src=songs[i];
    plays();
    Slider.value=0;
})
back.addEventListener("click",function(){
    i--;
    if(i<0){
        i=7;
    }
    let url="cover/img-"+Math.floor(Math.random()*2)+".jpg";
    cimg.src=url;
    // player.pause();
    // pau()
    player.src=songs[i];
    plays();
    Slider.value=0;
})
slider.addEventListener('input',function(){
    player.volume=slider.value/100;
})
Slider.addEventListener('input',()=>{
    var x=player.duration;
    player.currentTime=Slider.value*(x/100);
})
function plays(){
    artist.innerText=singer[i];
    sname.innerText=ssname[i]
    player.src=songs[i];
    pause.classList.remove("non");
    play.classList.add("non");
    pause.style.zIndex = 1;
    play.style.zIndex = -1;
    playing=true;
    player.play();
    
    // Slider.value=0;
}
function pau(){
    playing=false;
    player.pause();
    pause.classList.add("non");
    play.classList.remove("non");
    pause.style.zIndex = -1;
    play.style.zIndex = 1;
}
player.addEventListener('loadedmetadata',()=>{
    var x=Math.floor(player.duration/60);
    var y=Math.floor(player.duration%60);
    var q = ("0" + y).slice(-2);
    var w = ("0" + x).slice(-2);
    var z=w+":"+q;
tt.innerText=z;
// Slider.value=player.currentTime;
    // console.log(z);
})
player.addEventListener('timeupdate',(event)=>{
    // Slider.value=10000/player.currentTime
    // console.log(event);
    var a=Math.floor(player.currentTime/60);
    var b=Math.floor(player.currentTime%60);
    var c = ("0" + a).slice(-2);
    var d = ("0" + b).slice(-2);
    var e=c+":"+d;
    it.innerText=e;
    const {currentTime,duration}=event.srcElement;
    // console.log(duration);
    
    Slider.value=(currentTime*100)/duration;
    r=(currentTime*100)/duration;
    z=currentTime;    

})
