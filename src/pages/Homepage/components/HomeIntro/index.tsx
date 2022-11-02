import { RegularText } from "../../../../components/Typografy";
import { HomeIntroContainer, Content, IntroTitle, Benefits } from "./styles";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import coffeImg from '../../../../assets/coffe-intro.png'
import { TextIcon } from "../../../../components/TextIcon";
import { useTheme } from 'styled-components';

export function HomeIntro() {
  const { colors } = useTheme();

  return (
    <HomeIntroContainer>
      <Content className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText as="h3" size="l" color="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <Benefits>
            <TextIcon
              icon={<ShoppingCart weight='fill' />}
              bgcolor={colors["brand-yellow-dark"]}
              text="Compra simples e segura"
            />
            <TextIcon
              icon={<Package weight='fill' />}
              bgcolor={colors["base-text"]}
              text="Embalagem mantém o café intacto"
            />
            <TextIcon
              icon={<Timer weight='fill' />}
              bgcolor={colors["brand-yellow"]}
              text="Entrega rápida e rastreada"
            />
            <TextIcon
              icon={<Coffee weight='fill' />}
              bgcolor={colors["brand-purple"]}
              text="O café chega fresquinho até você"
            />
          </Benefits>

        </div>
        <img src={coffeImg} alt="Imagem ilustrativa de um copo de cafe" />
      </Content>
    </HomeIntroContainer>
  )
}