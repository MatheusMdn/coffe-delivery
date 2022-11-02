import { HeaderContainer, HeaderButtonsContainer, HeaderButton } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react';
import logoImg from '../../assets/logo.svg';
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartAmount } = useCart();
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoImg} alt="" />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <NavLink to='/completOrder'>
            <HeaderButton variant="yellow">
              {cartAmount >= 1 && <span>{cartAmount}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>

          </NavLink>

        </HeaderButtonsContainer>

      </div>

    </HeaderContainer>
  )
}