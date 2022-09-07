import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import React, { useEffect, useState } from 'react';

export default function App() {
  //    my api key is pub_109961fef612d3b231ee077fafde649de8dc3
 
  const [categories, setCategories]=useState("")
  const [country, setCountry]=React.useState("south africa")

  useEffect(()=>{
    // let url ="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a7d1036594ac4296a57227f9109012e4";
    let url="https://newsdata.io/api/1/news?apikey=pub_109961fef612d3b231ee077fafde649de8dc3&country=za" ;
    fetch(url).then((response) => response.json().then((data)=>{
      console.log('THe latest news',data);
      setCategories(data[0].title)
      // console.log('title')
   
    }))
    
  }, [])
  

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.container}>
      <View>
      <Text style={styles.head}>headlines</Text>
      </View>
      <View style={styles.topV}>
        <Text>HEADING</Text>
        <Text>{country}</Text>
        <Text>{categories}</Text>
      </View>
      <View>
        <Text style={styles.news}>Latest news </Text>
      </View>
      <View style={styles.latest}>
      <Image
          style={{width: 150, height: 150}}
          source={"data:image/jpeg;base64,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"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    marginLeft: 40,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  head:{
    marginTop: 40,

  },
  topV:{
    height: 200,
    width: 300,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    marginTop:50,
   
  },
  latest:{
    marginTop: 10,
    height: 150,
    width: 300,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
  },
  news:{
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
  }
});
