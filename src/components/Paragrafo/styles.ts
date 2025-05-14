import styled from 'styled-components'

import { Theme } from '../../themes/light'

import { Props } from '.'

export const P = styled.p<Props>`
  font-size: 14px;
  color: ${(props) =>
    props.tipo === 'principal'
      ? (props.theme as Theme).corPrincipal
      : (props.theme as Theme).corSecundaria};
  line-height: 22px;
`
