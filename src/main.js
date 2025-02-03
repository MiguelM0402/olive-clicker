const tickRate = 1000 / 30;
let clickStrength = 1;
let score = 1000;

let patches = new Building('Patches', 1, 15, "../media/imgs/iconPatches.png"); //patches
let brownie = new Building('Brownie', 5, 50, "../media/imgs/iconBrownie.png"); //brownie
let coco = new Building('Coco', 15, 100, "../media/imgs/iconCoco.png"); //coco 
let angel = new Building('Angel', 50, 150, "../media/imgs/iconAngel.png"); // angel

let patchesKnife1 = new PatchesKnife('Patches Knife I', 100, patches, "../media/imgs/upgradeKnife.png");

function incScore() {
    score += patches.cps;
    score += brownie.cps;
    score += coco.cps;
    score += angel.cps;
}

function scorePlusPlus() {
    score+= clickStrength;
}

function updateButtons() {
    patches.buttonState();
    brownie.buttonState();
    coco.buttonState();
    angel.buttonState();
    patchesKnife1.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);