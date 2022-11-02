import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodInput } from "../PaymentMethodsInput";
import { PaymentMethodContainer } from "./styles";
import { useFormContext } from "react-hook-form";
import { RegularText } from "../../../../components/Typografy";



export const paymentMethods = {
  credit: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={16} />
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />
  }
}


export function PaymentMethods() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <PaymentMethodContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          icon={icon}
          id={key}
          label={label}
          value={key}
          key={label}
          {...register("paymentMethod")}
        />
      ))}

      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}

    </PaymentMethodContainer>
  );
}