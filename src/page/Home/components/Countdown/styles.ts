import styled from "styled-components";

export const CountdownCotainer = styled.div`
  font-family: "Roboto Mono" monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(prosp) => prosp.theme["gray-100"]};

  display: flex;
  gap: 1rem;

  span {
    background-color: ${(prosp) => prosp.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(prosp) => prosp.theme["green-700"]};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;