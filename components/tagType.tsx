import { Children, useEffect, useState } from 'react'
import {Container} from '../styles/components/tagType'
interface tagProps {
  color?: string
  children?: any
}

export default function tagType ({children, color }:tagProps) {
  
  return (
    <Container color={color}>
      {children}
    </Container>
  )
}