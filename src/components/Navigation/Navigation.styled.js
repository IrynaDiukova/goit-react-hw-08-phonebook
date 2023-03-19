import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  font-size: 1.1rem;
  letter-spacing: 3px;
  font-weight: bolder;
  font-style: italic;
  color: white;

  &.active {
    color: purple;
  }
`;
