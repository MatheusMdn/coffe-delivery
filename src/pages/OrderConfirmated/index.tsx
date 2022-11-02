import { TytleText, RegularText } from "../../components/Typografy";
import { OrderConfirmatedContainer, OrderDetailsContainer } from "./styles";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";

import confirmatedOrderImg from '../../assets/confirmatedOrder.svg'
import { TextIcon } from "../../components/TextIcon";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompletOrder";
import { paymentMethods } from "../CompletOrder/components/CompleteOrderForm/PaymentMethods";
import { useEffect } from "react";

interface LocationType {
  state: OrderData;
}

export function OrderConfirmatedPage() {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate("/")
    }
  }, [])

  if (!state) return <></>


  return (
    <OrderConfirmatedContainer className="container">
      <div>
        <TytleText size="l">Uhu! Pedido confirmado</TytleText>
        <RegularText size="l" color="subtitle">Agora é so aguardar que logo o café chegará até você</RegularText>
      </div>
      <section>
        <OrderDetailsContainer>
          <TextIcon
            icon={<MapPin weight="fill" />}
            bgcolor={colors["brand-purple"]}
            text={
              <RegularText size="l" color="subtitle">
                Entrega em <strong>{state.street}, {state.number} </strong><br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />
          <TextIcon
            icon={<Clock weight="fill" />}
            bgcolor={colors["brand-yellow"]}
            text={
              <RegularText size="l" color="subtitle">
                Previsão de entrega <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <TextIcon
            icon={<CurrencyDollar weight="fill" />}
            bgcolor={colors["brand-yellow-dark"]}
            text={
              <RegularText size="l" color="subtitle">
                Pagamento na entrega <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>

              </RegularText>
            }
          />
        </OrderDetailsContainer>


        <img src={confirmatedOrderImg} />
      </section>
    </OrderConfirmatedContainer>

  )
}