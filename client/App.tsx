import { View, Text } from 'react-native'
import React from 'react'
import TextFieldC from './src/components/TextFieldC'
import ButtonC from './src/components/ButtonC'
import ItemCard from './src/components/ItemCard'
import Navigations from './src/Navigation/Navigations'
import SignUpScreen from './src/screens/SignUpScreen'
import SignInScreen from './src/screens/SignInScreen'
import StackNavigation from './src/Navigation/StackNavigation'

const App = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1'
    }}>
      <StackNavigation />
      {/* <SignInScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <TextFieldC onChangeText={onChangeText} text={text} placeholder={'Enter your email address'} secureText={false}/>
      <ButtonC text={'Button'} onPress={() =>{}} />
      <View style={{flexDirection:'row'}}>
        <ItemCard source={require('./src/assets/images/image1.png')} name='Signature Polo' price='2,490' />
        <ItemCard source={require('./src/assets/images/image1.png')} name='Signature Polo' price='2,490' />
      </View>
      <Navigations /> */}
    </View>
  )
}

export default App