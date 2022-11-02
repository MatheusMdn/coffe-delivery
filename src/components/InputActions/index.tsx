import { InputActionsContainer, IconWrapper } from "./styles";
import { Minus, Plus } from "phosphor-react";

interface InputActionsProps {
  size?: "medium" | "small",
  onIncrement: () => void;
  onDecrement: () => void;
  amount: number;
}


export function InputActions({ onIncrement, onDecrement, amount, size = "medium" }: InputActionsProps) {
  return (
    <InputActionsContainer size={size}>
      <IconWrapper disabled={amount <= 1} onClick={onDecrement}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={amount} />
      <IconWrapper onClick={onIncrement}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </InputActionsContainer>
  )
}