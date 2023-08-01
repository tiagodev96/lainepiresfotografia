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
    description: "Retrô",
    images: AliceEssayData,
  },
  {
    id: 15,
    src: MariaEssayData[0].original,
    category: categories.corporate,
    description: "Psicológa",
    images: MariaEssayData,
  },
  {
    id: 14,
    src: LuizaEssayData[17].original,
    category: categories.corporate,
    description: "Cirurgiã Vascular",
    images: LuizaEssayData,
  },
  {
    id: 13,
    src: ThacioEssayData[9].original,
    category: categories.corporate,
    description: "Médico",
    images: ThacioEssayData,
  },
  {
    id: 12,
    src: EliBeachEssayData[1].original,
    category: categories.females,
    description: "Praia",
    images: EliBeachEssayData,
  },
  {
    id: 11,
    src: LarissaEssayData[0].original,
    category: categories.corporate,
    description: "Dermatologista",
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
    description: "Modelo",
    images: EvaniEssayData,
  },
  {
    id: 8,
    src: EliEssayData[17].original,
    category: categories.corporate,
    description: "Consultora de Imagem",
    images: EliEssayData,
  },
  {
    id: 7,
    src: GiselleEssayData[0].original,
    category: categories.corporate,
    description: "Maquiadora",
    images: GiselleEssayData,
  },
  {
    id: 6,
    src: SimoneEssayData[0].original,
    category: categories.corporate,
    description: "Corretora de Imóveis",
    images: SimoneEssayData,
  },
  {
    id: 5,
    src: JacquelineEssayData[0].original,
    category: categories.females,
    description: "Home",
    images: JacquelineEssayData,
  },
  {
    id: 4,
    src: TalitaEssayData[0].original,
    category: categories.females,
    description: "Aniversário",
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
    description: "Bebê a bordo",
    images: RenataEssayData,
  },
  {
    id: 1,
    src: TalitaFonoEssayData[4].original,
    category: categories.corporate,
    description: "Fonoaudióloga",
    images: TalitaFonoEssayData,
  },
];
