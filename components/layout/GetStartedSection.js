import styled from 'styled-components';

const linkContainer = {
  marginTop: '40px',
  width: '100%',
  backgroundImage: 'url(/Meteor.svg)',
  backgroundSize: '100% 100%',
  display: 'inline-block',
  color: 'white',
  padding: '40px 0px',
  height: '200px',
  textAlign: 'center',
};

const Button = styled.button`
  height: 40px;
  width: 150px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  background-color: ${(props => props.theme.palette.primary.cyan)};
  border-radius: 20px;
  border-style: none;
  cursor: pointer;

  :hover {
    background-color: lightblue;
  }
`;

const GetStartedSection = () => {
  return (
    <div style={linkContainer}>
      <h2>Boost your links today</h2>
      <Button>Get Started</Button>
    </div>
    
  )
}

export default GetStartedSection