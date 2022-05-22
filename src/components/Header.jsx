import * as React from 'react';
import { View, Text, Image, TextInput} from 'react-native';


const Header = () => {
  return (
    <View style={{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20
    }} >
        <Image source={require('../assets/logo.png')} style={{
            width:128,
            height:28
        }}/>
        <TextInput style={
            {height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,}
        }/>
    </View>
  );
};

export default Header;
