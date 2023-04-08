import { View, Image, StyleSheet } from "react-native"

const logoImage = require('./../../../assets/images/logoLight.png');

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 37
  }
})

const Logo = () => {
  return (
    <View>
      <Image 
        style={styles.logo}
        source={logoImage} />
    </View>
  )
}

export default Logo