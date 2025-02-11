class BrowniesChocolate extends Upgrade {
    constructor(upgradeName, cost, building, imgPick){
        super(upgradeName, cost, imgPick);
        this.building = building;
    }

    purchase() {
        super.purchase();
        clickStrength++;
        this.building.doubleUpgrade++;
        this.building.applyDoubleUpgrade();
    }
}