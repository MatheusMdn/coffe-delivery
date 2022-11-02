
import { RegularText, TytleText } from '../../../../components/Typografy';
import { CoffeCardContainer, Tags, Title, Description, CardFooter, CoffeActions } from './styles';
import { ShoppingCart } from "phosphor-react";
import { InputActions } from '../../../../components/InputActions';
import { formatPrice } from '../../../../utils/formatPrice';
import { useCart } from '../../../../hooks/useCart';
import { useState } from 'react';

export interface Coffe {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeProps {
  coffe: Coffe;
}

export function CoffeCard({ coffe }: CoffeProps) {
  const [amount, setAmount] = useState(1);

  function handleIncrement() {
    setAmount(state => state + 1)
  }

  function handleDecrement() {
    setAmount(state => state - 1)
  }
  const { addToCart } = useCart();
  const format = formatPrice(coffe.price)

  function handleAddToCart() {
    const coffeToAdd = {
      ...coffe,
      amount
    }

    addToCart(coffeToAdd)
  }


  return (
    <CoffeCardContainer>
      <img src={`/coffes/${coffe.photo}`} />
      <Tags>
        {coffe.tags.map(tag => (
          <span key={`${coffe.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Title>{coffe.name}</Title>
      <Description>{coffe.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TytleText size='m' color="text" as="strong">{format}</TytleText>
        </div>

        <CoffeActions>
          <InputActions
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            amount={amount}
          />
          <button onClick={handleAddToCart} >
            <ShoppingCart weight="fill" size={22} />
          </button>
        </CoffeActions>


      </CardFooter>

    </CoffeCardContainer>
  )
}