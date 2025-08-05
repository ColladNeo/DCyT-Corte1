export default class CL_Persona{
    private _nombre: string;
    private _ingreso: number;

    constructor(nombre: string, ingreso: number){
        this._nombre = nombre;
        this._ingreso = ingreso;
    }

    set nombre(nombre: string){
        this._nombre = nombre;
    }
    get nombre(): string {
        return this._nombre;
    }

    set ingreso(ingreso: number){
        this._ingreso = ingreso;
    }

    get ingreso(): number {
        return this._ingreso;
    }
}