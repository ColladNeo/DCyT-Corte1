export default class Cl_Grupo {
    constructor() {
        this._acIngreso = 0;
        this._cntPersonas = 0;
        this._menIngreso = 0;
    }
    procesarPersona(p) {
        this._acIngreso += p.ingreso;
        this._cntPersonas++;
        if (this._menIngreso > p.ingreso) {
            this._menIngreso = p.ingreso;
        }
    }
    menorIngreso() {
        return this._menIngreso;
    }
    PromedioIngreso() {
        if (this._cntPersonas == 0) {
            return 0;
        }
        else {
            return this._acIngreso / this._cntPersonas;
        }
    }
}
