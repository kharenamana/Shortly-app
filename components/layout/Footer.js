import Image from 'next/image';
import Link from 'next/link';
import logoFacebook from '../../public/icon-facebook.svg';
import logoInstagram from '../../public/icon-instagram.svg';
import logoPinterest from '../../public/icon-pinterest.svg';
import logoTwitter from '../../public/icon-twitter.svg';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #232127;
`;

const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0auto;
`;

const FooterCoWrapper = styled.div`
  margin-right: 100px;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (min-width: 820px) {
    flex-direction: column;
  }
`;

const FooterCompName = styled.h1`
  font-size: 40px;
  color: white;
  font-weight: bold;
`;

const FooterSocSites = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  cursor: pointer;
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinkTitles = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

const Footerlink = styled.p`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: cyan;
    transition: 0.3s ease-out;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterCoWrapper>
            <FooterCompName>Shortly</FooterCompName>
            <FooterSocSites>
              <Link href="/" passHref>
                <Image
                  src={logoFacebook}
                  alt="facebook-logo"
                  width={30}
                  height={30}
                  layout="fixed"
                />
              </Link>
              <Link href="/" passHref>
                <Image
                  src={logoTwitter}
                  alt="twitter-logo"
                  width={30}
                  height={30}
                  layout="fixed"
                />
              </Link>
              <Link href="/" passHref>
                <Image
                  src={logoPinterest}
                  alt="pinterest-logo"
                  width={30}
                  height={30}
                  layout="fixed"
                />
              </Link>
              <Link href="/" passHref>
                <Image
                  src={logoInstagram}
                  alt="instagram-logo"
                  width={30}
                  height={30}
                  layout="fixed"
                />
              </Link>
            </FooterSocSites>
          </FooterCoWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitles>Features</FooterLinkTitles>
              <Footerlink>Link Shortening</Footerlink>
              <Footerlink>Branded links</Footerlink>
              <Footerlink>Analytics</Footerlink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitles>Resources</FooterLinkTitles>
              <Footerlink>Blog</Footerlink>
              <Footerlink>Developers</Footerlink>
              <Footerlink>Support</Footerlink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitles>Company</FooterLinkTitles>
              <Footerlink>About</Footerlink>
              <Footerlink>Our Team</Footerlink>
              <Footerlink>Careers</Footerlink>
              <Footerlink>Contact</Footerlink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
