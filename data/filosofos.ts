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
  corriente: "Racionalismo" | "Empirismo";
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

    frase:
      "Pienso, luego existo.",

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

    imagenPerfil:
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/Spinoza.jpg",

    biografia:
      "Baruch Spinoza fue un filósofo neerlandés de origen sefardí y uno de los grandes representantes del racionalismo moderno. Su pensamiento buscó comprender a Dios, la naturaleza, la libertad humana y las emociones desde una perspectiva racional.",

    frase:
      "No llorar, no reír, no odiar, sino comprender.",

    seguidores: "1,632",

    seguidos: "1,677",

    historias: [
      {
        titulo: "Origen",
        imagen:
          "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17",
        descripcion:
          "Baruch Spinoza nació en Ámsterdam en 1632 dentro de una familia judía sefardí de origen portugués.",
      },
      {
        titulo: "Ideas",
        imagen:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
        descripcion:
          "Spinoza desarrolló una filosofía racionalista en la que intentó explicar a Dios, la naturaleza y al ser humano como partes de una misma realidad.",
      },
      {
        titulo: "Ética",
        imagen:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
        descripcion:
          "Su obra más importante fue la Ética demostrada según el orden geométrico, publicada después de su muerte.",
      },
      {
        titulo: "Libertad",
        imagen:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        descripcion:
          "Para Spinoza, ser libre implica comprender las causas de nuestros pensamientos, emociones y acciones.",
      },
    ],

    publicaciones: [
      {
        id: 1,
        titulo: "Nacimiento en Ámsterdam",
        fecha: "1632",
        imagen:
          "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17",
        descripcion:
          "Baruch Spinoza nació el 24 de noviembre de 1632 en Ámsterdam. Provenía de una familia judía sefardí de origen portugués que se había establecido en los Países Bajos buscando mayor libertad religiosa.",
      },

      {
        id: 2,
        titulo: "Su formación",
        fecha: "Década de 1640",
        imagen:
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
        descripcion:
          "Spinoza recibió formación religiosa judía y estudió textos bíblicos, hebreo y tradición rabínica. Con el tiempo comenzó a interesarse también por la filosofía, la ciencia y autores modernos como René Descartes.",
      },

      {
        id: 3,
        titulo: "Ruptura con su comunidad",
        fecha: "1656",
        imagen:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a",
        descripcion:
          "En 1656 Spinoza fue expulsado de la comunidad judía de Ámsterdam mediante un herem. Sus ideas filosóficas y religiosas fueron consideradas demasiado radicales por las autoridades de su comunidad.",
      },

      {
        id: 4,
        titulo: "Dios y naturaleza",
        fecha: "Deus sive Natura",
        imagen:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        descripcion:
          "Una de las ideas más conocidas de Spinoza es la identificación entre Dios y la naturaleza, expresada en la fórmula 'Deus sive Natura', que significa 'Dios o la Naturaleza'. Para él, todo lo que existe forma parte de una única realidad.",
      },

      {
        id: 5,
        titulo: "Una sola sustancia",
        fecha: "Metafísica",
        imagen:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
        descripcion:
          "Spinoza sostuvo que existe una sola sustancia infinita. Todo lo que existe son modos o manifestaciones de esa única realidad. Con ello rechazó una separación absoluta entre Dios, el ser humano y la naturaleza.",
      },

      {
        id: 6,
        titulo: "La Ética",
        fecha: "Obra principal",
        imagen:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
        descripcion:
          "Su obra más importante es la Ética demostrada según el orden geométrico. En ella presentó su filosofía mediante definiciones, axiomas, proposiciones y demostraciones, intentando alcanzar una claridad semejante a la de las matemáticas.",
      },

      {
        id: 7,
        titulo: "Razón y conocimiento",
        fecha: "Racionalismo",
        imagen:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
        descripcion:
          "Como racionalista, Spinoza consideraba que la razón permite alcanzar un conocimiento más adecuado de la realidad. Para él, comprender las causas de las cosas libera al ser humano de muchas ideas confusas.",
      },

      {
        id: 8,
        titulo: "Las emociones",
        fecha: "Afectos",
        imagen:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        descripcion:
          "Spinoza estudió las emociones humanas como fenómenos naturales. En lugar de condenarlas moralmente, intentó comprender sus causas. Consideraba que una persona puede alcanzar mayor libertad cuando entiende por qué siente y actúa de determinada manera.",
      },

      {
        id: 9,
        titulo: "La libertad",
        fecha: "Pensamiento ético",
        imagen:
          "https://images.unsplash.com/photo-1490730141103-6cac27aaab94",
        descripcion:
          "Para Spinoza, la libertad no consiste simplemente en actuar sin causas. Una persona es más libre cuando comprende las causas que determinan sus acciones y vive guiada por la razón.",
      },

      {
        id: 10,
        titulo: "Crítica a la superstición",
        fecha: "1670",
        imagen:
          "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
        descripcion:
          "En el Tratado teológico-político, publicado de forma anónima en 1670, Spinoza criticó la superstición y defendió la libertad de pensamiento. También sostuvo que la religión y la filosofía debían distinguirse.",
      },

      {
        id: 11,
        titulo: "Libertad de pensamiento",
        fecha: "Filosofía política",
        imagen:
          "https://images.unsplash.com/photo-1532012197267-da84d127e765",
        descripcion:
          "Spinoza defendió que una sociedad estable necesita permitir la libertad de pensamiento y expresión. Consideraba que el poder político no debía controlar completamente las ideas de las personas.",
      },

      {
        id: 12,
        titulo: "Su muerte y legado",
        fecha: "1677",
        imagen:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        descripcion:
          "Baruch Spinoza murió el 21 de febrero de 1677 en La Haya. Su obra Ética fue publicada después de su muerte. Con el tiempo, su pensamiento ejerció una enorme influencia en la filosofía moderna, la ética, la política y la interpretación de la religión.",
      },
    ],
  },

  // GOTTFRIED LEIBNIZ

  {
    slug: "gottfried-leibniz",

    nombre: "Gottfried Wilhelm Leibniz",

    usuario: "gottfried_leibniz",

    corriente: "Racionalismo",

    nacimiento: "1 de julio de 1646",

    fallecimiento: "14 de noviembre de 1716",

    lugarNacimiento: "Leipzig, Sacro Imperio Romano Germánico",

    imagenPerfil:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/Gottfried_Wilhelm_Leibniz%2C_Bernhard_Christoph_Francke.jpg",

    biografia:
      "Gottfried Wilhelm Leibniz fue un filósofo, matemático, jurista y científico alemán. Fue uno de los principales representantes del racionalismo y buscó explicar la realidad mediante principios racionales. También realizó importantes aportaciones a las matemáticas y desarrolló de manera independiente el cálculo diferencial e integral.",

    frase:
      "Vivimos en el mejor de los mundos posibles.",

    seguidores: "1,646",

    seguidos: "1,716",

    historias: [
      {
        titulo: "Infancia",
        imagen:
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      },
      {
        titulo: "Razón",
        imagen:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      },
      {
        titulo: "Mónadas",
        imagen:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      },
      {
        titulo: "Cálculo",
        imagen:
          "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
      },
      {
        titulo: "Obras",
        imagen:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
      },
    ],

    publicaciones: [
      {
        id: 1,
        titulo: "Nacimiento de Leibniz",
        fecha: "1646",
        imagen:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        descripcion:
          "Gottfried Wilhelm Leibniz nació el 1 de julio de 1646 en Leipzig, en el Sacro Imperio Romano Germánico. Creció en un ambiente relacionado con los estudios y desde muy joven mostró una gran curiosidad intelectual.",
      },

      {
        id: 2,
        titulo: "Un lector extraordinario",
        fecha: "Infancia",
        imagen:
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
        descripcion:
          "Tras la muerte de su padre, Leibniz tuvo acceso a su biblioteca. Allí estudió por cuenta propia textos clásicos, filosofía, historia y otras disciplinas. Su formación autodidacta fue fundamental para el desarrollo de su pensamiento.",
      },

      {
        id: 3,
        titulo: "Estudios universitarios",
        fecha: "1661",
        imagen:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
        descripcion:
          "Leibniz ingresó a la Universidad de Leipzig siendo muy joven. Estudió filosofía, matemáticas y derecho. Posteriormente obtuvo un doctorado en derecho y comenzó una carrera intelectual que abarcó numerosas disciplinas.",
      },

      {
        id: 4,
        titulo: "El principio de razón suficiente",
        fecha: "Racionalismo",
        imagen:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a",
        descripcion:
          "Uno de los principios fundamentales del pensamiento de Leibniz es el principio de razón suficiente. Según esta idea, nada sucede sin que exista una razón suficiente que explique por qué ocurre de esa manera y no de otra.",
      },

      {
        id: 5,
        titulo: "El principio de identidad",
        fecha: "Lógica",
        imagen:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
        descripcion:
          "Leibniz también defendió principios lógicos que buscaban explicar racionalmente la realidad. Consideraba que el pensamiento debía aspirar a una claridad comparable con la de las matemáticas.",
      },

      {
        id: 6,
        titulo: "Verdades de razón y verdades de hecho",
        fecha: "Teoría del conocimiento",
        imagen:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
        descripcion:
          "Leibniz distinguió entre verdades de razón y verdades de hecho. Las verdades de razón son necesarias y su contrario implica una contradicción, mientras que las verdades de hecho dependen de cómo es realmente el mundo.",
      },

      {
        id: 7,
        titulo: "La teoría de las mónadas",
        fecha: "Monadología",
        imagen:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        descripcion:
          "Leibniz propuso que la realidad está compuesta por unidades simples llamadas mónadas. Estas no son partes materiales, sino centros de percepción y actividad que conforman la estructura fundamental de la realidad.",
      },

      {
        id: 8,
        titulo: "La armonía preestablecida",
        fecha: "Metafísica",
        imagen:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        descripcion:
          "Para explicar la relación entre las mónadas, Leibniz desarrolló la idea de una armonía preestablecida. Según esta propuesta, cada mónada evoluciona según su propia naturaleza, pero todas mantienen una correspondencia ordenada establecida por Dios.",
      },

      {
        id: 9,
        titulo: "El mejor de los mundos posibles",
        fecha: "Teodicea",
        imagen:
          "https://images.unsplash.com/photo-1490730141103-6cac27aaab94",
        descripcion:
          "Leibniz sostuvo que Dios, siendo perfecto y racional, habría elegido crear el mejor de los mundos posibles. Esta idea intentaba explicar cómo podían coexistir el orden del universo, la libertad humana y la existencia del mal.",
      },

      {
        id: 10,
        titulo: "El desarrollo del cálculo",
        fecha: "1670s",
        imagen:
          "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
        descripcion:
          "Leibniz desarrolló de manera independiente una formulación del cálculo diferencial e integral. Introdujo una notación matemática que sigue utilizándose en la actualidad, como los símbolos para diferenciales e integrales.",
      },

      {
        id: 11,
        titulo: "Una máquina de calcular",
        fecha: "1673",
        imagen:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        descripcion:
          "Leibniz también trabajó en el desarrollo de máquinas capaces de realizar operaciones matemáticas. Su calculadora mecánica podía efectuar sumas, restas, multiplicaciones y divisiones.",
      },

      {
        id: 12,
        titulo: "El sistema binario",
        fecha: "Matemáticas",
        imagen:
          "https://images.unsplash.com/photo-1518770660439-4636190af475",
        descripcion:
          "Leibniz estudió y promovió el sistema numérico binario, basado únicamente en los valores 0 y 1. Siglos después, este sistema se convertiría en uno de los fundamentos de la informática moderna.",
      },

      {
        id: 13,
        titulo: "La Monadología",
        fecha: "1714",
        imagen:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
        descripcion:
          "En 1714 Leibniz escribió la Monadología, una obra breve pero fundamental en la que presentó de manera resumida su visión metafísica sobre las mónadas, Dios, la percepción y el orden del universo.",
      },

      {
        id: 14,
        titulo: "Razón y experiencia",
        fecha: "Racionalismo",
        imagen:
          "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
        descripcion:
          "Leibniz consideraba que la experiencia es importante, pero sostenía que la mente posee principios y estructuras racionales que no proceden únicamente de los sentidos. En este punto se diferenciaba claramente de los filósofos empiristas.",
      },

      {
        id: 15,
        titulo: "Su muerte y legado",
        fecha: "1716",
        imagen:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        descripcion:
          "Gottfried Wilhelm Leibniz murió el 14 de noviembre de 1716 en Hannover. Su legado abarca la filosofía, las matemáticas, la lógica, la ciencia y áreas que posteriormente serían fundamentales para el desarrollo de la informática.",
      },
    ],
  },

  // JOHN LOCKE 
  {
    slug: "john-locke",

    nombre: "John Locke",

    usuario: "john_locke",

    corriente: "Empirismo",

    nacimiento: "29 de agosto de 1632",

    fallecimiento: "28 de octubre de 1704",

    lugarNacimiento: "Wrington, Somerset, Inglaterra",

    imagenPerfil:
      "https://upload.wikimedia.org/wikipedia/commons/d/d1/JohnLocke.png",

    biografia:
      "John Locke fue un filósofo y médico inglés considerado uno de los principales representantes del empirismo. Defendió que el conocimiento humano surge principalmente de la experiencia y rechazó la idea de que nacemos con conocimientos innatos.",

    frase:
      "Nada hay en el entendimiento que no haya estado antes en los sentidos.",

    seguidores: "1,632",

    seguidos: "1,704",

    historias: [
      {
        titulo: "Infancia",
        imagen:
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      },
      {
        titulo: "Experiencia",
        imagen:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      },
      {
        titulo: "Ideas",
        imagen:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      },
      {
        titulo: "Política",
        imagen:
          "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
      },
      {
        titulo: "Obras",
        imagen:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
      },
    ],

    publicaciones: [
      {
        id: 1,
        titulo: "Nacimiento de John Locke",
        fecha: "1632",
        imagen:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        descripcion:
          "John Locke nació el 29 de agosto de 1632 en Wrington, Somerset, Inglaterra. Creció en un contexto de grandes cambios políticos y religiosos que más tarde influirían en su pensamiento filosófico y político.",
      },

      {
        id: 2,
        titulo: "Su formación",
        fecha: "1652",
        imagen:
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
        descripcion:
          "Locke estudió en Christ Church, Oxford. Allí tuvo contacto con la filosofía, la medicina y las nuevas ideas científicas de su época. Su interés por la observación y la experiencia fue creciendo durante estos años.",
      },

      {
        id: 3,
        titulo: "La mente como una hoja en blanco",
        fecha: "Tabula rasa",
        imagen:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a",
        descripcion:
          "Locke rechazó la existencia de ideas innatas. Según él, la mente al nacer puede compararse con una hoja en blanco, o tabula rasa, sobre la cual la experiencia va dejando contenidos.",
      },

      {
        id: 4,
        titulo: "El origen del conocimiento",
        fecha: "Empirismo",
        imagen:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
        descripcion:
          "Para Locke, el conocimiento procede de la experiencia. Las ideas se originan principalmente a través de dos fuentes: la sensación, que proviene del mundo exterior, y la reflexión, mediante la cual la mente observa sus propias operaciones.",
      },

      {
        id: 5,
        titulo: "Sensación y reflexión",
        fecha: "Teoría del conocimiento",
        imagen:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        descripcion:
          "Locke explicó que nuestras ideas no aparecen de manera espontánea. Algunas llegan mediante los sentidos y otras mediante la reflexión interna sobre procesos como pensar, recordar, dudar o querer.",
      },

      {
        id: 6,
        titulo: "Ideas simples e ideas complejas",
        fecha: "Conocimiento",
        imagen:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
        descripcion:
          "Locke distinguió entre ideas simples e ideas complejas. Las ideas simples son recibidas por la experiencia, mientras que la mente puede combinar esas ideas para formar conceptos más complejos.",
      },

      {
        id: 7,
        titulo: "Ensayo sobre el entendimiento humano",
        fecha: "1689",
        imagen:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
        descripcion:
          "En su Ensayo sobre el entendimiento humano, Locke investigó el origen, los límites y el alcance del conocimiento. Esta obra se convirtió en uno de los textos fundamentales del empirismo moderno.",
      },

      {
        id: 8,
        titulo: "Los límites del conocimiento",
        fecha: "Epistemología",
        imagen:
          "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
        descripcion:
          "Locke sostenía que el ser humano no puede conocer absolutamente todo. El conocimiento tiene límites y depende de las ideas que obtenemos por medio de la experiencia.",
      },

      {
        id: 9,
        titulo: "Derechos naturales",
        fecha: "Filosofía política",
        imagen:
          "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
        descripcion:
          "Locke defendió que todas las personas poseen derechos naturales, especialmente la vida, la libertad y la propiedad. Estos derechos no dependen de que un gobernante los conceda.",
      },

      {
        id: 10,
        titulo: "El gobierno y el consentimiento",
        fecha: "Dos tratados sobre el gobierno",
        imagen:
          "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
        descripcion:
          "Para Locke, la autoridad política legítima surge del consentimiento de los gobernados. El gobierno debe proteger los derechos de las personas y no ejercer un poder absoluto sobre ellas.",
      },

      {
        id: 11,
        titulo: "El derecho a cambiar un gobierno",
        fecha: "Pensamiento político",
        imagen:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
        descripcion:
          "Locke sostuvo que si un gobierno deja de proteger los derechos naturales y actúa de manera tiránica, la sociedad tiene derecho a modificarlo o reemplazarlo.",
      },

      {
        id: 12,
        titulo: "Tolerancia religiosa",
        fecha: "1689",
        imagen:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        descripcion:
          "Locke defendió la tolerancia religiosa y consideró que el Estado no debía imponer por la fuerza las creencias religiosas de las personas. Estas ideas fueron importantes para el desarrollo posterior de la libertad religiosa.",
      },

      {
        id: 13,
        titulo: "Identidad personal",
        fecha: "Conciencia",
        imagen:
          "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",
        descripcion:
          "Locke relacionó la identidad personal con la conciencia. Para él, una persona mantiene su identidad en la medida en que puede reconocerse como el mismo sujeto a través de sus experiencias y recuerdos.",
      },

      {
        id: 14,
        titulo: "Locke y el empirismo",
        fecha: "Corriente filosófica",
        imagen:
          "https://images.unsplash.com/photo-1532012197267-da84d127e765",
        descripcion:
          "John Locke es considerado uno de los fundadores del empirismo británico. Su propuesta influyó profundamente en filósofos posteriores como George Berkeley y David Hume.",
      },

      {
        id: 15,
        titulo: "Su muerte y legado",
        fecha: "1704",
        imagen:
          "https://images.unsplash.com/photo-1490730141103-6cac27aaab94",
        descripcion:
          "John Locke murió el 28 de octubre de 1704 en Essex, Inglaterra. Sus ideas influyeron profundamente en la filosofía, la política moderna, la educación y el desarrollo de conceptos como los derechos individuales y el gobierno limitado.",
      },
    ],
  },

  // GEORGE BERKELEY

  {
    slug: "george-berkeley",

    nombre: "George Berkeley",

    usuario: "george_berkeley",

    corriente: "Empirismo",

    nacimiento: "12 de marzo de 1685",

    fallecimiento: "14 de enero de 1753",

    lugarNacimiento: "Condado de Kilkenny, Irlanda",

    imagenPerfil:
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/George_Berkeley_by_John_Smybert.jpg",

    biografia:
      "George Berkeley fue un filósofo irlandés y uno de los principales representantes del empirismo británico. Es conocido por su idealismo inmaterialista y por sostener que los objetos existen en la medida en que son percibidos.",

    frase:
      "Ser es ser percibido.",

    seguidores: "1,685",

    seguidos: "1,753",

    historias: [
      {
        titulo: "Infancia",
        imagen:
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      },
      {
        titulo: "Percepción",
        imagen:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      },
      {
        titulo: "Ideas",
        imagen:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      },
      {
        titulo: "Obras",
        imagen:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
      },
      {
        titulo: "Idealismo",
        imagen:
          "https://images.unsplash.com/photo-1532012197267-da84d127e765",
      },
    ],

    publicaciones: [
      {
        id: 1,
        titulo: "Nacimiento de George Berkeley",
        fecha: "1685",
        imagen:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        descripcion:
          "George Berkeley nació el 12 de marzo de 1685 en el condado de Kilkenny, Irlanda. Creció en un ambiente religioso y académico que más tarde influiría en su formación filosófica.",
      },

      {
        id: 2,
        titulo: "Su formación en Trinity College",
        fecha: "1700",
        imagen:
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
        descripcion:
          "Berkeley estudió en Trinity College de Dublín. Allí recibió formación en filosofía, matemáticas, lógica y ciencias, y comenzó a interesarse por los problemas relacionados con el conocimiento y la percepción.",
      },

      {
        id: 3,
        titulo: "El problema de la percepción",
        fecha: "Empirismo",
        imagen:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
        descripcion:
          "Berkeley partió del empirismo y sostuvo que todo conocimiento comienza con la experiencia. Sin embargo, llevó esta idea más lejos al afirmar que aquello que conocemos directamente son nuestras percepciones e ideas.",
      },

      {
        id: 4,
        titulo: "Ser es ser percibido",
        fecha: "Esse est percipi",
        imagen:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a",
        descripcion:
          "La frase más conocida de Berkeley es 'esse est percipi', que puede traducirse como 'ser es ser percibido'. Con esta idea sostuvo que los objetos existen como conjuntos de percepciones presentes en una mente.",
      },

      {
        id: 5,
        titulo: "Crítica a la materia",
        fecha: "Inmaterialismo",
        imagen:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        descripcion:
          "Berkeley rechazó la existencia de una sustancia material independiente de la percepción. Consideraba innecesario suponer que existe una materia desconocida detrás de aquello que experimentamos.",
      },

      {
        id: 6,
        titulo: "Ideas y espíritus",
        fecha: "Metafísica",
        imagen:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
        descripcion:
          "Según Berkeley, la realidad está formada por ideas y por espíritus o mentes capaces de percibirlas. Las ideas son pasivas, mientras que las mentes son activas porque pueden percibir, pensar y querer.",
      },

      {
        id: 7,
        titulo: "Dios y la permanencia de las cosas",
        fecha: "Filosofía religiosa",
        imagen:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        descripcion:
          "Berkeley explicó la continuidad de los objetos mediante la existencia de Dios. Aunque una persona deje de percibir un objeto, Dios lo percibe constantemente, por lo que el mundo mantiene su estabilidad y continuidad.",
      },

      {
        id: 8,
        titulo: "Ensayo sobre una nueva teoría de la visión",
        fecha: "1709",
        imagen:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
        descripcion:
          "En 1709 Berkeley publicó su Ensayo sobre una nueva teoría de la visión, donde estudió cómo percibimos la distancia, el tamaño y la posición de los objetos mediante la experiencia.",
      },

      {
        id: 9,
        titulo: "Tratado sobre los principios del conocimiento humano",
        fecha: "1710",
        imagen:
          "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
        descripcion:
          "En esta obra Berkeley expuso sus principales ideas filosóficas. Defendió que aquello que llamamos objetos materiales son realmente conjuntos de ideas percibidas por la mente.",
      },

      {
        id: 10,
        titulo: "Tres diálogos entre Hylas y Philonous",
        fecha: "1713",
        imagen:
          "https://images.unsplash.com/photo-1532012197267-da84d127e765",
        descripcion:
          "En Tres diálogos entre Hylas y Philonous, Berkeley presentó su filosofía mediante una conversación entre dos personajes. La obra buscaba defender su inmaterialismo frente a las objeciones de quienes sostenían la existencia de la materia.",
      },

      {
        id: 11,
        titulo: "Berkeley y John Locke",
        fecha: "Debate filosófico",
        imagen:
          "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",
        descripcion:
          "Berkeley retomó varias ideas de John Locke, especialmente la importancia de la experiencia. Sin embargo, criticó la idea de una sustancia material existente detrás de nuestras percepciones.",
      },

      {
        id: 12,
        titulo: "Las ideas abstractas",
        fecha: "Crítica filosófica",
        imagen:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a",
        descripcion:
          "Berkeley criticó la teoría de las ideas abstractas. Consideraba que nuestro pensamiento trabaja con ideas particulares y que muchas confusiones filosóficas aparecen cuando creemos poseer conceptos completamente abstractos.",
      },

      {
        id: 13,
        titulo: "Su proyecto en América",
        fecha: "1728",
        imagen:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        descripcion:
          "Berkeley viajó a América con la intención de crear una institución educativa en las Bermudas. El proyecto finalmente no se realizó debido a la falta del financiamiento prometido por el gobierno británico.",
      },

      {
        id: 14,
        titulo: "Obispo de Cloyne",
        fecha: "1734",
        imagen:
          "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
        descripcion:
          "En 1734 Berkeley fue nombrado obispo de Cloyne, en Irlanda. Continuó desarrollando actividades religiosas, intelectuales y filosóficas durante esta etapa de su vida.",
      },

      {
        id: 15,
        titulo: "Su muerte y legado",
        fecha: "1753",
        imagen:
          "https://images.unsplash.com/photo-1490730141103-6cac27aaab94",
        descripcion:
          "George Berkeley murió el 14 de enero de 1753 en Oxford. Su filosofía tuvo una gran influencia en el desarrollo posterior del empirismo y planteó preguntas fundamentales sobre la percepción, la realidad y la relación entre la mente y el mundo.",
      },
    ],
  },

  // DAVID HUME
  {
    slug: "david-hume",

    nombre: "David Hume",

    usuario: "david_hume",

    corriente: "Empirismo",

    nacimiento: "7 de mayo de 1711",

    fallecimiento: "25 de agosto de 1776",

    lugarNacimiento: "Edimburgo, Escocia",

    imagenPerfil:
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/Painting_of_David_Hume.jpg",

    biografia:
      "David Hume fue un filósofo, historiador y ensayista escocés, considerado uno de los máximos representantes del empirismo. Defendió que el conocimiento humano se origina en la experiencia y desarrolló una profunda crítica a conceptos como la causalidad, el yo y la posibilidad de alcanzar certezas absolutas.",

    frase:
      "La costumbre es la gran guía de la vida humana.",

    seguidores: "1,711",

    seguidos: "1,776",

    historias: [
      {
        titulo: "Infancia",
        imagen:
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      },
      {
        titulo: "Experiencia",
        imagen:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      },
      {
        titulo: "Causalidad",
        imagen:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a",
      },
      {
        titulo: "Obras",
        imagen:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
      },
      {
        titulo: "Ideas",
        imagen:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      },
    ],

    publicaciones: [
      {
        id: 1,
        titulo: "Nacimiento de David Hume",
        fecha: "1711",
        imagen:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        descripcion:
          "David Hume nació el 7 de mayo de 1711 en Edimburgo, Escocia. Creció en una familia de tradición jurídica y recibió una educación que lo acercó desde joven a la filosofía, la literatura y la historia.",
      },

      {
        id: 2,
        titulo: "Su formación",
        fecha: "Década de 1720",
        imagen:
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
        descripcion:
          "Hume estudió en la Universidad de Edimburgo desde muy joven. Aunque inicialmente se esperaba que siguiera una carrera relacionada con el derecho, desarrolló un fuerte interés por la filosofía y comenzó a cuestionar muchas ideas tradicionales.",
      },

      {
        id: 3,
        titulo: "La experiencia como origen del conocimiento",
        fecha: "Empirismo",
        imagen:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
        descripcion:
          "Hume sostuvo que todo conocimiento comienza en la experiencia. Para él, las ideas que aparecen en nuestra mente proceden de impresiones previas obtenidas mediante los sentidos o la experiencia interna.",
      },

      {
        id: 4,
        titulo: "Impresiones e ideas",
        fecha: "Teoría del conocimiento",
        imagen:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        descripcion:
          "Hume distinguió entre impresiones e ideas. Las impresiones son experiencias vivas e inmediatas, como ver un color o sentir dolor. Las ideas son recuerdos o representaciones menos intensas de esas impresiones.",
      },

      {
        id: 5,
        titulo: "Tratado de la naturaleza humana",
        fecha: "1739-1740",
        imagen:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
        descripcion:
          "Hume publicó su Tratado de la naturaleza humana entre 1739 y 1740. En esta obra intentó aplicar un método basado en la experiencia al estudio de la mente humana, las emociones, el conocimiento y la moral.",
      },

      {
        id: 6,
        titulo: "El problema de la causalidad",
        fecha: "Causa y efecto",
        imagen:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a",
        descripcion:
          "Hume cuestionó que podamos observar directamente una conexión necesaria entre causa y efecto. Cuando vemos que un acontecimiento sigue repetidamente a otro, desarrollamos la expectativa de que volverá a ocurrir, pero esa expectativa proviene del hábito.",
      },

      {
        id: 7,
        titulo: "La costumbre",
        fecha: "Hábito",
        imagen:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
        descripcion:
          "Para Hume, muchas de nuestras creencias sobre el mundo dependen de la costumbre. Esperamos que el futuro se parezca al pasado porque hemos observado regularidades, no porque podamos demostrar racionalmente que siempre será así.",
      },

      {
        id: 8,
        titulo: "El problema de la inducción",
        fecha: "Epistemología",
        imagen:
          "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
        descripcion:
          "Hume mostró que no existe una justificación puramente lógica para afirmar que los patrones observados en el pasado necesariamente continuarán en el futuro. Este problema se conoce como el problema de la inducción.",
      },

      {
        id: 9,
        titulo: "El yo como conjunto de percepciones",
        fecha: "Identidad personal",
        imagen:
          "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",
        descripcion:
          "Hume sostuvo que cuando buscamos un yo permanente encontramos únicamente una sucesión de percepciones, pensamientos, sentimientos y recuerdos. Por ello describió al yo como un conjunto o haz de percepciones.",
      },

      {
        id: 10,
        titulo: "Investigación sobre el entendimiento humano",
        fecha: "1748",
        imagen:
          "https://images.unsplash.com/photo-1532012197267-da84d127e765",
        descripcion:
          "En 1748 Hume publicó la Investigación sobre el entendimiento humano. En esta obra presentó de forma más accesible muchas de sus ideas sobre la experiencia, la causalidad, el conocimiento y los límites de la razón.",
      },

      {
        id: 11,
        titulo: "Razón y emociones",
        fecha: "Filosofía moral",
        imagen:
          "https://images.unsplash.com/photo-1490730141103-6cac27aaab94",
        descripcion:
          "Hume consideraba que las emociones desempeñan un papel central en la conducta humana. La razón puede ayudarnos a conocer los hechos, pero nuestras motivaciones y decisiones están estrechamente relacionadas con los sentimientos.",
      },

      {
        id: 12,
        titulo: "La moral y el sentimiento",
        fecha: "Ética",
        imagen:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        descripcion:
          "Hume defendió que nuestros juicios morales no proceden únicamente de la razón. También dependen de sentimientos como la simpatía, la aprobación y el rechazo hacia determinadas acciones.",
      },

      {
        id: 13,
        titulo: "Crítica a los milagros",
        fecha: "Filosofía de la religión",
        imagen:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a",
        descripcion:
          "Hume analizó críticamente los testimonios sobre milagros. Consideraba que, para aceptar un acontecimiento extraordinario, la evidencia debía ser suficientemente fuerte como para superar nuestra experiencia regular de cómo funciona la naturaleza.",
      },

      {
        id: 14,
        titulo: "Hume como historiador",
        fecha: "1754-1762",
        imagen:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
        descripcion:
          "Además de filósofo, Hume fue un reconocido historiador. Publicó una extensa Historia de Inglaterra que alcanzó gran popularidad y durante un tiempo fue una de sus obras más conocidas.",
      },

      {
        id: 15,
        titulo: "Su muerte y legado",
        fecha: "1776",
        imagen:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        descripcion:
          "David Hume murió el 25 de agosto de 1776 en Edimburgo. Su pensamiento influyó profundamente en la filosofía moderna, especialmente en la teoría del conocimiento, la ciencia, la ética y autores posteriores como Immanuel Kant.",
      },
    ],
  },
];

export function obtenerFilosofo(slug: string) {
  return filosofos.find((filosofo) => filosofo.slug === slug);
}