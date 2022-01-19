import React from 'react';
import styled from 'styled-components/macro';

import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <MobileNav>
            <NavItem>
              <Icon id="shopping-bag" strokeWidth={2} />
            </NavItem>
            <NavItem>
              <Icon id="search" strokeWidth={2} />
            </NavItem>
            <NavItem onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" strokeWidth={2} />
            </NavItem>
          </MobileNav>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-grey-300);

  @media ${props => props.theme.queries.tabletAndBelow} {
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(2vw, 2.2vw, 48px);
  margin: 0px 48px;

  @media ${props => props.theme.queries.tabletAndBelow} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;
  
  @media ${props => props.theme.queries.tabletAndBelow} {
    display: flex;
    justify-content: flex-end;
    gap: 5vw;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-grey-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const NavItem = styled.button`
  background: none;
  border: none;
`;

export default Header;
