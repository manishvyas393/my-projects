var music = document.getElementById('music');
var musicimg = document.getElementById('cover');
var musicname = document.getElementById('name');
var play = document.getElementById('play');
var pause = document.getElementById('pause');
var progressed = document.getElementById('progressed');
var progressbar = document.getElementById('progress-bar');
var stopped = document.getElementById('stop');
var next = document.getElementById('next');
var previous = document.getElementById('prev');
var listdisplay = document.getElementById('musiclist');
var listcontainer = document.getElementById('listholder');


let index = 0;

window.addEventListener('load', function (e) {
    loadmusic(index);
});
/*load music */
function loadmusic(index) {
    musicname.innerText = songlist[index].name;
    musicimg.src = `images/${songlist[index].img}`;
    music.src = `playlist/${songlist[index].song}`;
}
/*play music */
play.onclick = function (e) {
    music.play();
    play.style.display = "none";
    pause.style.display = "block";
    stopped.style.display = "block";
    progressed.style.display = "block";
}
/*pause music */
pause.onclick = function (e) {
    music.pause();
    pause.style.display = "none";
    play.style.display = "block"
    stopped.style.display = "none";
    progressed.style.display = "block";
}
/*change music */
next.onclick = function () {
    index++;
    loadmusic(index);
    music.play();
    play.style.display = "none";
    pause.style.display = "block";
    stopped.style.display = "block";
    progressed.style.display = "block";
}
/*play previous  music */
previous.onclick = function () {
    index--;
    loadmusic(index);
    music.play();
    play.style.display = "none";
    pause.style.display = "block";
    stopped.style.display = "block";
    progressed.style.display = "block";

}
/*stop music */
stopped.onclick = function () {
    music.currentTime = 0;
    music.pause();
    pause.style.display = "none";
    play.style.display = "block";
    stopped.style.display = "none";
}
/*display songlist */
listdisplay.onclick = function () {
    if (listcontainer.style.display == "none") {
        listcontainer.style.display = "block";
    }
    else {
        listcontainer.style.display = "none";
    }
}
/*song duration */
music.onloadeddata = function () {
    var time = music.duration;
    var mins = Math.floor(time / 60);
    var sec = Math.floor(time % 60)
    if (mins < 10) {
        mins = '0' + (mins);
    }
    if (sec % 10) {
        sec = '0' + (sec);
    }
    document.getElementById('dura').innerText = `${mins}:${sec}`;
}
/*playing music with current time and auto fill progress bar */
music.ontimeupdate = function (e) {
    progressed.style.width = Math.floor(music.currentTime * 100 / music.duration) + "%";
    progressed.style.backgroundColor = "rgb(2, 255, 171)";

    let curtime = music.currentTime;
    let curmins = Math.floor(curtime / 60);
    let cursec = Math.floor(curtime % 60);

    if (curmins < 10) {
        curmins = '0' + parseInt(curmins);
    }
    if (cursec < 10) {
        cursec = '0' + parseInt(cursec);
    }
    document.getElementById('cur').innerText = curmins + ":" + cursec;


}
/*forward music */
progressbar.onclick = function (e) {
    music.currentTime = ((e.offsetX / progressbar.offsetWidth) * music.duration);
}