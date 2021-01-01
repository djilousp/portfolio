import styled from "styled-components";

export const BaseLayout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-b etween;
  padding: 3rem 7rem;
  color: white;
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
