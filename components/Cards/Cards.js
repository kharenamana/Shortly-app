import Image from 'next/image';
import brandIcon from '../../public/icon-brand-recognition.svg';
import styled from 'styled-components'

const Card = styled.div`
  background-color: #bfbfbf;
  box-sizing: border-box;
  display: block;
  height: 250px;
  width: 350px;
  padding: 10px;
`;

const imageWrapper = {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  width: '80px',
  height: '80px',
  backgroundColor: '#232127',
  position: 'relative',
  top: '-50px',
  left: '15px'
};

const contentwrap = {
  position: 'relative',
  top: '-30px',
  margin: '10px'
};

const Cards = () => {
  return (
    <>
    <Card>
      <div style={imageWrapper}>
        <Image style={{objecFit: 'fill'}} src={brandIcon} alt="Brand Icon" />
      </div>
      <div style={contentwrap}>
      <h2 style={{margin: '5px 0px'}}>Brand Recognition</h2>
      <p style={{marginTop: '15px'}}>
        Boost your brand recognition with each click. Generic links don&apos;t
        mean a thing. Branded links help instil confidence in your content.
      </p>
      </div>
    </Card>
    </>
  );
};

export default Cards;
