import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import React, { useEffect, useState } from 'react';

import brokenImage from './assets/istockphoto-1342278794-612x612.jpg'
export default function App() {
  //    my api key is pub_109961fef612d3b231ee077fafde649de8dc3
 
  const [categories, setCategories]=useState([])
  const [country, setCountry]=React.useState("south africa")

  useEffect(()=>{
    // let url ="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a7d1036594ac4296a57227f9109012e4";
    let url="https://newsdata.io/api/1/news?apikey=pub_109961fef612d3b231ee077fafde649de8dc3&country=za" ;
    fetch(url).then((response) => response.json().then((data)=>{
      console.log('THe latest news',data.results);
      setCategories(data.results)
        
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
        {
          
          categories.map((results)=>(
            // <Text>{results.title}</Text>
            // <Text>{results.country}</Text>
            <></>
            
          ))
        }
        <Text>{}</Text>
        <Text>{}</Text> 
         <Text></Text>
      </View>
      <View>
        <Text style={styles.news}>Latest news </Text>
      </View>
      {
        categories.map((results)=>(
          <View style={styles.latest}>
          {
            results.image_url ? (<Image
              style={{width:'100%', height: 150}}
            source={results.image_url
            }
          />):(<><Image
            style={{width: 150, height: 150, alignSelf:'center'}}
          source={brokenImage
          }
        /></>) 
          }
          
          <Text style={{padding:6}}>{results.title}</Text>
          </View> 
        ))
      }
     
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
