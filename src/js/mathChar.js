class MathChaar {

    get stouner() {
        return this._stouner;
    }
    set stouner(condition) {
        this._stouner = condition;
    }

    set attack(meaning) {
        this._attack = meaning;
    }

    get attack() {
        this._attack = this._attack - Math.log2(this._stouner) * 5;
        return this._attack;
    }
}