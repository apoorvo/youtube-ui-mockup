import React from "react"
import {View, Text, Image, StyleSheet, FlatList, Platform} from "react-native"

import {API_URL} from "@env"
import axios from 'axios';
import { useQuery } from 'react-query';
import VideoCard from "./VideoCard";
import dummyData from "../../../dummyData/data";
// const fetchVideos =  ()=>{
//     return axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=programming&type=video&key=${API_URL}`)
//   }

const VideoDisplay = ()=>{
    
    // const {isLoading, data} = useQuery('fetchVideo', fetchVideos)
    // console.log(data)
    // if(isLoading){
    //     return <View><Text>Loading...</Text></View>
    // }
    const data ={data: JSON.parse(dummyData)}


  if(Platform.OS=="web"){
    return <View style={style.videoContainer}>
      {data.data.items?.length>0 && data.data.items?.map(({id:{videoId},snippet})=>{
      return <VideoCard key={videoId} thumbnail={snippet.thumbnails.medium} published={snippet.publishedAt} title={snippet.title} channelName={snippet.channelTitle}/>
    })}
    </View>
  }

  return <View style={{width:"100%"}}>
    <FlatList 
      data={data.data.items}      
      renderItem={({item:{id:{videoId},snippet}})=> <VideoCard thumbnail={snippet.thumbnails.medium} published={snippet.publishedAt} title={snippet.title} channelName={snippet.channelTitle}/>}
   />
    
  </View>
}

export default VideoDisplay

const style  = StyleSheet.create({
    videoContainer:{
        flex: 1,
        flexGrow:1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        width:"100%"
    },
   
})