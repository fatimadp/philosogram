export type Publicacion = {
  id: number;
  titulo: string;
  imagen: string;
  descripcion: string;
  fecha?: string;
};

export type Historia = {
  titulo: string;
  imagen: string;
  descripcion?: string;
};

export type Filosofo = {
  slug: string;
  nombre: string;
  usuario: string;
  corriente: "Racionalismo" | "Empirismo" | "Filosofía Clásica" | "Filosofía Moderna";
  nacimiento: string;
  fallecimiento: string;
  lugarNacimiento: string;
  imagenPerfil: string;
  biografia: string;
  frase: string;
  seguidores: string;
  seguidos: string;
  historias: Historia[];
  publicaciones: Publicacion[];
};

export const filosofos: Filosofo[] = [
  // RENE DESCARTES
  {
    slug: "rene-descartes",
    nombre: "René Descartes",
    usuario: "rene_descartes",
    corriente: "Racionalismo",
    nacimiento: "31 de marzo de 1596",
    fallecimiento: "11 de febrero de 1650",
    lugarNacimiento: "La Haye en Touraine, Francia",
    imagenPerfil: "/filosofos/descartes/rene-descartes.jpg",
    biografia:
      "René Descartes fue un filósofo, matemático y científico francés considerado una de las figuras fundamentales de la filosofía moderna. Defendió el uso de la razón como base para alcanzar conocimientos ciertos.",
    frase: "Pienso, luego existo.",
    seguidores: "1596",
    seguidos: "1650",
    historias: [
      {
        titulo: "Infancia",
        imagen: "/filosofos/descartes/infancia.jfif",
        descripcion:
          "René Descartes nació en 1596 en La Haye en Touraine, Francia. Desde joven tuvo acceso a una educación privilegiada y desarrolló interés por las matemáticas, la ciencia y la filosofía.",
      },
      {
        titulo: "Filosofía",
        imagen: "/filosofos/descartes/filosofia.jfif",
        descripcion:
          "Su filosofía buscaba encontrar una base completamente segura para el conocimiento. Para ello desarrolló la duda metódica y colocó a la razón en el centro de su pensamiento.",
      },
      {
        titulo: "Obras",
        imagen: "/filosofos/descartes/obras.jfif",
        descripcion:
          "Entre sus principales obras se encuentran el Discurso del método, las Meditaciones metafísicas y los Principios de la filosofía.",
      },
      {
        titulo: "Ideas",
        imagen: "/filosofos/descartes/ideas.jpg",
        descripcion:
          "Descartes defendió ideas como la duda metódica, el cogito, el racionalismo y la distinción entre mente y cuerpo.",
      },
    ],
    publicaciones: [
      {
        id: 1,
        titulo: "El nacimiento de René Descartes",
        fecha: "1596",
        imagen: "/filosofos/descartes/1.jfif",
        descripcion:
          "René Descartes nació el 31 de marzo de 1596 en La Haye en Touraine, Francia. Provenía de una familia acomodada y desde pequeño tuvo acceso a una educación que tendría una gran influencia en su pensamiento.",
      },
      {
        id: 2,
        titulo: "Su formación académica",
        fecha: "1607",
        imagen: "/filosofos/descartes/2.jpg",
        descripcion:
          "Descartes ingresó al colegio jesuita de La Flèche. Allí estudió filosofía, matemáticas, ciencias y humanidades. Aunque recibió una educación extensa, comenzó a preguntarse si todo aquello que había aprendido podía considerarse completamente verdadero.",
      },
      {
        id: 3,
        titulo: "La búsqueda de un método",
        fecha: "1619",
        imagen: "/filosofos/descartes/3.jpg",
        descripcion:
          "Descartes comenzó a buscar un método que le permitiera distinguir las ideas verdaderas de las falsas. Quería construir el conocimiento sobre fundamentos seguros y no aceptar una afirmación únicamente porque hubiera sido enseñada tradicionalmente.",
      },
      {
        id: 4,
        titulo: "La duda metódica",
        fecha: "Método filosófico",
        imagen: "/filosofos/descartes/4.png",
        descripcion:
          "La duda metódica consiste en poner provisionalmente en duda todo aquello que pueda ser cuestionado. Descartes dudó de la información de los sentidos, de las creencias tradicionales e incluso de algunos razonamientos para encontrar una verdad absolutamente segura.",
      },
      {
        id: 5,
        titulo: "Pienso, luego existo",
        fecha: "Cogito, ergo sum",
        imagen: "/filosofos/descartes/5.jfif",
        descripcion:
          "Al dudar de todo, Descartes descubrió que había algo imposible de negar: mientras dudaba estaba pensando. Si pensaba, necesariamente existía. De esta reflexión surge su famosa expresión: 'Cogito, ergo sum', es decir, 'Pienso, luego existo'.",
      },
      {
        id: 6,
        titulo: "Discurso del método",
        fecha: "1637",
        imagen: "/filosofos/descartes/6.jfif",
        descripcion:
          "En 1637 Descartes publicó el Discurso del método. En esta obra presentó una forma ordenada de utilizar la razón. Propuso analizar los problemas dividiéndolos en partes más simples y avanzar desde las ideas más sencillas hacia las más complejas.",
      },
      {
        id: 7,
        titulo: "Meditaciones metafísicas",
        fecha: "1641",
        imagen: "/filosofos/descartes/7.jfif",
        descripcion:
          "En las Meditaciones metafísicas, Descartes profundizó en temas como la duda, la existencia del yo, Dios y la naturaleza de la realidad. La obra se convirtió en uno de los textos más importantes de la filosofía moderna.",
      },
      {
        id: 8,
        titulo: "Mente y cuerpo",
        fecha: "Dualismo cartesiano",
        imagen: "/filosofos/descartes/8.gif",
        descripcion:
          "Descartes distinguió entre la mente y el cuerpo. Para él, la mente es una realidad pensante, mientras que el cuerpo pertenece al mundo material. Esta postura es conocida como dualismo cartesiano.",
      },
      {
        id: 9,
        titulo: "Descartes y las matemáticas",
        fecha: "Geometría analítica",
        imagen: "/filosofos/descartes/9.jpg",
        descripcion:
          "Descartes realizó importantes aportaciones a las matemáticas. Su trabajo ayudó a relacionar el álgebra con la geometría, contribuyendo al desarrollo de la geometría analítica. El plano cartesiano recibe su nombre por esta aportación.",
      },
      {
        id: 10,
        titulo: "El racionalismo",
        fecha: "Corriente filosófica",
        imagen: "/filosofos/descartes/10.jfif",
        descripcion:
          "Descartes es considerado uno de los principales representantes del racionalismo. Esta corriente sostiene que la razón es fundamental para adquirir conocimiento y que ciertas verdades pueden conocerse mediante el pensamiento racional.",
      },
      {
        id: 11,
        titulo: "Viaje a Suecia",
        fecha: "1649",
        imagen: "/filosofos/descartes/11.jpg",
        descripcion:
          "En 1649 Descartes viajó a Estocolmo por invitación de la reina Cristina de Suecia. Allí participó en actividades relacionadas con la filosofía y la educación.",
      },
      {
        id: 12,
        titulo: "Su muerte y legado",
        fecha: "1650",
        imagen: "/filosofos/descartes/12.jpg",
        descripcion:
          "René Descartes murió en Estocolmo el 11 de febrero de 1650. Su pensamiento transformó profundamente la filosofía occidental y también dejó importantes aportaciones en las matemáticas y la ciencia.",
      },
    ],
  },

  // BARUCH SPINOZA
  {
    slug: "baruch-spinoza",
    nombre: "Baruch Spinoza",
    usuario: "baruch_spinoza",
    corriente: "Racionalismo",
    nacimiento: "24 de noviembre de 1632",
    fallecimiento: "21 de febrero de 1677",
    lugarNacimiento: "Ámsterdam, Provincias Unidas",
    imagenPerfil: "/filosofos/baruch/baruch-spinoza.jpg",
    biografia:
      "Baruch Spinoza fue un filósofo neerlandés de origen sefardí y uno de los grandes representantes del racionalismo moderno. Su pensamiento buscó comprender a Dios, la naturaleza, la libertad humana y las emociones desde una perspectiva racional.",
    frase: "No llorar, no reír, no odiar, sino comprender.",
    seguidores: "1632",
    seguidos: "1677",
    historias: [
      {
        titulo: "Origen",
        imagen: "/filosofos/baruch/origen.jpg",
        descripcion:
          "Baruch Spinoza nació en Ámsterdam en 1632 dentro de una familia judía sefardí de origen portugués.",
      },
      {
        titulo: "Ideas",
        imagen: "/filosofos/baruch/ideas.jpeg",
        descripcion:
          "Spinoza desarrolló una filosofía racionalista en la que intentó explicar a Dios, la naturaleza y al ser humano como partes de una misma realidad.",
      },
      {
        titulo: "Ética",
        imagen: "/filosofos/baruch/etica.jpeg",
        descripcion:
          "Su obra más importante fue la Ética demostrada según el orden geométrico, publicada después de su muerte.",
      },
      {
        titulo: "Libertad",
        imagen: "/filosofos/baruch/libertad.jpeg",
        descripcion:
          "Para Spinoza, ser libre implica comprender las causas de nuestros pensamientos, emociones y acciones.",
      },
    ],
    publicaciones: [
      {
        id: 1,
        titulo: "Nacimiento en Ámsterdam",
        fecha: "1632",
        imagen: "/filosofos/baruch/1.jpg",
        descripcion:
          "Baruch Spinoza nació el 24 de noviembre de 1632 en Ámsterdam. Provenía de una familia judía sefardí de origen portugués que se había establecido en los Países Bajos buscando mayor libertad religiosa.",
      },
      {
        id: 2,
        titulo: "Su formación",
        fecha: "Década de 1640",
        imagen: "/filosofos/baruch/2.webp",
        descripcion:
          "Spinoza recibió formación religiosa judía y estudió textos bíblicos, hebreo y tradición rabínica. Con el tiempo comenzó a interesarse también por la filosofía, la ciencia y autores modernos como René Descartes.",
      },
      {
        id: 3,
        titulo: "Ruptura con su comunidad",
        fecha: "1656",
        imagen: "/filosofos/baruch/3.png",
        descripcion:
          "En 1656 Spinoza fue expulsado de la comunidad judía de Ámsterdam mediante un herem. Sus ideas filosóficas y religiosas fueron consideradas demasiado radicales por las autoridades de su comunidad.",
      },
      {
        id: 4,
        titulo: "Dios y naturaleza",
        fecha: "Deus sive Natura",
        imagen: "/filosofos/baruch/4.jpeg",
        descripcion:
          "Una de las ideas más conocidas de Spinoza es la identificación entre Dios y la naturaleza, expresada en la fórmula 'Deus sive Natura', que significa 'Dios o la Naturaleza'. Para él, todo lo que existe forma parte de una única realidad.",
      },
      {
        id: 5,
        titulo: "Una sola sustancia",
        fecha: "Metafísica",
        imagen: "/filosofos/baruch/5.jpeg",
        descripcion:
          "Spinoza sostuvo que existe una sola sustancia infinita. Todo lo que existe son modos o manifestaciones de esa única realidad. Con ello rechazó una separación absoluta entre Dios, el ser humano y la naturaleza.",
      },
      {
        id: 6,
        titulo: "La Ética",
        fecha: "Obra principal",
        imagen: "/filosofos/baruch/etica.jpeg",
        descripcion:
          "Su obra más importante es la Ética demostrada según el orden geométrico. En ella presentó su filosofía mediante definiciones, axiomas, proposiciones y demostraciones, intentando alcanzar una claridad semejante a la de las matemáticas.",
      },
      {
        id: 7,
        titulo: "Razón y conocimiento",
        fecha: "Racionalismo",
        imagen: "/filosofos/baruch/7.jpeg",
        descripcion:
          "Como racionalista, Spinoza consideraba que la razón permite alcanzar un conocimiento más adecuado de la realidad. Para él, comprender las causas de las cosas libera al ser humano de muchas ideas confusas.",
      },
      {
        id: 8,
        titulo: "Las emociones",
        fecha: "Afectos",
        imagen: "/filosofos/baruch/8.jpeg",
        descripcion:
          "Spinoza estudió las emociones humanas como fenómenos naturales. En lugar de condenarlas moralmente, intentó comprender sus causas. Consideraba que una persona puede alcanzar mayor libertad cuando entiende por qué siente y actúa de determinada manera.",
      },
      {
        id: 9,
        titulo: "La libertad",
        fecha: "Pensamiento ético",
        imagen: "/filosofos/baruch/libertad.jpeg",
        descripcion:
          "Para Spinoza, la libertad no consiste simplemente en actuar sin causas. Una persona es más libre cuando comprende las causas que determinan sus acciones y vive guiada por la razón.",
      },
      {
        id: 10,
        titulo: "Crítica a la superstición",
        fecha: "1670",
        imagen: "/filosofos/baruch/10.jpg",
        descripcion:
          "En el Tratado teológico-político, publicado de forma anónima en 1670, Spinoza criticó la superstición y defendió la libertad de pensamiento. También sostuvo que la religión y la filosofía debían distinguirse.",
      },
      {
        id: 11,
        titulo: "Libertad de pensamiento",
        fecha: "Filosofía política",
        imagen: "/filosofos/baruch/11.jpg",
        descripcion:
          "Spinoza defendió que una sociedad estable necesita permitir la libertad de pensamiento y expresión. Consideraba que el poder político no debía controlar completamente las ideas de las personas.",
      },
      {
        id: 12,
        titulo: "Su muerte y legado",
        fecha: "1677",
        imagen: "/filosofos/baruch/12.jpeg",
        descripcion:
          "Baruch Spinoza murió el 21 de febrero de 1677 en La Haya. Su obra Ética fue publicada después de su muerte. Con el tiempo, su pensamiento ejerció una enorme influencia en la filosofía moderna, la ética, la política y la interpretación de la religión.",
      },
    ],
  },

  // PLATÓN
  {
    slug: "platon",
    nombre: "Platón",
    usuario: "platon_oficial",
    corriente: "Filosofía Clásica",
    nacimiento: "427 a.C.",
    fallecimiento: "347 a.C.",
    lugarNacimiento: "Atenas, Antigua Grecia",
    imagenPerfil: "/filosofos/platon/platon.jpg",
    biografia:
      "Platón fue un filósofo griego, seguidor de Sócrates y maestro de Aristóteles. Fundó la Academia de Atenas y escribió sobre política, ética, metafísica y epistemología, dejando un legado fundamental para el pensamiento occidental.",
    frase: "La ignorancia es la raíz y el tronco de todos los males.",
    seguidores: "427",
    seguidos: "347",
    historias: [
      {
        titulo: "Juventud",
        imagen: "/filosofos/platon/juventud.jpg",
        descripcion: "Nacido en una familia aristocrática, Platón se interesó inicialmente por la poesía y la política antes de conocer a Sócrates.",
      },
      {
        titulo: "La Academia",
        imagen: "/filosofos/platon/academia.jpg",
        descripcion: "Fundó la Academia en Atenas, considerada la primera universidad de Europa.",
      },
      {
        titulo: "Diálogos",
        imagen: "/filosofos/platon/dialogos.jpg",
        descripcion: "Escribió sus obras en forma de diálogos, utilizando a Sócrates como personaje principal para exponer sus ideas.",
      },
      {
        titulo: "Las Ideas",
        imagen: "/filosofos/platon/ideas.jpg",
        descripcion: "Su teoría más famosa sostiene que el mundo sensible es solo una copia imperfecta del mundo inteligible de las Ideas.",
      },
    ],
    publicaciones: [
      {
        id: 1,
        titulo: "El encuentro con Sócrates",
        fecha: "407 a.C.",
        imagen: "/filosofos/platon/1.jpg",
        descripcion: "A los veinte años, Platón conoció a Sócrates, un evento que cambió su vida por completo. Abandonó sus aspiraciones literarias para dedicarse enteramente a la filosofía.",
      },
      {
        id: 2,
        titulo: "La muerte del maestro",
        fecha: "399 a.C.",
        imagen: "/filosofos/platon/2.jpg",
        descripcion: "La condena a muerte de Sócrates por parte de la democracia ateniense decepcionó profundamente a Platón, convenciéndolo de que los filósofos debían gobernar para alcanzar la justicia.",
      },
      {
        id: 3,
        titulo: "Los viajes filosóficos",
        fecha: "390 a.C.",
        imagen: "/filosofos/platon/3.jpg",
        descripcion: "Tras la muerte de Sócrates, Platón viajó por Egipto, Italia y Sicilia. Durante estos viajes interactuó con comunidades pitagóricas que influirían en su amor por las matemáticas.",
      },
      {
        id: 4,
        titulo: "Fundación de la Academia",
        fecha: "387 a.C.",
        imagen: "/filosofos/platon/academia.jpg",
        descripcion: "A su regreso a Atenas, fundó la Academia, una escuela dedicada a la investigación científica y filosófica donde se enseñaba matemáticas, astronomía y dialéctica.",
      },
      {
        id: 5,
        titulo: "El Mito de la Caverna",
        fecha: "Alegoría",
        imagen: "/filosofos/platon/5.jpeg",
        descripcion: "En 'La República', Platón presenta el Mito de la Caverna, una alegoría sobre la educación y cómo el ser humano debe liberarse de las sombras (ignorancia) para contemplar la luz del conocimiento verdadero.",
      },
      {
        id: 6,
        titulo: "La Teoría de las Ideas",
        fecha: "Metafísica",
        imagen: "/filosofos/platon/ideas.jpg",
        descripcion: "Propuso que existen dos mundos: el mundo sensible (físico y cambiante) y el mundo inteligible (el de las Ideas o Formas perfectas, inmutables y eternas).",
      },
      {
        id: 7,
        titulo: "El Rey Filósofo",
        fecha: "Política",
        imagen: "/filosofos/platon/7.jpeg",
        descripcion: "En su obra política, defendió que las ciudades-estado solo estarían libres de males cuando los reyes se volvieran filósofos o los filósofos fueran reyes.",
      },
      {
        id: 8,
        titulo: "El alma tripartita",
        fecha: "Psicología",
        imagen: "/filosofos/platon/8.webp",
        descripcion: "Platón dividió el alma humana en tres partes: la racional (que debe gobernar), la irascible (emociones y valor) y la concupiscible (deseos y apetitos físicos).",
      },
      {
        id: 9,
        titulo: "Muerte y legado",
        fecha: "347 a.C.",
        imagen: "/filosofos/platon/9.jpg",
        descripcion: "Platón falleció a los 80 años. Su Academia sobrevivió durante siglos y su pensamiento sentó las bases de la mayor parte de la teología y filosofía de occidente.",
      },
    ],
  },

  // ARISTÓTELES
  {
    slug: "aristoteles",
    nombre: "Aristóteles",
    usuario: "aristoteles",
    corriente: "Filosofía Clásica",
    nacimiento: "384 a.C.",
    fallecimiento: "322 a.C.",
    lugarNacimiento: "Estagira, Antigua Grecia",
    imagenPerfil: "/filosofos/aristoteles/aristoteles.jpeg",
    biografia:
      "Aristóteles fue un filósofo, polímata y científico griego. Discípulo de Platón y maestro de Alejandro Magno, sus ideas sentaron las bases de la lógica, la biología, la ética y la política en Occidente.",
    frase: "El ignorante afirma, el sabio duda y reflexiona.",
    seguidores: "384",
    seguidos: "322",
    historias: [
      {
        titulo: "Estagira",
        imagen: "/filosofos/aristoteles/estagira.jpeg",
        descripcion: "Nacido en Estagira, Macedonia. Su padre fue médico del rey, lo que despertó su temprano interés por la biología y la anatomía.",
      },
      {
        titulo: "El Liceo",
        imagen: "/filosofos/aristoteles/liceo.jpeg",
        descripcion: "Fundó su propia escuela en Atenas, conocida como el Liceo, donde sus seguidores eran llamados 'peripatéticos' porque debatían mientras caminaban.",
      },
      {
        titulo: "Lógica",
        imagen: "/filosofos/aristoteles/logica.jpeg",
        descripcion: "Es considerado el padre de la lógica formal, sistematizando el razonamiento deductivo a través del silogismo.",
      },
      {
        titulo: "Biología",
        imagen: "/filosofos/aristoteles/biologia.jpg",
        descripcion: "Realizó las primeras clasificaciones sistemáticas de animales, marcando el inicio de la zoología y la biología empírica.",
      },
    ],
    publicaciones: [
      {
        id: 1,
        titulo: "Ingreso a la Academia",
        fecha: "367 a.C.",
        imagen: "/filosofos/aristoteles/1.jpg",
        descripcion: "A los 17 años, Aristóteles viajó a Atenas para estudiar en la Academia de Platón, donde permaneció durante veinte años, destacándose como su alumno más brillante.",
      },
      {
        id: 2,
        titulo: "Crítica a las Ideas",
        fecha: "Metafísica",
        imagen: "/filosofos/aristoteles/2.jpeg",
        descripcion: "Aunque respetaba a Platón, Aristóteles rechazó su Teoría de las Ideas. Argumentó que la esencia (la 'forma') de las cosas no está en otro mundo, sino incrustada en la materia misma de cada objeto.",
      },
      {
        id: 3,
        titulo: "El tutor de un conquistador",
        fecha: "343 a.C.",
        imagen: "/filosofos/aristoteles/3.jpeg",
        descripcion: "El rey Filipo II de Macedonia lo llamó para que fuera el tutor de su hijo, el joven Alejandro Magno. Le enseñó política, ética y poesía durante varios años.",
      },
      {
        id: 4,
        titulo: "La fundación del Liceo",
        fecha: "335 a.C.",
        imagen: "/filosofos/aristoteles/liceo.jpeg",
        descripcion: "De regreso a Atenas, fundó el Liceo. A diferencia de la Academia, su escuela tenía un enfoque más empírico y abarcaba estudios detallados de la naturaleza, la biología y la historia.",
      },
      {
        id: 5,
        titulo: "El padre de la Lógica",
        fecha: "El Órganon",
        imagen: "/filosofos/aristoteles/5.jpeg",
        descripcion: "En sus tratados lógicos (conocidos como el Órganon), Aristóteles desarrolló el 'silogismo', una forma de razonamiento deductivo que dominaría el pensamiento lógico hasta el siglo XIX.",
      },
      {
        id: 6,
        titulo: "La Teoría de las Cuatro Causas",
        fecha: "Física",
        imagen: "/filosofos/aristoteles/6.jpeg",
        descripcion: "Para explicar cualquier fenómeno, postuló que debían entenderse cuatro causas: la material (de qué está hecho), la formal (su diseño), la eficiente (quién lo hizo) y la final (su propósito).",
      },
      {
        id: 7,
        titulo: "Ética a Nicómaco",
        fecha: "Filosofía Moral",
        imagen: "/filosofos/aristoteles/7.jpeg",
        descripcion: "En su obra ética, argumentó que el objetivo de la vida humana es la 'Eudaimonía' (felicidad o florecimiento), la cual se alcanza practicando la virtud y encontrando el 'justo medio' entre los extremos.",
      },
      {
        id: 8,
        titulo: "El animal político",
        fecha: "Política",
        imagen: "/filosofos/aristoteles/8.jpeg",
        descripcion: "Definió al ser humano como un 'zoon politikon' (animal político o social). Sostuvo que el hombre solo puede desarrollar todo su potencial viviendo en comunidad dentro de la polis (ciudad-estado).",
      },
      {
        id: 9,
        titulo: "Exilio y muerte",
        fecha: "322 a.C.",
        imagen: "/filosofos/aristoteles/9.jpeg",
        descripcion: "Tras la muerte de Alejandro Magno, resurgió el sentimiento antimacedónico en Atenas. Para evitar el destino de Sócrates, Aristóteles se exilió a Calcis, donde murió de causas naturales un año después.",
      },
    ],
  },
];

export function obtenerFilosofo(slug: string) {
  return filosofos.find((filosofo) => filosofo.slug === slug);
}