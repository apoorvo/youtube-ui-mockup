import React, { useEffect, useState, useRef } from 'react'
import {   View, Text, Animated, Button, ImageBackground  } from 'react-native'
import { Pressable } from 'react-native-web'

const VideoCard  = ({thumbnail, title, channelName,published})=>{
  const [hovered, setHovered] = useState(false)

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

  return <View style={ {
    zIndex: hovered? 3:1,
    minHeight:thumbnail.height,
    width: "20%",
    backgroundColor:"#FFF"

}}> 
  <Pressable onHoverOut={()=>{setHovered(false)}}>
  <Animated.View style={{
    padding:10, paddingBottom:0,  transform:[{scale:scaleRef}],
    backgroundColor: "#fff",
    flexGrow:1,
    width:'100%',
    zIndex:3,

    }}>            

    <Pressable onHoverIn={e=>{
          setHovered(true)
      }}
      >   
  <ImageBackground source={{uri: thumbnail.url}}
       style={{maxWidth: thumbnail.width, width:"100%",height:thumbnail.height}} >
           <Text style={{
               color:"#fff",
               backgroundColor:"#000",
                padding: 5,
                position:'absolute',
                bottom:2,
                right:0,
                opacity: hovered  ? 1:0
    }}>Keep hovering to play</Text>
    </ImageBackground>
    </Pressable>
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
    </Pressable>
    </View>
}

export default VideoCard
