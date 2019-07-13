import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

interface Props {
  to: string;
}

const commonStyles = css`
  color: ${props => props.theme.colorBlack};
  font-weight: bold;

  &:hover {
    text-decoration: none;
  }
`;

const StyledLink = styled(Link)`
  ${commonStyles}
`;

const StyledA = styled.a`
  ${commonStyles}
`;

const TextLink: React.FC<Props> = ({ children, to }) => {
  // Check for internal links
  const internal = /^\/(?!\/)/.test(to);

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return <StyledLink to={to}>{children}</StyledLink>;
  }
  return <StyledA href={to}>{children}</StyledA>;
};

export default TextLink;
