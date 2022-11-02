import { InputActions } from "../../../../components/InputActions";
import { RegularText } from "../../../../components/Typografy";
import { CoffeCardContainer, ActionsContainer, RemoveButton } from "./styles";
import { Trash } from 'phosphor-react';
import { CartItem } from '../../../../context/CartContext';
import { formatPrice } from "../../../../utils/formatPrice";
import { useCart } from "../../../../hooks/useCart";

interface CoffeCardProps {
  coffe: CartItem;
}

export function CoffeCard({ coffe }: CoffeCardProps) {
  const { changeCartItemAmount, removeCartItem } = useCart();
  const total = coffe.price * coffe.amount;
  const formatedPrice = formatPrice(total)

  function handleIncrement() {
    changeCartItemAmount(coffe.id, 'increment')
  }

  function handleDecrement() {
    changeCartItemAmount(coffe.id, 'decrement')
  }

  function handleRemoveItem() {
    removeCartItem(coffe.id)
  }

  return (
    <CoffeCardContainer>
      <div>
        <img src={`/coffes/${coffe.photo}`} alt="" />
        <div>
          <RegularText color="subtitle">{coffe.name}</RegularText>
          <ActionsContainer>
            <InputActions
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              amount={coffe.amount}
              size="small" />
            <RemoveButton onClick={handleRemoveItem}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {formatedPrice}</p>
    </CoffeCardContainer>

  )
}