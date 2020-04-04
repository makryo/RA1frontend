class Formulario {
    nombre:string;
    apellido:string;
    direccion:string;
    tipoVehiculo:string;
    identifica:string;
    email:string;
    numero:number;
    tipo:string;
    constructor(Nombre:string, Apellido:string, Direccion:string, TipoVehiculo:string, Identifica:string, Email:string, Numero:number, Tipo:string) {
       this.nombre=Nombre;
       this.apellido=Apellido;
       this.direccion=Direccion;
       this.tipoVehiculo=TipoVehiculo;
       this.identifica=Identifica;
       this.email=Email;
       this.numero=Numero;
       this.tipo=Tipo;
    }
}