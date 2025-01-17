class Upgrade {
    constructor(upgradeName, cost) {
    this.upgradeName = upgradeName;
    this.cost = cost;
    this.buttonId = 'buy' + building;
    this.owned = false;
}

purchase() {
    score -= this.cost;
    this.Owned = true;
}

buttonState() {
    if (!this.visible) {
        document.getElementById(this.buttonId).style.display = 'none';
        if (score >= this.cost) {
            this.visible = true;
            document.getElementById(this.buttonId).style.display =
                'initial';
        }
    }

    if (score < this.cost) {
        document.getElementById(this.buttonId).disabled = true;
    } else {
        document.getElementById(this.buttonId).disabled = false;
    }

    document.getElementById(this.buttonId).innerHTML = 
        'Buy ' + 
        this.buildingName +
        ' (Cost: ' +
        Math.ceil(this.cost).toLocaleString() +
        ' Olives)';
}

}