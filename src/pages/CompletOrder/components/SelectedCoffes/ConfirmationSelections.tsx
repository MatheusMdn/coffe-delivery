import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typografy";
import { useCart } from "../../../../hooks/useCart";
import { formatPrice } from "../../../../utils/formatPrice";
import { ConfirmationSelectionsContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSelections() {
  const { cartTotal, cartAmount } = useCart();
  const totalcart = DELIVERY_PRICE + cartTotal;

  const formattedPrice = formatPrice(cartTotal)
  const formatedCartTotal = formatPrice(totalcart);
  const formatDeliveryPrice = formatPrice(DELIVERY_PRICE);

  return (
    <ConfirmationSelectionsContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText >R$ {formattedPrice}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formatDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" size="l" color="subtitle">Total</RegularText>
        <RegularText weight="700" size="l" color="subtitle">R$ {formatedCartTotal}</RegularText>
      </div>
      <Button type="submit" disabled={cartAmount <= 0} text="Confirmar Pedido" />
    </ConfirmationSelectionsContainer>
  )
}