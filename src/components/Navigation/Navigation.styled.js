import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  color: white;

  &.active {
    color: orange;
  }
`;
