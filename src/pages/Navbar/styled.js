import { FaBars } from 'react-icons/fa'

import styled from 'styled-components'

export const Nav = styled.nav`
  background: #4caf50;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`
export const NavLogo = styled.div`
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
  margin: 1rem;
`

export const Button = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    color: black;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
