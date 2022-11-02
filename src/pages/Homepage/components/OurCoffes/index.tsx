import { TytleText } from "../../../../components/Typografy";
import { CoffeCard } from "../CoffeCard";
import { OurCoffesContainer, CoffeList } from "./styles";
import { coffees } from '../../../../data/coffes';


export function OurCoffes() {
  return (
    <OurCoffesContainer className="container">
      <TytleText size="l" color="subtitle">
        Nossos Cafés
      </TytleText>

      <CoffeList>
        {coffees.map(coffe => (
          <CoffeCard key={coffe.id} coffe={coffe} />

        ))}
      </CoffeList>

    </OurCoffesContainer>
  )
}