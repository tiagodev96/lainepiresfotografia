// Essays
import { EliEssayData, EliBeachEssayData } from "./essays/EliEssayData";
import { GiselleEssayData } from "./essays/GiselleEssayData";
import { SimoneEssayData } from "./essays/SimoneEssayData";
import { JacquelineEssayData } from "./essays/JacquelineEssayData";
import { TalitaEssayData, TalitaFonoEssayData } from "./essays/TalitaEssayData";
import { NougConvidaEssayData } from "./essays/NougConvidaEssayData";
import { RenataEssayData } from "./essays/RenataEssayData";
import { EvaniEssayData } from "./essays/EvaniEssayData";
import { RisaRiosEssayData } from "./essays/RisaRiosEssayData";
import { LarissaEssayData } from "./essays/LarissaEssayData";
import { ThacioEssayData } from "./essays/ThacioEssayData";
import { LuizaEssayData } from "./essays/LuizaEssayData";
import { MariaEssayData } from "./essays/MariaEssayData";
import { AliceEssayData } from "./essays/AliceEssayData";

const categories = {
  corporate: "Corporativas",
  females: "Ensaios Femininos",
  events: "Eventos",
};

export const dataBase = [
  {
    id: 16,
    src: AliceEssayData[4].original,
    category: categories.females,
    description: "Ensaio Alice",
    images: AliceEssayData,
  },
  {
    id: 15,
    src: MariaEssayData[0].original,
    category: categories.corporate,
    description: "Psicológa - Maria Clara",
    images: MariaEssayData,
  },
  {
    id: 14,
    src: LuizaEssayData[17].original,
    category: categories.corporate,
    description: "Cirurgiã Vascular - Luiza Tavares",
    images: LuizaEssayData,
  },
  {
    id: 13,
    src: ThacioEssayData[9].original,
    category: categories.corporate,
    description: "Cirurgião - Thacio Ferreira",
    images: ThacioEssayData,
  },
  {
    id: 12,
    src: EliBeachEssayData[1].original,
    category: categories.females,
    description: "Ensaio Eli Padilha",
    images: EliBeachEssayData,
  },
  {
    id: 11,
    src: LarissaEssayData[0].original,
    category: categories.corporate,
    description: "Dermatologista - Larissa Carvalho",
    images: LarissaEssayData,
  },
  {
    id: 10,
    src: RisaRiosEssayData[0].original,
    category: categories.events,
    description: "Risa Rios Concept",
    images: RisaRiosEssayData,
  },
  {
    id: 9,
    src: EvaniEssayData[4].original,
    category: categories.corporate,
    description: "Modelo - Évani Oliveira",
    images: EvaniEssayData,
  },
  {
    id: 8,
    src: EliEssayData[17].original,
    category: categories.corporate,
    description: "Consultora de Imagem - Eli Padilha",
    images: EliEssayData,
  },
  {
    id: 7,
    src: GiselleEssayData[0].original,
    category: categories.corporate,
    description: "Maquiadora - Giselle Santos",
    images: GiselleEssayData,
  },
  {
    id: 6,
    src: SimoneEssayData[0].original,
    category: categories.corporate,
    description: "Corretora de Imóveis - Simone Leal",
    images: SimoneEssayData,
  },
  {
    id: 5,
    src: JacquelineEssayData[0].original,
    category: categories.females,
    description: "Ensaio Ramore",
    images: JacquelineEssayData,
  },
  {
    id: 4,
    src: TalitaEssayData[0].original,
    category: categories.females,
    description: "Aniversário - Talita Oliveira",
    images: TalitaEssayData,
  },
  {
    id: 3,
    src: NougConvidaEssayData[0].original,
    category: categories.events,
    description: "Noug Convida",
    images: NougConvidaEssayData,
  },
  {
    id: 2,
    src: RenataEssayData[0].original,
    category: categories.females,
    description: "Bebê a bordo - Renata Batista",
    images: RenataEssayData,
  },
  {
    id: 1,
    src: TalitaFonoEssayData[4].original,
    category: categories.corporate,
    description: "Fonoaudióloga - Talita Oliveira",
    images: TalitaFonoEssayData,
  },
];
