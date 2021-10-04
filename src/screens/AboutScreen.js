import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native'
import { FontAwesome, AntDesign, Zocial } from '@expo/vector-icons'
import Background from '../components/Background'
import Button from '../components/Button'
export default function AboutScreen({ navigation }) {
  return (
    <Background>
      <View style={styles.identityContainer}>
        <View styles={styles.container}>
          <View
            style={{ flexDirection: 'row', padding: 20, alignItems: 'center' }}
          >
            <TouchableOpacity
              mode="contained"
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Home' }],
                })
              }
            >
              <Image
                resizeMode="contain"
                style={{ height: 20, width: 20 }}
                source={require('../images/exit.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.header}>About Me</Text>
          <View style={styles.profilePicture}>
            <FontAwesome name="user-circle" size={150} color="black" />
          </View>
          <Text style={styles.name}>Ryan Reliovani</Text>
          <Text style={styles.job}>Software Developer</Text>
        </View>
        <View style={styles.portofolio}>
          <Text style={styles.portofolioTitle}> Portofolio</Text>
          <View style={styles.portofolioContent}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://github.com/ReilAvion')
              }}
            >
              <AntDesign name="github" size={50} color="black">
                <Text style={styles.textContent}> @reilavion</Text>
              </AntDesign>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contact}>
          <Text style={styles.contactTitle}> Contact</Text>
          <View style={styles.contactContent}>
            <FontAwesome name="whatsapp" size={40} color="black">
              <Text style={styles.textContent}> +62821-2047-3321 </Text>
            </FontAwesome>
            <Text>{'\n'}</Text>
            <Zocial name="gmail" size={35} color="black">
              <Text style={styles.textContent}> reliovani@gmail.com </Text>
            </Zocial>
          </View>
        </View>
        <Button
          mode="contained"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'StartScreen' }],
            })
          }
        >
          Logout
        </Button>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  identityContainer: {
    marginTop: 50,
    justifyContent: 'center',
  },
  header: {
    alignSelf: 'center',
    fontSize: 24,
    marginBottom: 10,
  },
  profilePicture: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  name: {
    alignSelf: 'center',
    fontSize: 24,
    marginBottom: 10,
  },
  job: {
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  portofolio: {
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  portofolioTitle: {
    fontSize: 18,
    backgroundColor: '#6495ed',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderRadius: 30,
  },
  portofolioContent: {
    flexDirection: 'row',
  },
  contact: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  contactTitle: {
    fontSize: 18,
    backgroundColor: '#6495ed',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderRadius: 30,
  },
  contactContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textContent: {
    fontSize: 26,
  },
})
