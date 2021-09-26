import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

import Home from './Home'
export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Home />
    </Background>
  )
}
