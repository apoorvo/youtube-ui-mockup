import * as React from 'react';
import { View, Text, Platform} from 'react-native';

const Sidebar = ()=>{

  if(Platform.OS !="web"){
      return null
  }
  return <View style={{minWidth:"10%"}}>
    <Text>This is Siderbar</Text>
  </View>
}

export default Sidebar