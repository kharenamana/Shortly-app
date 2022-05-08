import styled from "styled-components";
import { useState } from 'react';

const MultiLinks = styled.div`
  display: flex;
  width: 65%;
  margin: 10px auto;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  height: 60px;
  border-radius: 10px;
  background-color: whitesmoke;
  text-indent: 20px;
`;

const OriginalLink = styled.div`
  display: flex;
`;

const ShortenedLink = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Button = styled.button`
  margin: 20px;
  height: 40px;
  width: 70px;
  border-radius: 6px;
  border-style: none;
  background-color: ${(props => props.theme.palette.primary.cyan)};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
    transition: 0.3s ease-out;
  }
`;


const LinkOptions = () => {

  const [primary, setPrimary] = useState(false)

  
  return (
    <MultiLinks>
      <OriginalLink>
        Complete link
      </OriginalLink>
      <ShortenedLink>
        <p>Shortened Link</p>
        <Button>Copy</Button>
      </ShortenedLink>
    </MultiLinks>
  )
}

export default LinkOptions