let score = 0;

let patches = new Friend('Patches', 0.1, 15, 'buyPatches');

function incScore() {
    score += patches.cps;
}

function scorePlusPlus(){
    score++;
    document.getElementById('score').innerHTML = score;
    incScore();
}
