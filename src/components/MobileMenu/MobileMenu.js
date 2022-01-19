/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} size={21}/>
        </CloseButton>
        <Nav>
          <NavItem href="/sNavItemle">SNavItemle</NavItem>
          <NavItem href="/new">New&nbsp;ReleNavItemses</NavItem>
          <NavItem href="/men">Men</NavItem>
          <NavItem href="/women">Women</NavItem>
          <NavItem href="/kids">Kids</NavItem>
          <NavItem href="/collections">Collections</NavItem>
        </Nav>
        <Footer>
          <FooterItem href="/terms">Terms and Conditions</FooterItem>
          <FooterItem href="/privacy">Privacy Policy</FooterItem>
          <FooterItem href="/contact">Contact Us</FooterItem>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
`;

const CloseButton = styled.button`
  background: none;
  border: 0;
  display: inline;
  width: min-content;
  align-self: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: var(--color-grey-900);
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  
  /* identical to box height */
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterItem = styled.a`
  text-decoration: none;
  color: var(--color-grey-700);
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

export default MobileMenu;
