import styled, {css} from 'styled-components'
interface ContainerProps {
  color: string
}
export const Container = styled.div<ContainerProps>`
  padding: 0.3rem 0;
  font-size:18px;
  width:140px;
  border-radius: 10px;
  color:#FFF;
  text-align:center;
  text-transform: uppercase;
  
  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `}

`