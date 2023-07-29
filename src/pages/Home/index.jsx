import { HomeContainer } from "./styles";
import Banner from "../../components/Home/Banner";
import { GalleryResume } from "../../components/Home/GalleryResume";

const roles = ["Fotógrafa Profissional", "Editora de Fotos"];

export const Home = () => {
  return (
    <HomeContainer>
      <Banner roles={roles} />
      <GalleryResume />
    </HomeContainer>
  );
};
