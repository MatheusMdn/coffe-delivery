import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const SelectedCoffesContainer = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`;

export const ConfirmationSelectionsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
