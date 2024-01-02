import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import axios from 'axios';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const fetchEvents = async () => {
  try {
     const response = await axios.get('http://localhost:3000/events');
     setEvents(response.data);
  } catch (error) {
     console.error(error);
  }
 };
 const CalendarApp = () => {
  const [events, setEvents] = useState([]);
 
  useEffect(() => {
     fetchEvents();
  }, []);
 
  return (
     <View>
       <Calendar />
       <FlatList
         data={events}
         renderItem={({item}) => (
           <View>
             <Text>{item.summary}</Text>
             <Text>{item.start.dateTime}</Text>
           </View>
         )}
         keyExtractor={item => item.id}
       />
     </View>
  );
 };
