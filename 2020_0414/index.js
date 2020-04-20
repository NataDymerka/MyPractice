document.querySelector(".main-cat img").addEventListener("mouseenter", showDescr);
document.querySelector(".main-cat img").addEventListener("mouseleave", hideDescr);
document.querySelector(".main-cat img").addEventListener("click", turnAudio);

let juniorCat = document.querySelectorAll(".junior-cat");
juniorCat.forEach(item => {
    item.addEventListener("mouseenter", showName)
});
juniorCat.forEach(item => {
    item.addEventListener("mouseleave", hideName)
});
let mainName = document.querySelector(".main-cat p");
let mainDescr = document.querySelector(".main-descr");
let audio = document.querySelector("audio");
let arrowRight = document.querySelector("#right");
let arrowCenter = document.querySelector("#center");
let arrowLeft = document.querySelector("#left");
let arrows = document.querySelectorAll("hr");
console.log(arrows)
function showDescr() {
    mainDescr.style.display = "inline-flex";
    mainName.style.animation = "showName 1s ease-in-out 0.1s 1 alternate forwards";
    for (let i = 0; i < arrows.length; i++) {
        arrows[i].style.border = "2px solid #0000ff";
    }
}

function hideDescr() {
    mainDescr.style.display = "none";
    mainName.style.animation = "showImg 1s ease-in-out 0s 1 alternate forwards";
    for (let i = 0; i < arrows.length; i++) {
        arrows[i].style.border = "1px solid #000";
    }
}

function turnAudio() {
    audio.play();
    console.log("click")
}

function showName() {
    let targetName = event.target.lastElementChild;
    targetName.style.animation = "showName 1s ease-in-out 0.1s 1 alternate forwards";
    if (event.target == juniorCat[0]) {
        arrowRight.style.border = "2px solid #0000ff";
    } else if (event.target == juniorCat[1]){
        arrowCenter.style.border = "2px solid #0000ff";
    } else {
        arrowLeft.style.border = "2px solid #0000ff";
    }
}

function hideName() {
    let targetName = event.target.lastElementChild;
    targetName.style.animation = "showImg 1s ease-in-out 0s 1 alternate forwards";
    if (event.target == juniorCat[0]) {
        arrowRight.style.border = "1px solid #000";
    } else if (event.target == juniorCat[1]){
        arrowCenter.style.border = "1px solid #000";
    } else {
        arrowLeft.style.border = "1px solid #000";
    }
}