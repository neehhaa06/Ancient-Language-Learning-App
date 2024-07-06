import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button title="Lessons" onPress={() => navigation.navigate('Lessons')} />
      <Button title="Practice" onPress={() => navigation.navigate('Practice')} />
      <Button title="Community" onPress={() => navigation.navigate('Community')} />
    </View>
  );
}
