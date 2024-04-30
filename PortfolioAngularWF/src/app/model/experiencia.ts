export class Experiencia {

    id?: number; //? indica que este dato no es necesario en el constructor
    trabajo: string;
    tiempoTranscurrido: string;
    resumen: string;
    urlImgExperiencia: string;

    constructor( trabajo: string, tiempoTranscurrido: string, resumen: string, urlImgExperiencia: string ) {
        this.trabajo = trabajo;
        this.tiempoTranscurrido = tiempoTranscurrido;
        this.resumen = resumen;
        this.urlImgExperiencia = urlImgExperiencia;
    }    
}
