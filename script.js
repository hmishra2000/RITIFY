console.log("Welcome to Spotify");

//Initialise the variables
let index=0;
let audioElement= new Audio('songs/1.mp3')
// audioElement.play();
let masterplay= document.getElementById("masterplay");
let myProgressBar= document.getElementById("progressBar");
let playgif= document.getElementById("playing")
let songItems= Array.from(document.getElementsByClassName("songItem"));
let masterSongName= document.getElementById("masterSongName");
// let songItemPlay= Array.from(document.getElementsByClassName("songItemPlay"));



let songs =[
   {songName : "Pavitra Rishta- Original", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"},
   {songName : "Char Kadam", filePath : "songs/2.mp3", coverPath : "covers/2.jpg"},
   {songName : "Hardam Hamdam", filePath : "songs/3.mp3", coverPath : "covers/3.jpg"},
   {songName : "Kaun Tujhe", filePath : "songs/4.mp3", coverPath : "covers/4.jpg"},
   {songName : "Main Nara-E-Mastana", filePath : "songs/5.mp3", coverPath : "covers/5.jpg"},
   {songName : "Raataan Lambiyan", filePath : "songs/6.mp3", coverPath : "covers/6.jpg"},
   {songName : "Ranjha", filePath : "songs/7.mp3", coverPath : "covers/7.jpg"},
   {songName : "Sapna Jahan", filePath : "songs/8.mp3", coverPath : "covers/9.jpg"},
   {songName : "Tainu Leke", filePath : "songs/9.mp3", coverPath : "covers/9.jpg"},
   {songName : "Ye Kahan aa Gaye hum", filePath : "songs/10.mp3", coverPath : "covers/10.jpg"},
   
]

songItems.forEach((element ,i)=> {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
    
})



//Handle Play pause
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    playgif.style.opacity='1';
    }
    
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        playgif.style.opacity='0'

    }

    

})
audioElement.addEventListener('timeupdate', ()=>{
    console.log('Updatetime');
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress)
    myProgressBar.value= progress;
    if(audioElement.currentTime== audioElement.duration){
        if(index==9){
            index=0;
        }
        else{
            index+=1;
        }
            audioElement.src=`songs/${index+1}.mp3`;
            audioElement.currentTime=0;
            audioElement.play(); 
            playgif.style.opacity='1';
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle'); 
            masterSongName.innerText=  songs[index].songName;
        
    }
    
    
})


myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= ((myProgressBar.value * audioElement.duration)/100);
})




// const makeAllPlays= ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//         element.classList.remove('fa-pause-circle')
//         element.classList.add('fa-play-cicle');
//     })
// }
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e)=>{
        console.log(e);
        makeAllPlays();
        index= parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${index+1}.mp3`;
        masterSongName.innerText=  songs[index].songName;
        audioElement.currentTime=0;
        audioElement.play(); 
        playgif.style.opacity='1';
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle'); 
      
    })
});


document.getElementById("next").addEventListener('click', ()=>{
    if(index>=9){
        index=0;
    }
    else{
        index+=1;
    }
        audioElement.src=`songs/${index+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play(); 
        playgif.style.opacity='1';
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle'); 
        masterSongName.innerText=  songs[index].songName;
        
      
    


})
document.getElementById("back").addEventListener('click', ()=>{
    if(index<=0){
        index=9;
    }
    else{
        index-=1;
    }
        audioElement.src=`songs/${index+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play(); 
        playgif.style.opacity='1';
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle'); 
        masterSongName.innerText=  songs[index].songName;
    


})

