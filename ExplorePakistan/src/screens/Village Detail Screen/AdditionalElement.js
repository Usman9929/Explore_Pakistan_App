import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdditionalElement = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Additional Element</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AdditionalElement;
