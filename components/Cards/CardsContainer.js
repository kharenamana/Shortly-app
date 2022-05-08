import Cards from "./Cards"
import styled from 'styled-components'

const CardsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 4;
  padding: 20px 70px;
  margin: 40px 0px;
`;



const CardsContainer = () => {
  return (
    <CardsBox>
      <Cards />
      <Cards />
      <Cards />
    </CardsBox>
  )
}

export default CardsContainer