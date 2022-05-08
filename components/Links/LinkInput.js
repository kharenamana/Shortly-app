import LinkOptions from './LinkOptions';
import image from '../../public/Meteor.svg';
import styled from 'styled-components';

const Button = styled.button`
  height: 60px;
  width: 150px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  background-color: ${(props => props.theme.palette.primary.cyan)};
  margin-left: 40px;
  border-radius: 8px;
  border-style: none;
  cursor: pointer;

  :hover {
    background-color: lightblue;
  }
`;

const linkContainer = {
  margin: 'auto',
  width: '70%',
  backgroundImage: 'url(/Meteor.svg)',
  backgroundSize: '100% 100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '120px',
};

const inputField = {
  height: '60px',
  width: '60%',
  fontSize: '20px',
  borderRadius: '8px',
  borderStyle: 'none',
  letterSpacing: '4px',
  textIndent: '10px',
};

export const LinkInput = () => {
  return (
    <>
      <div style={linkContainer}>
        <input
          style={inputField}
          type="text"
          placeholder="Shorten a link here... "
        ></input>
        <Button>Shorten It!</Button>
      </div>
      <LinkOptions />
      <LinkOptions />
      <LinkOptions />
    </>
  );
};
