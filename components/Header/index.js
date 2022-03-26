import { View, Text ,Image } from 'react-native'
import React from 'react'
import styles from './styles'
const logo = require('../../assets/logo.png')
const menuImage = require('../../assets/menu.png')

const Header = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Image style={styles.menu} source={menuImage} />
    </View>
  )
}

export default Header ;