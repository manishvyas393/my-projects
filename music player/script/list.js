let songlist = [
    {
        name: "daaru badnaam",
        img: "daaru badnaam.jpg",
        song: "daaru badnam.mp3"
    },

    {
        name: "Yeh dil dewaana",
        img: "yeh dil dewaana.jpg",
        song: "Yeh Dil Deewana.mp3"
    },
    {
        name: "Jee ni karda",
        img: "jee ni karda.jpg",
        song: "Jee Ni Karda.mp3"
    },

];

let divtag = document.querySelector("#listholder");

for (var i = 0; i < songlist.length; i++) {
    let html = `<div class="list" div-index="${i}">
                    <img src="images/${songlist[i].img}"></img>
                    <span class="names">${songlist[i].name}</span>
                    <audio class="audio2" src="playlist/${songlist[i].song}"> </audio>
                </div>`;
    divtag.insertAdjacentHTML("beforeend", html);
}
let alldivtag = divtag.querySelectorAll("div");
for (var j = 0; j < alldivtag.length; j++) {
    alldivtag[j].setAttribute("onclick", "songclicked(this)");
}
function songclicked(element) {
    var getdivindex = element.getAttribute("div-index");
    index = getdivindex;
    loadmusic(index);
    play.style.display = "none";
    pause.style.display = "block";
    stopped.style.display = "block";
    progressed.style.display = "block";

}