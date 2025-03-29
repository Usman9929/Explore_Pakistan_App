import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CulturalInformation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cultural Information</Text>
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

export default CulturalInformation;
