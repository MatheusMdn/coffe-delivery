import { ReactNode } from "react";
import { TextIconContainer, IconContainer } from "./styles"

interface TextIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  bgcolor: string
}

export function TextIcon({ icon, text, bgcolor }: TextIconProps) {
  return (
    <TextIconContainer>
      <IconContainer bgcolor={bgcolor}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </TextIconContainer>
  )
}