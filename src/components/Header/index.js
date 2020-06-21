import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import home from '../../assets/company.svg'
import compareDate from '../../assets/compare.svg'
import singleDate from '../../assets/market.svg'

const Header = () => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={home} alt="Home Page" />
        </Link>

        <Link to="/compareDate">
          <img src={compareDate} alt="Comparação de Datas" />
        </Link>
        
        <Link to="/singleDate">
          <img src={singleDate} alt="Informações do Estado" />
        </Link>
      </Content>
    </Container>
  );
}

export default Header;
