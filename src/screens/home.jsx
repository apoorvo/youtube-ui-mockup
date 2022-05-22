import React from 'react';
import {  View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import VideoDisplay from '../components/VideoDisplay';




const Home = () => {


  return (
    <View style={styles.container}>
     <Header />
     <View style={{flex:1, flexDirection:"row", justifyContent:"space-between"}}>
      <Sidebar />
      <VideoDisplay />
      </View>
     
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    width: "100%",
    height: "100%",
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    margin: 24,
    textAlign: 'center',
  },
});