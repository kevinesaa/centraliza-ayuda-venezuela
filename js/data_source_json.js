//no actualizar este archivo directamente.
//Añadir nuevas fuente en el arreglo data_source_helper/new_sources.json
//luego ejecutar merge_sources.py
const SOURCES = [
    {
        "nombre": "Hospitales en Venezuela",
        "url": "https://hospitalesenvenezuela.com",
        "descripcion": "Aplicación para encontrar a quien está ingresado en un hospital o centro de salud en Venezuela",
        "tags": [
            "Salud y Emergencia"
        ],
        "id": 1
    },
    {
        "nombre": "Desaparecidos Terremoto Venezuela",
        "url": "https://desaparecidosterremotovenezuela.com",
        "descripcion": "Portal para reportar y buscar personas desaparecidas tras el terremoto en Venezuela",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 2
    },
    {
        "nombre": "Venezuela Reporta",
        "url": "https://venezuelareporta.org",
        "descripcion": "Plataforma para reportar y buscar personas desaparecidas en Venezuela",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 3
    },
    {
        "nombre": "Venezuela Te Busca",
        "url": "https://venezuelatebusca.com",
        "descripcion": "Portal de búsqueda de personas desaparecidas tras el terremoto",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 4
    },
    {
        "nombre": "Venezuela - Tiltely",
        "url": "https://venezuela.tiltely.com",
        "descripcion": "Plataforma de reporte de personas desaparecidas",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 5
    },
    {
        "nombre": "Terremoto Venezuela",
        "url": "https://terremotovenezuela.com",
        "descripcion": "Mapa centralizado de daños estructurales reportados por ciudadanos tras el terremoto",
        "tags": [
            "Infraestructura y Riesgos",
            "Mapas y Tecnología"
        ],
        "id": 6
    },
    {
        "nombre": "Revisa Tu Edificio",
        "url": "https://revisatuedificio.com",
        "descripcion": "Registro de ingenieros para inspección de habitabilidad y evaluación de daños estructurales",
        "tags": [
            "Infraestructura y Riesgos"
        ],
        "id": 7
    },
    {
        "nombre": "Habitable",
        "url": "https://habitable.lovable.app",
        "descripcion": "Plataforma para evaluar la habitabilidad de edificios afectados",
        "tags": [
            "Infraestructura y Riesgos"
        ],
        "id": 9
    },
    {
        "nombre": "Rescate Venezuela",
        "url": "https://rescate-ve.vercel.app",
        "descripcion": "Coordinación de apoyo presencial, rescate y logística de transporte",
        "tags": [
            "Salud y Emergencia",
            "Voluntariado"
        ],
        "id": 10
    },
    {
        "nombre": "Ayuda Para Venezuela",
        "url": "https://ayudaparavenezuela.com",
        "descripcion": "Centros de acopio e insumos requeridos por zona para los afectados",
        "tags": [
            "Acopios y Donaciones",
            "Refugios y Alojamiento"
        ],
        "id": 11
    },
    {
        "nombre": "VeneConnect - Apoyo Terremoto",
        "url": "https://veneconnect.com/apoyo-terremoto",
        "descripcion": "Red de centros de acopio y apoyo para afectados por el terremoto",
        "tags": [
            "Acopios y Donaciones",
            "Refugios y Alojamiento",
            "Voluntariado"
        ],
        "id": 12
    },
    {
        "nombre": "Zona Segura",
        "url": "https://zonasegura.up.railway.app",
        "descripcion": "Centros de acopio, refugios y alojamiento para afectados",
        "tags": [
            "Acopios y Donaciones",
            "Refugios y Alojamiento"
        ],
        "id": 13
    },
    {
        "nombre": "Refugios Venezuela",
        "url": "https://refugiosvenezuela.com",
        "descripcion": "Centros de alimentación, refugios y alojamiento disponibles para los afectados",
        "tags": [
            "Refugios y Alojamiento"
        ],
        "id": 14
    },
    {
        "nombre": "Pacientes Terremoto Venezuela",
        "url": "https://pacientesterremotovzla.lovable.app",
        "descripcion": "Consulta de pacientes ingresados en hospitales tras el terremoto",
        "tags": [
            "Salud y Emergencia"
        ],
        "id": 15
    },
    {
        "nombre": "HuellasCan - Terremoto",
        "url": "https://huellascan.com/terremoto",
        "descripcion": "Información sobre mascotas perdidas y encontradas tras el terremoto",
        "tags": [
            "Mascotas"
        ],
        "id": 16
    },
    {
        "nombre": "Mascotas por Venezuela",
        "url": "https://mascotasporvenezuela.com",
        "descripcion": "Una plataforma para reunir a las mascotas perdidas con sus familias tras el terremoto",
        "tags": [
            "Mascotas"
        ],
        "id": 17
    },
    {
        "nombre": "Patitas a Salvo - Mi Gente Ve",
        "url": "https://migenteve.com",
        "descripcion": "Registra mascotas perdidas, encontradas o con necesidad médica después de un terremoto. La comunidad puede buscar por zona, compartir casos y ubicar reportes en el mapa.",
        "tags": [
            "Mapas y Tecnología",
            "Mascotas",
            "Voluntariado"
        ],
        "id": 18
    },
    {
        "nombre": "Intérpretes voluntarios EIM-UCV",
        "url": "https://docs.google.com/forms/d/e/1FAIpQLScXzwYRf6lJPfcJaKdAMDbeehH1pbMkU7QEq5UTSYOpWQubOQ/viewform",
        "descripcion": "Estamos organizando un equipo de intérpretes voluntarios para misiones internacionales de rescate",
        "tags": [
            "Salud y Emergencia",
            "Voluntariado"
        ],
        "id": 19
    },
    {
        "nombre": "Directorio De Iniciativas Ciudadanas",
        "url": "https://redesayuda.org/iniciativasciudadanas",
        "descripcion": "lugar para registrar distintas iniciativas ciudadanas",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 20
    },
    {
        "nombre": "vzlayuda",
        "url": "https://vzlayuda.com",
        "descripcion": "Encuentra o brinda ayuda cerca de ti. Sin cuentas, al instante.",
        "tags": [
            "Información General"
        ],
        "id": 21
    },
    {
        "nombre": "Hazlo Hoy - Venezuela Ayuda",
        "url": "https://terremoto.hazlohoy.org",
        "descripcion": "Conectando personas, familias y ayuda durante la emergencia",
        "tags": [
            "Búsqueda de Personas",
            "Salud y Emergencia"
        ],
        "id": 22
    },
    {
        "nombre": "Alimenta la solidaridad",
        "url": "https://donate.alimentalasolidaridad.org/campaign/815565/donate",
        "descripcion": "Activamos nuestra red humanitaria para acompañar a las comunidades afectadas por el terremoto y llevar ayuda donde más se necesita",
        "tags": [
            "Acopios y Donaciones",
            "Voluntariado"
        ],
        "id": 23
    },
    {
        "nombre": "Campaña de Go Fund Me",
        "url": "https://gofundme.com/f/emergency-relief-for-venezuela-earthquake-victims",
        "descripcion": "Emergency Relief for Venezuela Earthquake Victims",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 24
    },
    {
        "nombre": "Dona - Yummy Rides",
        "url": "https://dona.yummyrides.com",
        "descripcion": "Campaña de donación por Yummy Rides",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 25
    },
    {
        "nombre": "Héroes - Yummy Rides",
        "url": "https://heroes.yummyrides.com",
        "descripcion": "brindando traslados a Personal de primera respuesta gratis desde y hacia donde sea necesario",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 26
    },
    {
        "nombre": "Build for Venezuela",
        "url": "https://build4venezuela.com/es",
        "descripcion": "Una hackathon humanitaria para construir soluciones tech por Venezuela",
        "tags": [
            "Información General"
        ],
        "id": 27
    },
    {
        "nombre": "Salud pro",
        "url": "https://apoyo.salu.pro",
        "descripcion": "Registro centralizado y gratuito de personas desaparecidas tras la catástrofe.",
        "tags": [
            "Búsqueda de Personas",
            "Salud y Emergencia"
        ],
        "id": 28
    },
    {
        "nombre": "UN Crisis Relief – Venezuela",
        "url": "https://crisisrelief.un.org/en/donate-venezuela-crisis",
        "descripcion": "Fondo humanitario de la ONU para la respuesta de emergencia",
        "tags": [
            "Acopios y Donaciones",
            "Salud y Emergencia"
        ],
        "id": 29
    },
    {
        "nombre": "SOS Venezuela 2026",
        "url": "https://sosvenezuela2026.com",
        "descripcion": "Mapa colaborativo en vivo para reportar colapsos y daños y buscar personas, con validación comunitaria",
        "tags": [
            "Búsqueda de Personas",
            "Infraestructura y Riesgos",
            "Mapas y Tecnología",
            "Voluntariado"
        ],
        "id": 30
    },
    {
        "nombre": "Encuéntralos",
        "url": "https://encuentralos.tecnosoft.dev",
        "descripcion": "Reporte y búsqueda instantánea de personas desaparecidas, sin registro; agrega refugios y puntos de donación",
        "tags": [
            "Acopios y Donaciones",
            "Búsqueda de Personas",
            "Mapas y Tecnología",
            "Refugios y Alojamiento"
        ],
        "id": 31
    },
    {
        "nombre": "Venezuela Te Necesita",
        "url": "https://venezuelatenecesita.com",
        "descripcion": "Coordinación de emergencia que combina centros de acopio por estado y búsqueda de desaparecidos",
        "tags": [
            "Acopios y Donaciones",
            "Búsqueda de Personas",
            "Salud y Emergencia"
        ],
        "id": 32
    },
    {
        "nombre": "Red de Emergencia VE",
        "url": "https://redayudavenezuela.com",
        "descripcion": "Red ciudadana para avisar «estoy a salvo», buscar personas y coordinar ayuda",
        "tags": [
            "Búsqueda de Personas",
            "Mapas y Tecnología",
            "Salud y Emergencia"
        ],
        "id": 33
    },
    {
        "nombre": "SismoAyuda VE",
        "url": "https://sismoayudave.com",
        "descripcion": "Ingenieros y arquitectos voluntarios evalúan la habitabilidad de tu inmueble a partir de fotos, bajo estándares ATC-20 y EMS-98",
        "tags": [
            "Infraestructura y Riesgos",
            "Voluntariado"
        ],
        "id": 34
    },
    {
        "nombre": "Caracas Ayuda",
        "url": "https://caracasayuda.com",
        "descripcion": "Mapa interactivo de agua, comida, refugios, hospitales y puntos de ayuda en Caracas, con caducidad automática de los reportes",
        "tags": [
            "Acopios y Donaciones",
            "Mapas y Tecnología",
            "Refugios y Alojamiento",
            "Salud y Emergencia"
        ],
        "id": 35
    },
    {
        "nombre": "Todos Con VZLA",
        "url": "https://todosconvzla.com",
        "descripcion": "Mapa ciudadano no partidista para reportar desaparecidos, daños, refugios y puntos de ayuda",
        "tags": [
            "Búsqueda de Personas",
            "Infraestructura y Riesgos",
            "Mapas y Tecnología",
            "Refugios y Alojamiento"
        ],
        "id": 36
    },
    {
        "nombre": "Centros de Acopio Venezuela",
        "url": "https://centrosayudavenezuela.org",
        "descripcion": "Directorio buscable de centros de acopio activos por ciudad, organización o tipo de insumo",
        "tags": [
            "Acopios y Donaciones",
            "Mapas y Tecnología"
        ],
        "id": 37
    },
    {
        "nombre": "Cáritas de Venezuela",
        "url": "https://caritasvenezuela.org",
        "descripcion": "Recepción y distribución de donaciones (agua, alimentos, higiene, medicinas) a través de la red de la Iglesia",
        "tags": [
            "Acopios y Donaciones",
            "Salud y Emergencia"
        ],
        "id": 38
    },
    {
        "nombre": "PsicoMapa / PsicoData (UCAB)",
        "url": "https://psicodatavzla.ucab.edu.ve",
        "descripcion": "Mapa de más de 100 organizaciones de atención psicológica por estado; la UCAB ofrece además primeros auxilios psicológicos gratuitos por teléfono",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 39
    },
    {
        "nombre": "GlobalGiving – Venezuela Earthquake Relief Fund",
        "url": "https://globalgiving.org/projects/venezuela-earthquake-relief-fund",
        "descripcion": "Fondo internacional que canaliza donaciones a organizaciones locales de salud, refugio, agua y alimentos",
        "tags": [
            "Acopios y Donaciones",
            "Refugios y Alojamiento",
            "Salud y Emergencia"
        ],
        "id": 40
    },
    {
        "nombre": "Cáritas Internationalis",
        "url": "https://donate.caritas.org/venezuela",
        "descripcion": "Donaciones internacionales para la respuesta de Cáritas Venezuela en terreno",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 41
    },
    {
        "nombre": "Catholic Relief Services (CRS)",
        "url": "https://crs.org/donate/venezuela-earthquake",
        "descripcion": "Donaciones internacionales canalizadas con Cáritas Venezuela: refugio, alimentos, agua y salud",
        "tags": [
            "Acopios y Donaciones",
            "Refugios y Alojamiento",
            "Salud y Emergencia"
        ],
        "id": 42
    },
    {
        "nombre": "Médicos del Mundo",
        "url": "https://medicosdelmundo.org/donacion-ong/campana/terremoto-venezuela",
        "descripcion": "Donaciones para atención médica de emergencia con equipos presentes en el país",
        "tags": [
            "Acopios y Donaciones",
            "Salud y Emergencia"
        ],
        "id": 43
    },
    {
        "nombre": "International Medical Corps",
        "url": "https://internationalmedicalcorps.org/emergency-response/venezuela-earthquakes",
        "descripcion": "Donaciones para atención médica de emergencia en terreno",
        "tags": [
            "Acopios y Donaciones",
            "Salud y Emergencia"
        ],
        "id": 44
    },
    {
        "nombre": "Yummy – SOS",
        "url": "https://sos.yummyrides.com",
        "descripcion": "Reporte de daños con foto y ubicación, más logística solidaria: entregas gratuitas de agua, alimentos y medicinas",
        "tags": [
            "Acopios y Donaciones",
            "Infraestructura y Riesgos",
            "Salud y Emergencia"
        ],
        "id": 45
    },
    {
        "nombre": "Ridery",
        "url": "https://web.ridery.app",
        "descripcion": "Viajes gratuitos a clínicas y hospitales de Caracas y centros de recepción de ayuda humanitaria",
        "tags": [
            "Salud y Emergencia"
        ],
        "id": 46
    },
    {
        "nombre": "SEO for Venezuela",
        "url": "https://seoforvenezuela.com",
        "descripcion": "Donate to one of the relief funds below, upload your receipt in the form, and I’ll record you a personal 5-minute Loom audit of your website, in English or Spanish",
        "tags": [
            "Acopios y Donaciones",
            "Búsqueda de Personas"
        ],
        "id": 47
    },
    {
        "nombre": "Brigada de apoyo- Evaluación de riesgos",
        "url": "https://docs.google.com/forms/d/e/1FAIpQLSdbBkuuMs5fTGux_zvbzsEaolKRBc-rMlH98ZvBp4O61U_pTw/viewform",
        "descripcion": "Recopilar de forma rápida y estandarizada la información técnica de edificaciones en la Gran Caracas tras los eventos sísmicos recientes.",
        "tags": [
            "Infraestructura y Riesgos",
            "Voluntariado"
        ],
        "id": 48
    },
    {
        "nombre": "Colegio de Ingenieros de Venezuela (CIV)",
        "url": "https://instagram.com/civoficial",
        "descripcion": "Brigadas de ingenieros para inspección de habitabilidad e infraestructura crítica tras el sismo (perfil oficial)",
        "tags": [
            "Infraestructura y Riesgos"
        ],
        "id": 49
    },
    {
        "nombre": "Centro de Ingeniería Sísmica (CICIS)",
        "url": "https://instagram.com/cicis.inmme",
        "descripcion": "Coordina criterios de inspección y brigadas de evaluación estructural con universidades (perfil oficial)",
        "tags": [
            "Infraestructura y Riesgos"
        ],
        "id": 50
    },
    {
        "nombre": "Grupo Ávila - Inspección estructural gratuita",
        "url": "https://wa.me/584241993167",
        "descripcion": "Evaluación presencial gratuita de estructuras con daños visibles en Chacao, Baruta, El Hatillo y Sucre (contacto por WhatsApp)",
        "tags": [
            "Comunicaciones",
            "Infraestructura y Riesgos"
        ],
        "id": 51
    },
    {
        "nombre": "World Central Kitchen",
        "url": "https://wck.org/es/relief/wck-en-venezuela-despues-de-terremotos-consecutivos",
        "descripcion": "Los equipos de WCK comenzaron a servir comidas lo más rápido posible.",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 52
    },
    {
        "nombre": "Direct Relief",
        "url": "https://directrelief.org/2026/06/venezuela-earthquake-caracas-damage",
        "descripcion": "Donaciones para suministros médicos de emergencia",
        "tags": [
            "Acopios y Donaciones",
            "Salud y Emergencia"
        ],
        "id": 53
    },
    {
        "nombre": "Fundación Lealtad",
        "url": "https://fundacionlealtad.org/terremotos-venezuela-respuesta-ong-acreditadas",
        "descripcion": "Listado de ONG acreditadas que responden al terremoto, para donar con seguridad",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 54
    },
    {
        "nombre": "busqueda_vzla_temblor_bot - Bot de Telegram",
        "url": "https://t.me/busqueda_vzla_temblor_bot",
        "descripcion": "Bot de Telegram te ayuda a encontrar a familiares ingresados en hospitales tras el sismo",
        "tags": [
            "Comunicaciones",
            "Mapas y Tecnología",
            "Salud y Emergencia"
        ],
        "id": 55
    },
    {
        "nombre": "Desaparecidos Venezuela",
        "url": "https://desaparecidosvenezuela.com",
        "descripcion": "Reporte/busqueda; paginable via ?skip=",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 56
    },
    {
        "nombre": "Localizados Venezuela",
        "url": "https://localizadosvenezuela.com",
        "descripcion": "Personas en listas de hospitales; codigo abierto",
        "tags": [
            "Búsqueda de Personas",
            "Mapas y Tecnología",
            "Salud y Emergencia"
        ],
        "id": 57
    },
    {
        "nombre": "Reporte Venezuela",
        "url": "https://reportevenezuela.com",
        "descripcion": "Heridos en hospitales/refugios (filtro duplicados)",
        "tags": [
            "Búsqueda de Personas",
            "Refugios y Alojamiento",
            "Salud y Emergencia"
        ],
        "id": 58
    },
    {
        "nombre": "mBuscan",
        "url": "https://mbuscan.com",
        "descripcion": "Plataforma ciudadana sin login",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 59
    },
    {
        "nombre": "Encuentralos VZLA",
        "url": "https://encuentralosvzla.com",
        "descripcion": "Reporte de menores",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 60
    },
    {
        "nombre": "Red Sonadoras",
        "url": "https://redsonadoras.com",
        "descripcion": "Hasta Encontrarles' buscador",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 61
    },
    {
        "nombre": "VEA 2026",
        "url": "https://vea2026.com",
        "descripcion": "Listado (marcado para unificar)",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 62
    },
    {
        "nombre": "Busqueda VZLA",
        "url": "https://busquedavzla.netlify.app",
        "descripcion": "Buscador",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 63
    },
    {
        "nombre": "VenApp",
        "url": "https://venapp.com",
        "descripcion": "Buscador",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 64
    },
    {
        "nombre": "Aid Venezuela",
        "url": "https://aidvenezuela.net",
        "descripcion": "Reporte/agregador",
        "tags": [
            "Búsqueda de Personas",
            "Mapas y Tecnología"
        ],
        "id": 65
    },
    {
        "nombre": "SOS Venezuela (net)",
        "url": "https://sosvenezuela.net",
        "descripcion": "Reporte",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 66
    },
    {
        "nombre": "Unidos Venezuela",
        "url": "https://unidosvenezuela.vercel.app",
        "descripcion": "Reporte",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 67
    },
    {
        "nombre": "Terremoto en Venezuela",
        "url": "https://terremotoenvenezuela.com",
        "descripcion": "Reporte",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 68
    },
    {
        "nombre": "Buscador Unificado VZLA",
        "url": "https://github.com/joeyrubio/buscador-unificado-vzla",
        "descripcion": "Proyecto para UNIFICAR data desaparecidos/ubicados",
        "tags": [
            "Búsqueda de Personas",
            "Mapas y Tecnología"
        ],
        "id": 69
    },
    {
        "nombre": "Familias-Hospital",
        "url": "https://familias-hospital.vercel.app",
        "descripcion": "Conecta familias con hospitales",
        "tags": [
            "Salud y Emergencia"
        ],
        "id": 70
    },
    {
        "nombre": "Info Salud Sismo VZLA",
        "url": "https://infosaludsismovzla2026.com",
        "descripcion": "Info de salud",
        "tags": [
            "Salud y Emergencia"
        ],
        "id": 71
    },
    {
        "nombre": "Auxilio Ven",
        "url": "https://auxilioven.org",
        "descripcion": "Cruza hospitales vs desaparecidos",
        "tags": [
            "Búsqueda de Personas",
            "Salud y Emergencia"
        ],
        "id": 72
    },
    {
        "nombre": "Sismo Venezuela",
        "url": "https://sismovenezuela.org",
        "descripcion": "Mapa colaborativo de edificios",
        "tags": [
            "Infraestructura y Riesgos",
            "Mapas y Tecnología",
            "Voluntariado"
        ],
        "id": 73
    },
    {
        "nombre": "Terremoto Venezuela",
        "url": "https://terremotovenezuela.app",
        "descripcion": "Mapa de danos",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 74
    },
    {
        "nombre": "Terremoto VE",
        "url": "https://terremotove.netlify.app",
        "descripcion": "Mapa (colapsos+desap.+acopios)",
        "tags": [
            "Acopios y Donaciones",
            "Mapas y Tecnología"
        ],
        "id": 75
    },
    {
        "nombre": "24JunVE",
        "url": "https://24junve.statuslocal.net",
        "descripcion": "Mapa de eventos",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 76
    },
    {
        "nombre": "Centinela",
        "url": "https://app.appcentinela.com",
        "descripcion": "Reporte de danos",
        "tags": [
            "Información General"
        ],
        "id": 77
    },
    {
        "nombre": "RIAVE",
        "url": "https://riave-deploy.vercel.app",
        "descripcion": "Reporte",
        "tags": [
            "Información General"
        ],
        "id": 78
    },
    {
        "nombre": "Reporta Venezuela (org)",
        "url": "https://reportavenezuela.org",
        "descripcion": "Reporte de danos",
        "tags": [
            "Información General"
        ],
        "id": 79
    },
    {
        "nombre": "Microsoft AI for Good (HDX)",
        "url": "https://data.humdata.org",
        "descripcion": "Dataset danos edificios Catia La Mar",
        "tags": [
            "Infraestructura y Riesgos",
            "Mapas y Tecnología"
        ],
        "id": 80
    },
    {
        "nombre": "Reporta Venezuela (Zonas Afectadas)",
        "url": "https://zonasafectadasvenezuela.app",
        "descripcion": "Mapa en vivo; consume API de 7uanF",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 81
    },
    {
        "nombre": "Venezuela Earthquake Map",
        "url": "https://venezuela-earthquake-map.vercel.app",
        "descripcion": "Heatmap auto-agrega YouTube/X/IG c/10min",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 82
    },
    {
        "nombre": "Sheet Centros de Acopio (M. Lozada)",
        "url": "https://docs.google.com/spreadsheets/d/1OTNQGMsK3nU2wqy00rtPPcwsSzAlorWeP-uIotWpkxM",
        "descripcion": "~100 centros con dir/coords/contacto",
        "tags": [
            "Acopios y Donaciones",
            "Refugios y Alojamiento"
        ],
        "id": 83
    },
    {
        "nombre": "Acopio VE",
        "url": "https://acopiove.org",
        "descripcion": "Directorio de acopios, voluntarios intérpretes, bot de whatsapp",
        "tags": [
            "Acopios y Donaciones",
            "Comunicaciones",
            "Mapas y Tecnología",
            "Refugios y Alojamiento",
            "Voluntariado"
        ],
        "id": 84
    },
    {
        "nombre": "Acopio VZLA",
        "url": "https://acopiovzla.com",
        "descripcion": "Directorio de acopios",
        "tags": [
            "Acopios y Donaciones",
            "Mapas y Tecnología",
            "Refugios y Alojamiento"
        ],
        "id": 85
    },
    {
        "nombre": "Acopios-Refugios",
        "url": "https://acopios-refugios.vercel.app",
        "descripcion": "Acopios+refugios+interpretes",
        "tags": [
            "Acopios y Donaciones",
            "Refugios y Alojamiento"
        ],
        "id": 86
    },
    {
        "nombre": "Hazlo Hoy - Terremoto",
        "url": "https://hazlohoy.org/terremoto-caracas",
        "descripcion": "Acopios + como ayudar",
        "tags": [
            "Acopios y Donaciones",
            "Refugios y Alojamiento"
        ],
        "id": 87
    },
    {
        "nombre": "Venezuela Aid Finder",
        "url": "https://venezuela-aid-finder.lovable.app",
        "descripcion": "Acopios (sobre data de M. Lozada)",
        "tags": [
            "Acopios y Donaciones",
            "Mapas y Tecnología",
            "Refugios y Alojamiento"
        ],
        "id": 88
    },
    {
        "nombre": "Info Ayuda Venezuela",
        "url": "https://infoayudavenezuela.site",
        "descripcion": "Info de acopios",
        "tags": [
            "Acopios y Donaciones",
            "Refugios y Alojamiento"
        ],
        "id": 89
    },
    {
        "nombre": "Tu Gruero",
        "url": "https://tugruero.com",
        "descripcion": "Logistica/transporte de insumos",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 90
    },
    {
        "nombre": "Donar Seguro",
        "url": "https://donarseguro.com",
        "descripcion": "Fondos verificados",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 91
    },
    {
        "nombre": "Caritas Venezuela",
        "url": "https://caritasvenezuela.org/donaciones",
        "descripcion": "Donaciones ONG",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 92
    },
    {
        "nombre": "Dividendo Voluntario",
        "url": "https://dividendovoluntario.org",
        "descripcion": "Donaciones",
        "tags": [
            "Acopios y Donaciones",
            "Voluntariado"
        ],
        "id": 93
    },
    {
        "nombre": "Fondo BTC UCAB",
        "url": "https://btc.academiasucab.com/fondo-emergencia-sismo-vzla-2026",
        "descripcion": "Fondo emergencia en BTC",
        "tags": [
            "Acopios y Donaciones",
            "Salud y Emergencia"
        ],
        "id": 94
    },
    {
        "nombre": "VE Earthquake Relief",
        "url": "https://venezuela-earthquake-relief.netlify.app",
        "descripcion": "Agregador de donaciones",
        "tags": [
            "Acopios y Donaciones",
            "Mapas y Tecnología"
        ],
        "id": 95
    },
    {
        "nombre": "Patas a Casa",
        "url": "https://patasacasa.com",
        "descripcion": "Mascotas perdidas",
        "tags": [
            "Mascotas"
        ],
        "id": 96
    },
    {
        "nombre": "Aparecio Mi Gente (Telegram)",
        "url": "https://t.me/aparecio_en_venezuela_bot",
        "descripcion": "Alerta cuando un nombre aparece en listas",
        "tags": [
            "Comunicaciones",
            "Mapas y Tecnología"
        ],
        "id": 97
    },
    {
        "nombre": "Encontrados VE (Telegram)",
        "url": "https://t.me/encontrados_ve_bot",
        "descripcion": "Consulta por cedula/apellido",
        "tags": [
            "Comunicaciones",
            "Mapas y Tecnología"
        ],
        "id": 98
    },
    {
        "nombre": "Venezuela Help (acopios)",
        "url": "https://venezuelahelp.click",
        "descripcion": "Bot de acopios",
        "tags": [
            "Acopios y Donaciones",
            "Mapas y Tecnología"
        ],
        "id": 99
    },
    {
        "nombre": "Build4Venezuela (Crafter Station) (TOP)",
        "url": "https://build4venezuela.com/projects",
        "descripcion": "Portal hackathon ~30 proyectos; GET /api/projects",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 100
    },
    {
        "nombre": "RedQuipu",
        "url": "https://redquipu.com",
        "descripcion": "Plataforma central' (consolida iniciativas)",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 101
    },
    {
        "nombre": "Centraliza Ayuda Venezuela",
        "url": "https://kevinesaa.github.io/centraliza-ayuda-venezuela",
        "descripcion": "Portal; codigo abierto",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 102
    },
    {
        "nombre": "Venezuela Solidaria",
        "url": "https://venezuelasolidaria.com",
        "descripcion": "Directorio de paginas validadas",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 103
    },
    {
        "nombre": "Senal de Ayuda",
        "url": "https://senaldeayuda.org",
        "descripcion": "Mapa en vivo multi-proposito",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 104
    },
    {
        "nombre": "Ayuda VE",
        "url": "https://ayudave.com",
        "descripcion": "Mapa reportar/insumos/ayuda",
        "tags": [
            "Acopios y Donaciones",
            "Mapas y Tecnología"
        ],
        "id": 105
    },
    {
        "nombre": "VZL Ayuda",
        "url": "https://vzlayuda.com/ayudar",
        "descripcion": "Hub multi-proposito",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 106
    },
    {
        "nombre": "SOS Ven (site)",
        "url": "https://sosven.site",
        "descripcion": "Hub (personas+mascotas)",
        "tags": [
            "Búsqueda de Personas",
            "Mapas y Tecnología",
            "Mascotas"
        ],
        "id": 107
    },
    {
        "nombre": "Centro Recursos Venezuela",
        "url": "https://centrorecursosvenezuela.netlify.app",
        "descripcion": "Portal de recursos",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 108
    },
    {
        "nombre": "Recursos Terremoto Venezuela",
        "url": "https://recursos-terremoto-venezuela.netlify.app",
        "descripcion": "Portal de recursos",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 109
    },
    {
        "nombre": "Info Central Terremoto VE",
        "url": "https://info-central-terremoto-venezuela.com",
        "descripcion": "Portal central",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 110
    },
    {
        "nombre": "Venezuela Terremoto 2026",
        "url": "https://venezuelaterremoto2026.com",
        "descripcion": "Portal",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 111
    },
    {
        "nombre": "Ayuda en Camino",
        "url": "https://ayudaencamino.com",
        "descripcion": "Portal de ayuda",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 112
    },
    {
        "nombre": "VZLA Response Hub",
        "url": "https://vzla-response-hub.vercel.app",
        "descripcion": "Hub de respuesta",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 113
    },
    {
        "nombre": "Pawboard - Build4Venezuela",
        "url": "https://pawboard.dev/build4venezuela",
        "descripcion": "Tablero del hackathon",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 114
    },
    {
        "nombre": "Punto de Apoyo Venezuela",
        "url": "https://puntodeapoyovenezuela.com",
        "descripcion": "Mapa colaborativo para marcar puntos de apoyo (suministros, centros de acopio, hospitales, WiFi Libre, energía, etc), pueden marcar tanto para solicitar como para ofrecer.",
        "tags": [
            "Acopios y Donaciones",
            "Mapas y Tecnología",
            "Salud y Emergencia",
            "Voluntariado"
        ],
        "id": 115
    },
    {
        "nombre": "Avapre Venezuela",
        "url": "https://redh.avapre.com",
        "descripcion": "Hub de ayuda rapida y requests de centros medicos",
        "tags": [
            "Mapas y Tecnología",
            "Salud y Emergencia"
        ],
        "id": 116
    },
    {
        "nombre": "ReconectaVenezuela",
        "url": "https://reconectavenezuela.com",
        "descripcion": "Internet satelital gratis",
        "tags": [
            "Comunicaciones"
        ],
        "id": 117
    },
    {
        "nombre": "Infancia Protegida Vzla",
        "url": "https://infanciaprotegidavzla.netlify.app",
        "descripcion": "Llevar registro y seguirle el rastro a los niños no acompañandos",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 118
    },
    {
        "nombre": "Heroes Venezuela",
        "url": "https://heroesvenezuela.com",
        "descripcion": "A traves de geolocalización, conecta ayudantes con personas que requieren ayuda en logistica, insumos, etc.",
        "tags": [
            "Acopios y Donaciones",
            "Búsqueda de Personas",
            "Mapas y Tecnología"
        ],
        "id": 119
    },
    {
        "nombre": "Encuentrame Vzla",
        "url": "https://encuentramevzla.com",
        "descripcion": "Damos informacion de personas ingresadas centros hospitalarios de Venezela",
        "tags": [
            "Búsqueda de Personas",
            "Comunicaciones",
            "Salud y Emergencia"
        ],
        "id": 120
    },
    {
        "nombre": "Red Venezuela Activa",
        "url": "https://ayudavenezuela2026.com",
        "descripcion": "Conecta necesidades con quienes pueden ayudar: registro de voluntarios y profesionales, casos urgentes, albergues y sus necesidades, mapa en vivo y movilización por WhatsApp. Enlaza a las plataformas de personas no localizadas.",
        "tags": [
            "Búsqueda de Personas",
            "Comunicaciones",
            "Mapas y Tecnología",
            "Refugios y Alojamiento",
            "Voluntariado"
        ],
        "id": 121
    },
    {
        "nombre": "De Mano En Mano",
        "url": "https://demanoenmano.vercel.app",
        "descripcion": "Qué ayuda se necesita en tiempo real: hospitales y refugios verificados",
        "tags": [
            "Mapas y Tecnología",
            "Refugios y Alojamiento",
            "Salud y Emergencia"
        ],
        "id": 122
    },
    {
        "nombre": "API para desarrolladores y agentes",
        "url": "https://respuestave.org/desarrolladores",
        "descripcion": "",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 123
    },
    {
        "nombre": "CIVIS Venezuela",
        "url": "https://civisvenezuela.com",
        "descripcion": "Plataforma de apoyo ciudadano para emergencia: búsqueda de personas desaparecidas, reportes de daños, mapa de riesgos, puntos de abastecimiento, réplicas/sismos, números de emergencia y atención por WhatsApp con agentes de IA",
        "tags": [
            "Búsqueda de Personas",
            "Comunicaciones",
            "Infraestructura y Riesgos",
            "Mapas y Tecnología",
            "Salud y Emergencia",
            "Voluntariado"
        ],
        "id": 124
    },
    {
        "nombre": "Sector Ve",
        "url": "https://sectorve.com",
        "descripcion": "Organiza de manera organizada con agentes de IA iformacion actualizada organzialdola por secotres ya sea noticias, acopios, donaciones, eventos de ayuda etc",
        "tags": [
            "Acopios y Donaciones",
            "Comunicaciones"
        ],
        "id": 125
    },
    {
        "nombre": "Centinela - Seguridad en Tiempo Real",
        "url": "https://app.appcentinela.com/instalar",
        "descripcion": "Centinela - Seguridad en tiempo real para Caracas, Venezuela",
        "tags": [
            "Infraestructura y Riesgos"
        ],
        "id": 126
    },
    {
        "nombre": "VenezuelaTeBusca",
        "url": "https://venezuelatebusca.com",
        "descripcion": "Registro ciudadano para encontrar personas desaparecidas y compartir recursos verificados de apoyo en Venezuela.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 127
    },
    {
        "nombre": "DesaparecidosTerremotoVenezuela",
        "url": "https://desaparecidosterremotovenezuela.com",
        "descripcion": "Esta es una herramienta ciudadana para encontrar personas desaparecidas. Ante una emergencia médica, llama a los organismos de rescate. Verifica siempre la información antes de difundirla.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 128
    },
    {
        "nombre": "Red Ayuda Venezuela",
        "url": "https://redayudavenezuela.com",
        "descripcion": "Plataforma ciudadana de coordinación territorial para organizar ayuda humana en zonas afectadas de Venezuela.",
        "tags": [
            "Mascotas",
            "Búsqueda de Personas",
            "Acopios y Donaciones"
        ],
        "id": 129
    },
    {
        "nombre": "Localiza Pacientes (Sistema Oficial)",
        "url": "https://localizapacientes.com",
        "descripcion": "Sistema oficial de registro adscrito a instituciones nacionales para consultar la ubicación de personas atendidas tras el terremoto.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 130
    },
    {
        "nombre": "Terremoto Venezuela - Tiltely",
        "url": "https://venezuela.tiltely.com",
        "descripcion": "Reúne y enlaza canales oficiales que ya existen para búsqueda de desaparecidos. No es un organismo oficial, no recibe dinero y no almacena ningún dato sobre ti.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 131
    },
    {
        "nombre": "SOSVenezuela",
        "url": "https://sosvenezuela.net/personas",
        "descripcion": "Registro y búsqueda de personas heridas, desaparecidas o a salvo tras el terremoto de Venezuela. Busca a tus seres queridos o reporta a quien estás buscando o que está a salvo.",
        "tags": [
            "Información General",
            "Búsqueda de Personas",
            "Comunicaciones",
            "Acopios y Donaciones"
        ],
        "id": 132
    },
    {
        "nombre": "Encuentralos - Tecnosoft.dev",
        "url": "https://encuentralos.tecnosoft.dev",
        "descripcion": "Herramienta ciudadana, gratuita y sin fines de lucro para reportar y ayudar a localizar personas desaparecidas tras el sismo. Sin registro: tu reporte aparece al instante.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 133
    },
    {
        "nombre": "Venezuela unida — La Guaira",
        "url": "https://ayudalaguaira.com",
        "descripcion": "Esfuerzo voluntario y ciudadano de registro para búsqueda de personas desaparecidas. No sustituye a los organismos de rescate ni a las autoridades competentes.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 134
    },
    {
        "nombre": "Hospitales en Venezuela",
        "url": "https://hospitalesenvenezuela.com",
        "descripcion": "Esta app de reporte ciudadano es para encontrar a quien está ingresado en un hospital o centro de salud.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 135
    },
    {
        "nombre": "Habitable",
        "url": "https://habitable.lovable.app",
        "descripcion": "Iniciativa independiente de respuesta civil para registro de Ingenieros Voluntarios para evaluación de daño en edificaciones y reportar edificaciones con daños.",
        "tags": [
            "Infraestructura y Riesgos"
        ],
        "id": 136
    },
    {
        "nombre": "Tilinapp",
        "url": "https://tilinapp.com/inspeccion-emergencia",
        "descripcion": "Por el terremoto del 24 de junio de 2026, la App Tilin puede ayudarte a registrar daños con fotos y videos y orientarte por este chat con una evaluación técnica virtual preliminar. La coordinación operativa puede tardar más de lo habitual.",
        "tags": [
            "Infraestructura y Riesgos"
        ],
        "id": 137
    },
    {
        "nombre": "Inspecciones gratuitas - Ingtek",
        "url": "https://instagram.com/ingtek_ve",
        "descripcion": "Especialistas en construcción de OBRAS CIVILES y REMODELACIONES de viviendas, locales comerciales y oficina. Brindando inspecciones gratuitas para daños del terremoto 24 Junio 2026.",
        "tags": [
            "Infraestructura y Riesgos"
        ],
        "id": 138
    },
    {
        "nombre": "Zona Segura",
        "url": "https://zonasegura.up.railway.app",
        "descripcion": "Plataforma de información en un mapa interactivo, la ubicación de zonas seguras ante sismos e inundaciones, facilitando a los ciudadanos identificar rápidamente los puntos de resguardo más cercanos.",
        "tags": [
            "Búsqueda de Personas",
            "Acopios y Donaciones",
            "Refugios y Alojamiento"
        ],
        "id": 139
    },
    {
        "nombre": "Rescate Venezuela",
        "url": "https://rescate-ve.vercel.app",
        "descripcion": "Mapa colaborativo para reportar emergencias, refugios, centros de acopio y buscar personas desaparecidas en Venezuela.",
        "tags": [
            "Salud y Emergencia",
            "Búsqueda de Personas",
            "Acopios y Donaciones"
        ],
        "id": 140
    },
    {
        "nombre": "Previasis - Telemedicina",
        "url": "https://instagram.com/p/DZ_XM2eNiZm?hl=en",
        "descripcion": "Este servicio forma parte de la atención médica que ofrece Previasís, hoy GRATIS para los afectados por el sismo que sacudió a nuestros país por el terremoto 2026.",
        "tags": [
            "Salud General"
        ],
        "id": 141
    },
    {
        "nombre": "Federación de Psicólogos de Venezuela",
        "url": "https://instagram.com/fpv_ve",
        "descripcion": "Federación que representa a los profesionales de Psicología en Venezuela de acuerdo a la legislación vigente para el ejercicio de dicha ocupación. Con información y herramientas de atención gratuita en salud mental luego del terremoto del 24 de Junio 2026.",
        "tags": [
            "Psicología"
        ],
        "id": 142
    },
    {
        "nombre": "Psicólogos sin Fronteras",
        "url": "https://x.com/psfvenezuela/status/2070270992723665289/photo/2",
        "descripcion": "Psicólogos Sin Fronteras - Venezuela A.C. Asistencia psicosocial a personas afectadas por crisis y duelos. Atención Telefónica Gratuita para Venezolanos en el Exterior.",
        "tags": [
            "Psicología"
        ],
        "id": 143
    },
    {
        "nombre": "Tu Gruero",
        "url": "https://instagram.com/p/DaBbKqdJWkj",
        "descripcion": "Asistencia vial motorizada Gratuita en CARACAS de la mano de Tu Gruero.",
        "tags": [
            "Salud y Emergencia"
        ],
        "id": 144
    },
    {
        "nombre": "Patitas Perdidas Venezuela",
        "url": "https://patitasperdidasvenezuela.org",
        "descripcion": "Registro centralizado de mascotas perdidas tras el terremoto en Venezuela. Gratis, abierto y para todos.",
        "tags": [
            "Mascotas"
        ],
        "id": 145
    },
    {
        "nombre": "MiGenteVe - Patitas a Salvo",
        "url": "https://migenteve.com",
        "descripcion": "Registra mascotas perdidas, encontradas o con necesidad médica después de un terremoto. La comunidad puede buscar por zona, compartir casos y ubicar reportes en el mapa.",
        "tags": [
            "Mascotas"
        ],
        "id": 146
    },
    {
        "nombre": "Asociación Pro-Defensa de los Animales",
        "url": "https://instagram.com/aproavzla",
        "descripcion": "Aproa atiende gratuitamente a las mascotas afectadas en la sede de los chaguaramos, Caracas en respuesta al terremoto de Junio 2026.",
        "tags": [
            "Mascotas"
        ],
        "id": 147
    },
    {
        "nombre": "Rescate y Adopción La Manada de Bethoven",
        "url": "https://instagram.com/lamanadadebethoven",
        "descripcion": "Rescate,Rehabilitación y Adopción con estrategias de apoyo ante el terremoto de Junio 2026.",
        "tags": [
            "Mascotas"
        ],
        "id": 148
    },
    {
        "nombre": "VZLA Ayuda",
        "url": "https://vzlayuda.com",
        "descripcion": "VZLA Ayuda es una iniciativa ciudadana, no es un organismo oficial. No sustituye a los servicios de emergencia, y no se hace responsable de las interacciones ni acuerdos entre las personas que se contactan a través del portal.",
        "tags": [
            "Comunicaciones",
            "Información General",
            "Mascotas",
            "Salud y Emergencia",
            "Salud General",
            "Refugios y Alojamiento"
        ],
        "id": 149
    },
    {
        "nombre": "Ayuda por Venezuela",
        "url": "https://ayudaparavenezuela.com",
        "descripcion": "Centros de acopio y puntos que necesitan ayuda en todo el país. Reporta, visita, ayuda.",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 150
    },
    {
        "nombre": "Acopios Refugios - Venezuela Resiste",
        "url": "https://acopios-refugios.vercel.app",
        "descripcion": "Mapa colaborativo de Acopios y Refugios. Acopios se publican al instante con sello \"sin verificar\". Refugios se revisan antes.",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 151
    },
    {
        "nombre": "AcopioVE",
        "url": "https://acopiove.org",
        "descripcion": "Mapa Internacional y colaborativo de refugios y centros de acopio. Incluyendo a Venezuela.",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 152
    },
    {
        "nombre": "Hazlo Hoy · Venezuela Ayuda",
        "url": "https://terremoto.hazlohoy.org",
        "descripcion": "Este es un proyecto comunitario y sin fines de lucro. Si quieres colaborar - desarrollo, datos, difusión o verificación de información.",
        "tags": [
            "Comunicaciones",
            "Búsqueda de Personas",
            "Información General",
            "Infraestructura y Riesgos",
            "Acopios y Donaciones"
        ],
        "id": 153
    },
    {
        "nombre": "Patas a Casa",
        "url": "https://patasacasa.com",
        "descripcion": "Hecho por la comunidad para ayudar a que las mascotas vuelvan a casa. Comparte este directorio con quien lo necesite.",
        "tags": [
            "Mascotas"
        ],
        "id": 154
    },
    {
        "nombre": "Mascotas de Venezuela",
        "url": "https://mascotasporvenezuela.com",
        "descripcion": "Una plataforma para reunir a las mascotas perdidas con sus familias tras el terremoto. Reporta, busca y comparte: cada reencuentro empieza con un gesto de esperanza.",
        "tags": [
            "Mascotas"
        ],
        "id": 155
    },
    {
        "nombre": "Sismo Venezuela",
        "url": "https://sismovenezuela.org",
        "descripcion": "Información sobre el sismo y el terremoto en Venezuela, recopilada de forma colaborativa. Los reportes son enviados por la comunidad y no constituyen información oficial.",
        "tags": [
            "Infraestructura y Riesgos",
            "Búsqueda de Personas"
        ],
        "id": 156
    },
    {
        "nombre": "Venezuela Terremoto 2026",
        "url": "https://venezuelaterremoto2026.com",
        "descripcion": "Ayuda Venezuela. Coordinación de emergencia · Terremoto 2026",
        "tags": [
            "Comunicaciones",
            "Información General",
            "Búsqueda de Personas"
        ],
        "id": 157
    },
    {
        "nombre": "Venezuela te necesita",
        "url": "https://venezuelatenecesita.com",
        "descripcion": "Plataforma digital centralizada e independiente para la coordinación de ayuda humanitaria tras el evento sísmico. Desarrollada y gestionada por voluntarios de la sociedad civil.",
        "tags": [
            "Comunicaciones",
            "Información General",
            "Acopios y Donaciones"
        ],
        "id": 158
    },
    {
        "nombre": "Todos con Venezuela",
        "url": "https://todosconvzla.com",
        "descripcion": "Reporta desaparecidos, daños, temblores, refugios y puntos de ayuda. Verifica antes de compartir.",
        "tags": [
            "Búsqueda de Personas",
            "Acopios y Donaciones"
        ],
        "id": 159
    },
    {
        "nombre": "Patitas a Salvo",
        "url": "https://patitasasalvovenezuela.org",
        "descripcion": "Respuesta animal post-terremoto. Búsqueda de Mascotas.",
        "tags": [
            "Mascotas"
        ],
        "id": 160
    },
    {
        "nombre": "Voluntariado de Traductores Iterp-aid",
        "url": "https://interp-aid.lovable.app",
        "descripcion": "Coordinación de intérpretes voluntarios para brigadas de rescate internacionales.",
        "tags": [
            "Información General",
            "Voluntariado"
        ],
        "id": 161
    },
    {
        "nombre": "Enlaza Venezuela",
        "url": "https://enlazavenezuela.com",
        "descripcion": "Conectamos maquinaria, herramientas y voluntarios para búsqueda y rescate tras el terremoto. También refugio, alimentos y salud. Caracas y La Guaira.",
        "tags": [
            "Información General",
            "Voluntariado",
            "Comunicaciones",
            "Salud y Emergencia"
        ],
        "id": 162
    },
    {
        "nombre": "¿Lo Has Visto? - Generador automatizado de imágenes de Personas Desaparecidas para redes sociales",
        "url": "https://lo-la-has-visto-48680439362.us-west1.run.app",
        "descripcion": "Plataforma humanitaria de apoyo inmediato. Completa el formulario de abajo para generar de forma gratuita e instantánea una tarjeta de búsqueda en alta resolución, formateada perfectamente para compartir en Instagram Stories (9:16) o Publicaciones (1:1).",
        "tags": [
            "Búsqueda de Personas",
            "Mapas y Tecnología"
        ],
        "id": 163
    },
    {
        "nombre": "Te Busco",
        "url": "https://tebusco.app",
        "descripcion": "Registro ciudadano con barra de búsqueda. TeBusco ayuda a las familias a reencontrarse. Registra a quien veas o reporta a quien buscas.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 164
    },
    {
        "nombre": "creea.ve - Iniciativa abierta para Impresión 3D de Férulas artesanales para dedos, manos y antebrazos.",
        "url": "https://instagram.com/reels/DaBuEz8PypK",
        "descripcion": "Si tienes una impresora 3D escríbeme te comparto los archivos es momento de actuar para ayudar.",
        "tags": [
            "Mapas y Tecnología",
            "Salud General"
        ],
        "id": 165
    },
    {
        "nombre": "SIVIV",
        "url": "https://siviv.pages.dev",
        "descripcion": "Sistema de Información de Víctimas. Atendidos en centros hospitalarios.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 166
    },
    {
        "nombre": "Listados de personas encontradas y atendidas en centros de salud",
        "url": "https://drive.google.com/drive/u/0/folders/1o36ifaRz45kAs5rKzci49aD0mP5JB_YI",
        "descripcion": "Listados de personas encontradas y atendidas en centros de salud",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 167
    },
    {
        "nombre": "Listado de sobrevivientes atendidos en el Hospital Militar Universitario Doctor Carlos Arvelo de Caracas",
        "url": "https://drive.google.com/drive/folders/1bg1l3Axdx3ghbvbNWmg7ZU3mgnGvr67K",
        "descripcion": "Listado de sobrevivientes atendidos en el Hospital Militar Universitario Doctor Carlos Arvelo de Caracas",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 168
    },
    {
        "nombre": "Centros de Ayuda Venezuela",
        "url": "https://centrosayudavenezuela.org",
        "descripcion": "Directorio buscable de centros de acopio activos para apoyar a las víctimas del terremoto en Venezuela.",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 169
    },
    {
        "nombre": "SismoAyudaVe - Plataforma de Evaluación Estructural Post-Sismo",
        "url": "https://sismoayudave.com",
        "descripcion": "Plataforma gratuita para evaluar la seguridad de tu vivienda tras el sismo.",
        "tags": [
            "Infraestructura y Riesgos"
        ],
        "id": 170
    },
    {
        "nombre": "Campaña de Donaciones - Banco Venezolano de Crédito",
        "url": "https://cb.venezolano.com/pagoVPagosStandaloneAction.do?cobCode=dvc",
        "descripcion": "En respuesta a la emergencia provocada por los terremotos, Venezolano de Crédito ha habilitado un enlace para recibir donaciones. Lee más sobre esta información aquí: https://www.instagram.com/venezolanodecredito/",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 171
    },
    {
        "nombre": "AJE Venezuela",
        "url": "https://ajevenezuela.org/ayuda-venezuela",
        "descripcion": "Centros de acopio, voluntariado y donaciones verificados para apoyar a Venezuela.",
        "tags": [
            "Voluntariado",
            "Acopios y Donaciones"
        ],
        "id": 172
    },
    {
        "nombre": "The House Project - Donations",
        "url": "https://thehouse-project.org/collections/donate-thp/products/support-the-house-project-make-a-difference-today?variant=49348724228394",
        "descripcion": "At The House Project, we want to bring our community together to provide emergency humanitarian aid to those who need it most. With your donation, we can deliver food, clean water, and hygiene kits—bringing relief, hope, and reminding families that they are not alone.",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 173
    },
    {
        "nombre": "Campaña AlumnusUSB",
        "url": "https://alumnusb.org/ayuda-tras-terremoto",
        "descripcion": "Queremos apoyar a las comunidades alrededor de nuestras sedes del litoral y Sartenejas, y estamos coordinando tanto la recolección de fondos como la evaluación de las necesidades específicas: desde lo inmediato —comida, medicamentos— hasta la recuperación posterior para ayudar a las personas que perdieron sus viviendas.",
        "tags": [
            "Comunicaciones",
            "Información General",
            "Acopios y Donaciones"
        ],
        "id": 174
    },
    {
        "nombre": "Refugio VE",
        "url": "https://refugio-ve.vercel.app",
        "descripcion": "Coordinación ciudadana de registro de Refugios en respuesta al terremoto en Venezuela.",
        "tags": [
            "Refugios y Alojamiento"
        ],
        "id": 175
    },
    {
        "nombre": "Campaña Airbnb Venezuela",
        "url": "https://news.airbnb.com/ea/airbnb-org-ofrece-alojamiento-para-personal-de-emergencia-tras-los-terremotos-en-venezuela",
        "descripcion": "Airbnb.org está proporcionando alojamiento de emergencia gratuito a equipos que apoyan labores de ayuda en Venezuela tras dos terremotos de gran magnitud.",
        "tags": [
            "Refugios y Alojamiento"
        ],
        "id": 176
    },
    {
        "nombre": "Localizados Venezuela",
        "url": "https://localizadosvenezuela.com",
        "descripcion": "Busqueda centralizada de personas localizadas tras el sismo en Venezuela. Solo localizados, no para reportar desaparecidos.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 177
    },
    {
        "nombre": "Info Salud Sismo Venezuela 2026",
        "url": "https://infosaludsismovzla2026.com",
        "descripcion": "Esta página ha sido creada con el propósito de apoyar en el registro y búsqueda de personas que ingresaron a unidades hospitalarias en Caracas tras el terremoto en Venezuela. Aquí encontrará información, espacios para correcciones y formas de colaborar. Gracias por acompañarnos en este esfuerzo solidario.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 178
    },
    {
        "nombre": "Aquí Estoy",
        "url": "https://aquiestoy.xyz",
        "descripcion": "Personas reportadas en hospitales de Venezuela durante el terremoto de junio de 2026. Busca a tu familiar.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 179
    },
    {
        "nombre": "Venezuela 2026 - Registro para buscar personas tras el terremoto",
        "url": "https://venezuela2026.xyz",
        "descripcion": "Registro ciudadano de personas desaparecidas.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 180
    },
    {
        "nombre": "We Love Foundation Venezuela GoFundMe Campaign",
        "url": "https://gofundme.com/f/emergency-relief-for-venezuela-earthquake-victims?attribution_id=sl:26f7dd78-3a28-49c9-a777-96fa47f5175e&lang=en_GB&ts=1782508421",
        "descripcion": "Following the devastating earthquake in Venezuela, We Love Foundation Inc., doing business as I Love Venezuela Foundation, is launching an emergency relief campaign to support affected families and communities.",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 181
    },
    {
        "nombre": "Lista de Refugiados en el campo de golf de Caraballeda.",
        "url": "https://x.com/JJFlores94/status/2070669132450668905",
        "descripcion": "Ver más información aquí: https://www.instagram.com/caraballedagyc/reels/",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 182
    },
    {
        "nombre": "Coliseo de La Urbina - Refugio",
        "url": "https://x.com/ReporteYa/status/2070628090993082623",
        "descripcion": "El Coliseo de La Urbina está ubicado en la Prolongación de la avenida El Samán, urbanización La Urbina, Municipio Sucre del Estado Miranda. Contacto: https://www.instagram.com/p/DaEOlQbxTLG/",
        "tags": [
            "Refugios y Alojamiento"
        ],
        "id": 183
    },
    {
        "nombre": "Listado de Atendidos en Hospital Perez Carreño",
        "url": "https://x.com/Oscarztop/status/2070665415399747945/photo/4",
        "descripcion": "Calle La Industria, Caracas 1020, Distrito Capital",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 184
    },
    {
        "nombre": "Venezuela Busca",
        "url": "https://venezuelabusca.com",
        "descripcion": "Personas desaparecidas y encontradas. Buscador de personas encontradas.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 185
    },
    {
        "nombre": "Campaña de Apoyo de Somos Quedate (Hospedaje en Venezuela)",
        "url": "https://ayuda.quedate.net",
        "descripcion": "Creamos esta web para hacer visible los refujios temporales y los centros de acopio totalmente sin fines de lucro registra los centros de ayuda",
        "tags": [
            "Refugios y Alojamiento",
            "Acopios y Donaciones"
        ],
        "id": 186
    },
    {
        "nombre": "EscuchaActiva",
        "url": "https://escuchactiva.com",
        "descripcion": "Una iniciativa de apoyo psicológico voluntario tras el terremoto en Venezuela. No es un servicio de emergencia. Si hay riesgo de vida, contacta a los servicios de emergencia de tu país directamente.",
        "tags": [
            "Voluntariado",
            "Psicología"
        ],
        "id": 187
    },
    {
        "nombre": "Busca en listas Vzla",
        "url": "https://buscaenlistasvzla.info",
        "descripcion": "Escribe nombre, apellido o cédula — los buscaremos en las listas de hospitales y refugios que tenemos.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 188
    },
    {
        "nombre": "Radar VZLA",
        "url": "https://radarvzla.com",
        "descripcion": "Mapa interactivo de reporte de los daños causados por el terremoto 2026.",
        "tags": [
            "Infraestructura y Riesgos"
        ],
        "id": 189
    },
    {
        "nombre": "SOS Venezuela",
        "url": "https://sosenvenezuela.com/sos",
        "descripcion": "Búsqueda de desaparecidos y listas de encontrados. Ubicación de centros de ayuda y hospitales en el mapa. Encuentra el punto de ayuda más cercano.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 190
    },
    {
        "nombre": "Venemergencia - Telemedicina Gratuita",
        "url": "https://instagram.com/p/DZ_tmKtuU_W?hl=en",
        "descripcion": "Ante el sismo que estremeció a nuestra tierra, en Venemergencia abrimos las puertas de nuestra línea de telemedicina GRATUITA TAP (Telemedicina de Acceso Público) para que cada venezolano que necesite consultar a un médico vía remota pueda tener acceso a orientación profesional de calidad.",
        "tags": [
            "Salud General"
        ],
        "id": 191
    },
    {
        "nombre": "Red de Apoyo Canino",
        "url": "https://instagram.com/reddeapoyocanino",
        "descripcion": "Red veterinaria de apoyo para perros afectados por el sismo en Caracas.",
        "tags": [
            "Mascotas"
        ],
        "id": 192
    },
    {
        "nombre": "Voluntarios Profesionales",
        "url": "https://voluntariosprofesionales.vercel.app",
        "descripcion": "Red de voluntarios para emergencias y misiones humanitarias.",
        "tags": [
            "Voluntariado"
        ],
        "id": 193
    },
    {
        "nombre": "Apoyo SaluPro",
        "url": "https://apoyo.salu.pro",
        "descripcion": "Registro centralizado y gratuito de personas desaparecidas tras la catástrofe. Busca a un ser querido o reporta una desaparición.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 194
    },
    {
        "nombre": "Hogar Bambi - Donaciones",
        "url": "https://instagram.com/hogarbambi",
        "descripcion": "Ante la situación generada por el reciente sismo, en Hogar Bambi nos preparamos para brindar resguardo y atención integral a los niños, niñas y adolescentes remitidos por El Consejo de Protección, como a quienes ya habitan en nuestras casas. ¡HOY TU AYUDA TAMBIÉN HACE LA DIFERENCIA!",
        "tags": [
            "Acopios y Donaciones",
            "Refugios y Alojamiento"
        ],
        "id": 195
    },
    {
        "nombre": "Campaña de Donaciones - SUNRISAS",
        "url": "https://fundraise.sunrisas.org/campaign/815513/donate",
        "descripcion": "En Sun.Risas, estamos activando nuestra red de respuesta a emergencias para brindar asistencia inmediata a las comunidades más afectadas. Trabajando codo a codo con socios y voluntarios locales de confianza, nos centraremos en proporcionar recursos esenciales, coordinar las labores de socorro y garantizar que el apoyo llegue a quienes lo necesitan de forma rápida y responsable.",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 196
    },
    {
        "nombre": "Campaña de Donaciones - UNICEF España",
        "url": "https://colabora.unicef.es/ayudavenezuela",
        "descripcion": "Dos fuertes terremotos han devastado Venezuela. Miles de familias lo han perdido todo y los niños y niñas son los más vulnerables. UNICEF ya está actuando en el país, pero el nivel de catástrofe es enorme y necesitamos toda la ayuda posible. Súmate a La Vecina Rubia y UNICEF para ayudar a los niños y niñas en el momento que más nos necesitan. Dona ahora y salva vidas.",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 197
    },
    {
        "nombre": "Donar Seguro",
        "url": "https://donarseguro.com",
        "descripcion": "Directorio curado para donar dinero tras el terremoto de Venezuela, organizado por la relación de cada organización con el sismo y por cómo donar seguro desde cualquier parte del mundo.",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 198
    },
    {
        "nombre": "Campañas GoFundMe - Donaciones para Venezuela",
        "url": "https://gofundme.com/c/act/venezuela-earthquake-relief-es",
        "descripcion": "Muchas personas fallecieron trágicamente después de que dos grandes terremotos azotaran a Venezuela, hiriendo a miles y dejando hogares y negocios devastados. La comunidad de GoFundMe se está uniendo para ayudar a las personas a reconstruir sus vidas y recuperarse. Dona hoy a las recaudaciones verificadas de ayuda por los terremotos en Venezuela.",
        "tags": [
            "Acopios y Donaciones"
        ],
        "id": 199
    },
    {
        "nombre": "VZLA Encuentra",
        "url": "https://vzlaencuentra.com",
        "descripcion": "Plataforma dedicada a facilitar el reencuentro familiar en situaciones de emergencia. Cumplimos con los lineamientos internacionales de protección de identidad para menores y heridos desorientados.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 200
    },
    {
        "nombre": "REDSONADORAS: Buscador de personas desaparecidas, localizadas, atendidas y fallecidas tras el terremoto 24J en Venezuela",
        "url": "https://redsonadoras.com/hasta-encontrarles-buscador-de-personas-desaparecidas-localizadas-y-atendidas-tras-el-terremoto-24j-en-venezuela",
        "descripcion": "Este buscador reúne reportes de personas desaparecidas, localizadas, hospitalizadas y fallecidas, con el objetivo de facilitar el acceso a información actualizada en medio de la emergencia.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 201
    },
    {
        "nombre": "Ayuda en Camino",
        "url": "https://ayudaencamino.com",
        "descripcion": "Centros de acopio, refugios y ONGs publican sus necesidades en tiempo real. Encuentra dónde llevar tus donaciones y haz que lleguen a quienes más las necesitan.",
        "tags": [
            "Comunicaciones",
            "Información General",
            "Acopios y Donaciones",
            "Refugios y Alojamiento"
        ],
        "id": 202
    },
    {
        "nombre": "Médicos Por Venezuela - Atención Gratuita",
        "url": "https://medicosporvenezuela.org",
        "descripcion": "Servicio gratuito para personas que necesitan orientación médica y psicológica.",
        "tags": [
            "Información General",
            "Psicología",
            "Salud General"
        ],
        "id": 203
    },
    {
        "nombre": "Búscame",
        "url": "https://buscame.info",
        "descripcion": "Plataforma humanitaria para reunir familias separadas por el terremoto en Venezuela. Pensada sobre todo para quienes no pueden decir quiénes son: personas que no hablan o no recuerdan su nombre. Por eso el rostro es clave, el sistema reconoce la cara y la compara aunque no haya un nombre.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 204
    },
    {
        "nombre": "Señalización de Emergencia — Terremoto Venezuela 2026",
        "url": "https://xn--sealizacion-de-emergencia-terremoto-venezuela-2026-zye.framer.website",
        "descripcion": "Diseños de Carteles imprimibles gratuitos para orientar en refugios, puntos de acopio y zonas de respuesta. Gratuitos. Listos para imprimir.",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 205
    },
    {
        "nombre": "UnidosVenezuela",
        "url": "https://unidosvenezuela.io/directorio",
        "descripcion": "Directorio y Mapa de emergencia para centralizar reportes, personas, centros, fuentes y aportes relacionados con la emergencia en Venezuela.",
        "tags": [
            "Comunicaciones",
            "Búsqueda de Personas",
            "Información General",
            "Infraestructura y Riesgos",
            "Salud y Emergencia",
            "Acopios y Donaciones"
        ],
        "id": 206
    },
    {
        "nombre": "Reconecta Venezuela - Mapa de Puntos de internet gratuito",
        "url": "https://reconectavenezuela.com",
        "descripcion": "Mapa abierto de puntos de internet satelital gratuito tras el terremoto del 24 de junio de 2026 en Venezuela. Acceso libre para comunicarte y coordinar la ayuda.",
        "tags": [
            "Información General"
        ],
        "id": 207
    },
    {
        "nombre": "De Mano en Mano - Dona Insumos",
        "url": "https://demanoenmanove.org",
        "descripcion": "Esta página muestra lo que piden hospitales, refugios y comunidades. Es de solo lectura: mira qué hace falta y, si puedes, llévalo directamente al lugar.",
        "tags": [
            "Comunicaciones",
            "Información General",
            "Acopios y Donaciones"
        ],
        "id": 208
    },
    {
        "nombre": "Rigidizador de Cuello Impreso en 3D (Planos)",
        "url": "https://instagram.com/p/DaG75KKxABT",
        "descripcion": "Planos compartidos libre y gratuitamente para crear un Rigidizador de cuello artesanal con Impresión 3D. Planos en Makerwold: 2984480 @montmaker.3d",
        "tags": [
            "Mapas y Tecnología"
        ],
        "id": 209
    },
    {
        "nombre": "ReservaDoc - Telemedicina Gratuita",
        "url": "https://sos.reservadoc.com",
        "descripcion": "Desde cualquier parte del mundo. Si eres médico en el exterior o en el interior, conéctate y atiende consultas médicas de seguimiento, y descongestiona los hospitales físicos. Videollamada inmediata. Sin descargas. Sin costo.",
        "tags": [
            "Salud General"
        ],
        "id": 210
    },
    {
        "nombre": "Búsqueda de Estudiantes de la UCV (Sistema de Aparecidos)",
        "url": "https://ucv-aparecidos.vercel.app",
        "descripcion": "Centralización de información sobre estudiantes de la UCV afectados por el sismo. Reporta desaparecidos, confirma apariciones y ayuda a reunir familias.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 211
    },
    {
        "nombre": "SVMI - Lista de Pacientes Por Hospitales en Caracas y La Guaira",
        "url": "https://dropbox.com/scl/fi/m4fbaw4metvkuay91fi0j/26JUN26-15.12-Pacientes-Consolidados-Hospitales-Venezuela.xlsx?rlkey=0bjem2yymn9q88qumzr33fisz&st=f4kbxhg3&e=3&dl=0",
        "descripcion": "ATENCIÓN - LISTA DE PACIENTES POR HOSPITALES en Caracas y la guaira. Está organizada por hospitales y orden alfabético de apellidos. Permite localizar nombres con el buscador.",
        "tags": [
            "Búsqueda de Personas"
        ],
        "id": 212
    },
    {
        "nombre": "Voluntariado de Profesionales de Salud en Campo",
        "url": "https://docs.google.com/forms/d/e/1FAIpQLSfrLUw7bBsfMkg4fVD07r1XWm24zqUbrahfLhsTn4CdUkmBkw/viewform",
        "descripcion": "Tras el impacto del devastador terremoto ocurrido el 24 de junio de 2026, nuestra prioridad es brindar una atención médica organizada y eficaz a los damnificados. La Sociedad Venezolana de Medicina Interna está conformando brigadas voluntarias de salud para cubrir las necesidades asistenciales en los sectores más vulnerables, en coordinación con otras instituciones nacionales. Tu experiencia es fundamental en este momento. Regístrate aquí para integrarte a nuestros equipos de trabajo en terreno. Lee más en: https://www.instagram.com/svminacional/",
        "tags": [
            "Voluntariado",
            "Salud General"
        ],
        "id": 213
    },
    {
        "nombre": "rescate-vzla",
        "url": "https://rescate-vzla.onrender.com",
        "descripcion": "Generar alertas con GPS y coordenadas donde haya gente atrapada o derrumbes. Está lista es pública y está conectada a Google Maps.",
        "tags": [
            "Comunicaciones",
            "Búsqueda de Personas",
            "Información General",
            "Mapas y Tecnología",
            "Salud y Emergencia"
        ],
        "id": 214
    },
    {
        "nombre": "MascotasVZLA - Encuentra a Tu Mascota",
        "url": "https://mascotasvzla.org",
        "descripcion": "Mapa colaborativo para reportar mascotas perdidas, encontradas o resguardadas en Venezuela después de los terremotos del 24 de junio de 2026.",
        "tags": [
            "Mascotas"
        ],
        "id": 215
    },
    {
        "nombre": "Venezuela Rescate | Red ciudadana por Bomberos Voluntarios USB",
        "url": "https://venezuelarescate.com",
        "descripcion": "Red ciudadana para reportar, coordinar y asistir en emergencias. Creado por el grupo de Bomberos Voluntarios de la (USB) Universidad Simón Bolívar, Miranda.",
        "tags": [
            "Comunicaciones",
            "Búsqueda de Personas",
            "Voluntariado",
            "Información General",
            "Salud y Emergencia"
        ],
        "id": 216
    },
    {
        "nombre": "Mandá plata a tu familia en Venezuela",
        "url": "https://envioya.saldoar.com",
        "descripcion": "Te decimos la forma de que les lleguen más bolívares, vía Pago Móvil.",
        "tags": [
            "Información General",
            "Mapas y Tecnología",
            "Acopios y Donaciones"
        ],
        "id": 217
    },
    {
        "nombre": "Centros de Acopio en Barquisimeto, Lara",
        "url": "https://centros-acopio-barquisimeto.vercel.app",
        "descripcion": "Un directorio de todos los centros de acopio de Barquisimeto. en un solo lugar. Si quieres colaborar con insumos médicos, comida o ropa, pero no sabes a dónde ir ni qué llevar exactamente, esta es la solución: encuentra el centro de acopio más cercano en Barquisimeto de forma totalmente gratuita y centralizada.",
        "tags": [
            "Acopios y Donaciones",
            "Mascotas"
        ],
        "id": 218
    }
]