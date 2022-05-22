import React, { useEffect, useState, useRef } from 'react'
import {  Image, View, Text, Animated } from 'react-native'
import { Button } from 'react-native-web'
import { Pressable } from 'react-native-web-hover'
const VideoCard = (props) => {
  
    return <Pressable style={({hovered})=>{
        return {
            zIndex: hovered? 3:-1,
            width: "20%",

        }
    }}>
        {({hovered})=>{
            return <VideoCardInner {...props} hovered ={hovered} />
            }}
        </Pressable>
}


const VideoCardInner  = ({thumbnail, title, channelName,published, hovered})=>{
  const [dimensions, setDimensions]  = useState({
      width: thumbnail.width+10,
      height: thumbnail.height+50
  })


  const fadeInRef = useRef(new Animated.Value(0)).current
  const scaleRef =  useRef(new Animated.Value(1)).current;
  useEffect(()=>{
      if(hovered){
        Animated.parallel([
            Animated.timing(scaleRef, {
                toValue: 1.2,
                duration: 500,
                delay:1000,
                useNativeDriver: true,
            }),
            Animated.timing(fadeInRef, {
                toValue: 1,
                delay:1000,
                duration: 500,
                useNativeDriver: true,
            })
        ]).start()
        
      }else{
        Animated.parallel([
            Animated.timing(scaleRef, {
                toValue: 1,
                duration: 0,
                useNativeDriver: true,
            }),
            Animated.timing(fadeInRef, {
                toValue: 0,
                duration: 10,
                useNativeDriver: true,
            })
        ]).start()
      }
  },[hovered])

  return <Animated.View style={{
    padding:10,  transform:[{scale:scaleRef}],
    backgroundColor: "#fff",
    flexGrow:1
    }}>               
  <Image  source={{uri: thumbnail.url}}
       style={{maxWidth: thumbnail.width, width:"100%",height:thumbnail.height}} />

  <View style={{
      maxWidth: thumbnail.width}}>
          <Text>{title}</Text>
          <Text>{channelName}</Text>
          <Text>{published}</Text>
        
         
         <Animated.View style={{flex:1, flexDirection:"row", justifyContent:"space-evenly", opacity:fadeInRef}}>
            <Button title={"Watch Later"}/>
            <Button title={"Add to Queue"}/>
        </Animated.View>

      </View>
    </Animated.View>   
}

export default VideoCard
