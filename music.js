let input = document.getElementById("input");
let song = document.getElementById("song");
let ctrlicon = document.getElementById("ctrlicon");


song.onloadedmetadata = function(){

    input.max = song.duration;
    input.value = song.currentTime;
}

function playPause(){

    if(ctrlicon.classList.contains("fa-pause")){
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
    }
}

if(song.play()){

    setInterval( ()=>{
        input.value = song.currentTime;
    }, 500)
}


input.onchange = function(){

    song.play();
    song.currentTime = input.value;

    ctrlicon.classList.add("fa-pause");
    ctrlicon.classList.remove("fa-play");
}