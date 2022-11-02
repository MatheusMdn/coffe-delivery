import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme.colors["brand-yellow"]};
  color: ${(props) => props.theme.colors["base-white"]};
  font-size: ${(props) => props.theme.textSizes["components-button-g"]};
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.3rem;
  transition: 0.4s;
  margin-top: 0.7rem;

  &:disabled {
    filter: brightness(0.9);
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors["brand-yellow-dark"]};
  }
`;
