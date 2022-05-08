import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const StyledLink = styled.a`
  padding-left: 2rem;
  color: #bfbfbf;
  font-size: 20px;
  :hover{
    color: black;
  }
`;
const HomeButton = styled.a`
  padding-left: 10rem;
  font-size: 30px;
  font-weight: 700;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href="/" passHref>
          <HomeButton>Shortly</HomeButton>
        </Link>
      </div>
      <div>
        <Link href="/" passHref>
          <StyledLink>Features</StyledLink>
        </Link>
        <Link href="/" passHref>
          <StyledLink>Pricing</StyledLink>
        </Link>
        <Link href="/" passHref>
          <StyledLink>Resources</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
