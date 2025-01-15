const tickRate = 1000 / 30;
let score = 0;

let patches = new Building('Patches', 0.1, 15, 'buyPatches'); //patches
let brownie = new Building('Brownie', 5, 200, 'buyBrownie'); //brownie
let coco = new Building('Coco', 15, 500, 'buyCoco'); //coco 
let angel = new Building('Angel', 50, 1000, 'buyAngel'); // angel

function incScore() {
    score += patches.cps;
    score += brownie.cps;
    score += coco.cps;
    score += angel.cps;
}

function scorePlusPlus() {
    score++;
}

function updateButtons() {
    patches.buttonState();
    brownie.buttonState();
    coco.buttonState();
    angel.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);