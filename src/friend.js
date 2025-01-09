class Friends {
    constructor(buildingName, baseCps, baseCost, buttonId) {
        this.buildingName = buildingName;
        this.baseCps = baseCps;
        this.cost- = baseCost;
        this.buttonId = buttonId;
        this.amountOwned = 0;
        this.cps = 0;
        this.visible = true 
        //change to false later
    }

    purchase(){
        score -= this.cost;
        this.amountOwned++;
        this.cps = this.baseCps * this.amountOwned;
        this.cost = Math.ceil(this.cost * 1.15 ** this.amountOwned);
    }
}