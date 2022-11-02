import { CompletOrderContainer } from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CompletOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffes } from "./components/SelectedCoffes";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money'
}

const zodSchemeValidation = z.object({
  cep: z.string().min(1, "Informe o CEP"),
  street: z.string().min(1, "Informe o Rua"),
  number: z.string().min(1, "Informe o Número"),
  complement: z.string(),
  district: z.string().min(1, "Informe o Bairro"),
  city: z.string().min(1, "Informe a Cidade"),
  uf: z.string().min(1, "Informe a UF"),
  paymentMethod: z.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
})

export type OrderData = z.infer<typeof zodSchemeValidation>

type ConfirmOrderFormData = OrderData;

export function CompletOrder() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(zodSchemeValidation),
    defaultValues: {
      paymentMethod: undefined
    }
  })

  const { cleanCart } = useCart();
  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/orderConfirmated", {
      state: data
    });
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompletOrderContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompletOrderForm />
        <SelectedCoffes />
      </CompletOrderContainer>
    </FormProvider>

  )
}