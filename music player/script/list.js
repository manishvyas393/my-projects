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
    let html = `<div class="list">
        <img src="images/${songlist[i].img}"></img>
        <span>${songlist[i].name}</span>
        </div>`;
    divtag.insertAdjacentHTML("beforeend", html);
};