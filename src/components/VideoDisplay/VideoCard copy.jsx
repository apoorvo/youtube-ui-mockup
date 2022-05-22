import React, { useEffect, useState, useRef } from 'react'
import {  Image, View, Text, Animated } from 'react-native'
import { Button, ImageBackground } from 'react-native-web'
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
    padding:10, paddingBottom:0,  transform:[{scale:scaleRef}],
    backgroundColor: "#fff",
    flexGrow:1,
    }}>               
  <ImageBackground source={{uri: thumbnail.url}}
       style={{maxWidth: thumbnail.width, width:"100%",height:thumbnail.height}} >
           <Text style={{
               color:"#fff",
               backgroundColor:"#000",
               position: 'absolute',
                padding: 5,
                bottom:0,
                right:0,
                opacity: hovered  ? 1:0
    }}>Keep hovering to play</Text>
    </ImageBackground>

  <View style={{
      maxWidth: thumbnail.width, justifyContent:"space-between"}}>
          <Text style={{fontWeight:"bold", fontSize:16,marginTop: 10, marginBottom: 10}}>{title}</Text>
          <Text style={{
              color:"#666962",
              marginBottom:5
          }}>{channelName}</Text>
          <Text style={{color:"#666962"}}>{published}</Text>
        
         
         <Animated.View style={{flex:1, flexDirection:"row", justifyContent:"space-evenly", alignItems:"flex-end", opacity:fadeInRef, paddingTop:10, paddingBottom:10}}>
            <Button color="#a5a5a5" title={"Watch Later"}/>
            <Button color="#a5a5a5" title={"Add to Queue"}/>
        </Animated.View>

      </View>
    </Animated.View>   
}

export default VideoCard
