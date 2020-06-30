import React from 'react';

import {ReactComponent as ReactMap} from '../../assets/map.svg';

import { Container } from './styles';

const Map = ({ onClick }) => {
  return (
    <Container>
      <ReactMap onClickCapture={onClick} />
    </Container>
  );
}

export default Map;