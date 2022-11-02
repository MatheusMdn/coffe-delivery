import { TytleText } from "../../../../components/Typografy";
import { SectionTitle } from "../SectionTitle";
import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { CompletOrderFormContainer, FormContainer } from "./styles";
import { useTheme } from 'styled-components';
import { AddressForm } from "./AddressForm";
import { PaymentMethods } from "./PaymentMethods";


export function CompletOrderForm() {
  const { colors } = useTheme();

  return (
    <CompletOrderFormContainer>
      <TytleText size="xs" color="subtitle">Complete seu pedido</TytleText>

      <FormContainer>
        <SectionTitle
          icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />}
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
        />
        <AddressForm />
      </FormContainer>
      <FormContainer>
        <SectionTitle
          icon={<CurrencyDollar color={colors["brand-purple"]} size={22} />}
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"

        />

        <PaymentMethods />
      </FormContainer>
    </CompletOrderFormContainer>

  )
}