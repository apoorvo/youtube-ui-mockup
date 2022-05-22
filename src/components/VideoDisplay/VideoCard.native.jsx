import React from 'react'
import {  Image, View, Text } from 'react-native'
const VideoCard = ({ thumbnail,title, channelName, published }) => {

  return (
    <View style={{
        padding:10
    }}>
     <Image  source={{uri: thumbnail.url}}
        style={{width: thumbnail.width, height:  thumbnail.height}} />

      <View style={{
          maxWidth: thumbnail.width
      }}>
          <Text>{title}</Text>
          <Text>{channelName}</Text>
          <Text>{published}</Text>
      </View>
    </View>
    )
}

export default VideoCard
