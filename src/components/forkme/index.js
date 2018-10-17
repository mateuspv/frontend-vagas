import React from 'react';
import style from 'styled-components';

import octodex from '../../assets/icon-octodex.svg'

const Link = style.a`
  position: absolute;
  right: 0;
`

const title = "forke me on github";

export default () => (
  <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
    <img src={octodex} alt={title} title={title} />
  </Link>
)