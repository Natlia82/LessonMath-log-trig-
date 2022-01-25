export default class MathChaar {
    constructor(attack, stouner) {
        this.attack = attack;
        this.stouner = stouner;
    }

    set stouner(condition) {
        this._stouner = condition;
    }

    set attack(meaning) {
        this._attack = meaning;
    }
    get stouner() {
        return this._stouner;
    }
    get attack() {
        this._attack = this._attack - 10 - Math.log2(this._stouner) * 5;
        return this._attack;
    }
}