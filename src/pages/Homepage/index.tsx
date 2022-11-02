import { HomeIntro } from "./components/HomeIntro";
import { OurCoffes } from "./components/OurCoffes";
import { HomeContainer } from "./styles";


export function HomePage() {

  return (
    <HomeContainer>
      <HomeIntro />
      <OurCoffes />
    </HomeContainer>
  )
}