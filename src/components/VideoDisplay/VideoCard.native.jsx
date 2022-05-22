import React from 'react'
import {  Image, View, Text } from 'react-native'
const VideoCard = ({ thumbnail,title, channelName, published }) => {

  return (
    <View style={{
        padding:10
    }}>
     <Image  source={{uri: thumbnail.url}}
        style={{width: "100%", height:thumbnail.height}} />

      <View style={{
          maxWidth: "100%",
          marginBottom:10
      }}>
            <Text style={{fontWeight:"bold", fontSize:16,marginTop: 10, marginBottom: 10}}>{title}</Text>
          <Text style={{
              color:"#666962",
              marginBottom:5
          }}>{channelName}</Text>
          <Text style={{color:"#666962"}}>{published}</Text>
        
      </View>
    </View>
    )
}

export default VideoCard
