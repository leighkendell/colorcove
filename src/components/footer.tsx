import React from 'react';
import styled from 'styled-components';
import { spacing, fontSize, breakpoint } from '../utils/style-helpers';
import { Link } from 'gatsby';
import { ReactComponent as Logo } from '../images/colorcove-logo-solid.svg';
import { ReactComponent as VimeoLogo } from '../images/vimeo.svg';
import { ReactComponent as FacebookLogo } from '../images/facebook.svg';
import { ReactComponent as InstagramLogo } from '../images/instagram.svg';

interface Props {
  items: {
    title: string;
    link: string;
  }[];
}

const StyledFooter = styled.footer`
  padding: ${spacing(3)};
  color: ${props => props.theme.colorWhite};
  background-color: ${props => props.theme.colorBlack};

  ${breakpoint('medium')} {
    padding: ${spacing(4)};
  }

  ${breakpoint('large')} {
    padding: ${spacing(8)};
  }

  svg {
    * {
      fill: ${props => props.theme.colorWhite};
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${spacing(2)};
  justify-content: center;
  text-align: center;

  ${breakpoint('small')} {
    grid-template-areas:
      'top-left top-right'
      'bottom-left bottom-right';
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    text-align: left;

    > * {
      /* Logo */
      &:nth-child(1) {
        grid-area: top-left;
        justify-self: start;
      }

      /* Copy */
      &:nth-child(2) {
        grid-area: bottom-left;
      }

      /* Links */
      &:nth-child(3) {
        grid-area: top-right;
        justify-self: right;
      }

      /* Social */
      &:nth-child(4) {
        grid-area: bottom-right;
        justify-self: right;
      }
    }
  }
`;

const StyledLogo = styled(Logo)`
  display: block;
  justify-self: center;
  width: auto;
  height: ${spacing(3)};
`;

const Copy = styled.small`
  ${fontSize(14, 3)};
`;

const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;

  ${breakpoint('small')} {
    display: grid;
    grid-auto-flow: column;
    grid-gap: ${spacing(3)};
  }
`;

const LinkListItem = styled.li`
  margin: 0 ${spacing(1.5)};

  ${breakpoint('small')} {
    margin: 0;
  }
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colorWhite};
  text-decoration: none;
  ${fontSize(14, 3)};
`;

const LogoLink = styled.a`
  display: block;

  svg {
    display: block;
    width: ${spacing(3)};
    height: ${spacing(3)};
  }
`;

const Footer: React.FC<Props> = ({ items }) => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <Wrapper>
        <StyledLogo role="img" />
        <Copy>&copy; {currentYear} Colorcove</Copy>
        <LinkList>
          {items.map(item => (
            <LinkListItem>
              <StyledLink to={item.link}>{item.title}</StyledLink>
            </LinkListItem>
          ))}
        </LinkList>
        <LinkList>
          <LinkListItem>
            <LogoLink href="https://vimeo.com/drewkendell">
              <VimeoLogo />
            </LogoLink>
          </LinkListItem>
          <LinkListItem>
            <LogoLink href="https://www.instagram.com/dk_filmmaker">
              <InstagramLogo />
            </LogoLink>
          </LinkListItem>
          <LinkListItem>
            <LogoLink href="https://www.facebook.com/dkfilmmaker">
              <FacebookLogo />
            </LogoLink>
          </LinkListItem>
        </LinkList>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
