
class ApiManager {

    #apiSettings;

    static METHODS = Object.freeze({
        "GET": "GET",
        "POST": "POST",
    });

    constructor(apiSettings) {
        this.#apiSettings = apiSettings;
    }

    getSites = async (payload) => {

        /*
        // Future backend integration — uncomment when API is available
        const SUBMIT_PATH = "/api/sites";
        const url = `${this.#apiSettings.baseUrl}${SUBMIT_PATH}`;
        const response = await fetch(url, {
            method: ApiManager.METHODS.GET,
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        return response.json();
        */

        return this.#sites();
    }

    #sites = () => {

        return {
            data: [
                {
                    id: 1,
                    nombre: "Hospitales en Venezuela",
                    url: "https://hospitalesenvenezuela.com/",
                    descripcion: "Aplicación para encontrar a quien está ingresado en un hospital o centro de salud en Venezuela"
                },
                {
                    id: 2,
                    nombre: "Desaparecidos Terremoto Venezuela",
                    url: "https://desaparecidosterremotovenezuela.com/",
                    descripcion: "Portal para reportar y buscar personas desaparecidas tras el terremoto en Venezuela"
                },
                
                {
                    id: 3,
                    nombre: "Venezuela Reporta",
                    url: "https://venezuelareporta.org/",
                    descripcion: "Plataforma para reportar y buscar personas desaparecidas en Venezuela"
                },
                {
                    id: 4,
                    nombre: "Venezuela Te Busca",
                    url: "https://venezuelatebusca.com/",
                    descripcion: "Portal de búsqueda de personas desaparecidas tras el terremoto"
                },
                {
                    id: 5,
                    nombre: "Venezuela - Tiltely",
                    url: "https://venezuela.tiltely.com/",
                    descripcion: "Plataforma de reporte de personas desaparecidas"
                },
                
                {
                    id: 6,
                    nombre: "Terremoto Venezuela",
                    url: "https://terremotovenezuela.com/",
                    descripcion: "Mapa centralizado de daños estructurales reportados por ciudadanos tras el terremoto"
                },
               
                {
                    id: 7,
                    nombre: "Revisa Tu Edificio",
                    url: "https://www.revisatuedificio.com/",
                    descripcion: "Registro de ingenieros para inspección de habitabilidad y evaluación de daños estructurales"
                },
                {
                    id: 8,
                    nombre: "Tilin App",
                    url: "https://tilinapp.com/",
                    descripcion: "Evaluación de daños estructurales e inspección de habitabilidad"
                },
                {
                    id: 9,
                    nombre: "Habitable",
                    url: "https://habitable.lovable.app/",
                    descripcion: "Plataforma para evaluar la habitabilidad de edificios afectados"
                },
                
                {
                    id: 10,
                    nombre: "Rescate Venezuela",
                    url: "https://rescate-ve.vercel.app/",
                    descripcion: "Coordinación de apoyo presencial, rescate y logística de transporte"
                },
                
                {
                    id: 11,
                    nombre: "Ayuda Para Venezuela",
                    url: "https://ayudaparavenezuela.com/",
                    descripcion: "Centros de acopio e insumos requeridos por zona para los afectados"
                },
                {
                    id: 12,
                    nombre: "VeneConnect - Apoyo Terremoto",
                    url: "https://www.veneconnect.com/apoyo-terremoto",
                    descripcion: "Red de centros de acopio y apoyo para afectados por el terremoto"
                },
                {
                    id: 13,
                    nombre: "Zona Segura",
                    url: "https://zonasegura.up.railway.app/",
                    descripcion: "Centros de acopio, refugios y alojamiento para afectados"
                },
                
                {
                    id: 14,
                    nombre: "Refugios Venezuela",
                    url: "https://refugiosvenezuela.com/",
                    descripcion: "Centros de alimentación, refugios y alojamiento disponibles para los afectados"
                },
                
                {
                    id: 15,
                    nombre: "Pacientes Terremoto Venezuela",
                    url: "https://pacientesterremotovzla.lovable.app/",
                    descripcion: "Consulta de pacientes ingresados en hospitales tras el terremoto"
                },
                
                {
                    id: 16,
                    nombre: "HuellasCan - Terremoto",
                    url: "https://www.huellascan.com/terremoto",
                    descripcion: "Información sobre mascotas perdidas y encontradas tras el terremoto"
                }
            ]
               
        };
    }
}
