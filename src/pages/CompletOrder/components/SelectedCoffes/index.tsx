import { TytleText } from "../../../../components/Typografy";
import { useCart } from "../../../../hooks/useCart";
import { CoffeCard } from "../CoffeCard";
import { ConfirmationSelections } from "./ConfirmationSelections";
import { SelectedCoffesContainer, DetailsContainer } from "./styles";

export function SelectedCoffes() {
  const { cartItems } = useCart()
  return (
    <SelectedCoffesContainer>
      <TytleText size="xs" color="subtitle">Cafés selecionados</TytleText>

      <DetailsContainer>
        {cartItems.map(coffe => (
          <CoffeCard key={coffe.id} coffe={coffe} />

        ))}


        <ConfirmationSelections />
      </DetailsContainer>
    </SelectedCoffesContainer>
  )
}