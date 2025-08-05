import CL_Persona from "./Cl_Persona.js";

export default class Cl_Grupo{
    private _acIngreso: number;
    private _cntPersonas: number;
    private _menIngreso: number;

    constructor(){
        this._acIngreso = 0;
        this._cntPersonas = 0;
        this._menIngreso = 0;
    }
    procesarPersona(p: CL_Persona): void {
        this._acIngreso += p.ingreso;
        this._cntPersonas++;
        
        if(this._menIngreso > p.ingreso){
            this._menIngreso = p.ingreso;
        }
    }
    menorIngreso(): number{
        return this._menIngreso;
    }
    PromedioIngreso(): number{
        if(this._cntPersonas == 0){
            return 0;
        }
        else {
            return this._acIngreso / this._cntPersonas;
        }
    }
}