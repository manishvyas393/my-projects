let songlist = [
    {
        id: "one",
        name: "daaru badnaam",
        img: "daaru badnaam.jpg",
        song: "daaru badnam.mp3"
    },

    {
        id: "two",
        name: "Yeh dil dewaana",
        img: "yeh dil dewaana.jpg",
        song: "Yeh Dil Deewana.mp3",
    },
    {
        id: "three",
        name: "Jee ni karda",
        img: "jee ni karda.jpg",
        song: "Jee Ni Karda.mp3",
    },
    {
        id: "four",
        name: "saadda haq",
        img: "rockstar.jpg",
        song: "Saadda Haq.mp3"
    },
    {
        id: "five",
        name: "butterfly",
        img: "butterfly.jpg",
        song: "Butterfly.mp3",
    },
    {
        id: "six",
        name: "zaalima",
        img: "zaalima.jpg",
        song: "Zaalima.mp3",
    },
    {
        id: "seven",
        name: "no competition",
        img: "no competition.jpg",
        song: "No Competition.mp3",
    },
    {
        id: "eight",
        name: "nain",
        img: "nain.jpg",
        song: "Nain.mp3",
    },


];
songlist.sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
});
let divtag = document.querySelector("#listholder");

for (var i = 0; i < songlist.length; i++) {
    let html = `<div class="list" div-index="${i}">
                    <div class="list-cover-img">
                        <img src="images/${songlist[i].img}"></img>
                    <div>
                    <div class="list-song-details">
                            <span class="names">${songlist[i].name}</span>
                            <audio class="${songlist[i].id}" src="playlist/${songlist[i].song}"> </audio>
                           <span class="totaltime" id="${songlist[i].id}">00:00</span>
                    </div>

                </div>
                `;
    divtag.insertAdjacentHTML("beforeend", html);

    let songduration = divtag.querySelector(`#${songlist[i].id}`);
    let AudioTag = divtag.querySelector(`.${songlist[i].id}`);

    AudioTag.onloadeddata = function () {
        var time = AudioTag.duration;
        var mins = Math.floor(time / 60);
        var sec = Math.floor(time % 60)
        if (mins < 10) {
            mins = '0' + (mins);
        }
        if (sec < 10) {
            sec = '0' + (sec);
        }
        songduration.innerText = `${mins}:${sec}`;
    };
};
let alldivtag = divtag.querySelectorAll("div");
for (var j = 0; j < alldivtag.length; j++) {
    alldivtag[j].setAttribute("onclick", "songclicked(this)");
}
function songclicked(element) {
    var getdivindex = element.getAttribute("div-index");;
    index = getdivindex;
    loadmusic(index);
    playmusic();
    play.style.display = "none";
    pause.style.display = "block";
    stopped.style.display = "block";
    progressed.style.display = "block";
}
function loopsong() {
    let gettext = reapeatbtn.innerText;
    switch (gettext) {
        case "repeat":
            reapeatbtn.innerHTML = "repeat_one";
            reapeatbtn.setAttribute("tittle", "song looped");
            break;

        case "repeat_one":
            reapeatbtn.innerHTML = "shuffle";
            reapeatbtn.setAttribute("tittle", "playback shuffle");
            break;

        case "shuffle":
            reapeatbtn.innerHTML = "repeat";
            reapeatbtn.setAttribute("tittle", "playlist looped");
            break;
    }
}

music.addEventListener("ended", () => {

    let gettext = reapeatbtn.innerText;
    switch (gettext) {
        case "repeat":
            nextmusic();
            break;

        case "repeat_one":
            music.currentTime = 0;
            loadmusic(index);
            playmusic();
             break;

        case "shuffle":
            let randindex = Math.floor((Math.random() * songlist.length) + 1);
            do {
                randindex = Math.floor((Math.random() * songlist.length) + 1);
            } while (index == randindex);
            index = randindex;
            loadmusic(index);
            playmusic();
            break;

    }

}
);