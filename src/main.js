const tickRate = 1000 / 30;
let clickStrength = 1;
let score = 1000000000000000;

let patches = new Building('Patches', 5, 25, "../media/imgs/iconPatches.png"); //patches
let brownie = new Building('Brownie', 150, 200, "../media/imgs/iconBrownie.png"); //brownie
let coco = new Building('Coco', 350, 1500, "../media/imgs/iconCoco.png"); //coco 
let angel = new Building('Angel', 550, 15000, "../media/imgs/iconAngel.png"); // angel
let sparky = new Building('Sparky', 850, 150000, "../media/imgs/iconSparky.png");
let tigger = new Building('Tigger', 1500, 1500000, "../media/imgs/iconTigger.png");
let holly = new Building('Holly', 5500, 3500000, "../media/imgs/iconHolly.png");
let rover = new Building('Rover', 10000, 1500000, "../media/imgs/iconRover.png");
let ginger = new Building('Ginger', 2500, 55000000, "../media/imgs/iconGinger.png");

let patchesKnife1 = new PatchesKnife('Patches Knife I', 100000, patches, "../media/imgs/upgradeKnife.png");

function incScore() {
    score += patches.cps;
    score += brownie.cps;
    score += coco.cps;
    score += angel.cps;
    score += sparky.cps;
    score += tigger.cps;
    score += holly.cps;
    score += rover.cps;
    score += ginger.cps;
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
    sparky.buttonState();
    tigger.buttonState();
    holly.buttonState();
    rover.buttonState();
    ginger.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);