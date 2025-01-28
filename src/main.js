const tickRate = 1000 / 30;
let clickStrength = 1;
let score = 0;

let patches = new Building('Patches', 0.1, 15); //patches
let brownie = new Building('Brownie', 5, 200); //brownie
let coco = new Building('Coco', 15, 500); //coco 
let angel = new Building('Angel', 50, 1000); // angel

let patchesKnife1 = new PatchesKnife('Patches Knife I', 100, patches);

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