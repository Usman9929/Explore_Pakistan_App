import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './VillageDetailScreenStyle';
import { useNavigation } from '@react-navigation/native';

const Tourist_Attraction = [
  {
    title: 'Natural Land Mark',
    details: [
      { label: "Rivers", value: "Nearby Swat River" },
      { label: "Lakes", value: "No major lakes" },
      { label: "Mountains", value: "Surrounded by small hills" },
      { label: "Forest", value: "Scattered pine and oak forests" }
    ]
  },
  {
    title: 'Cultural And Historical Places:',
    details: [
      { label: "Temples", value: "No known temples" },
      { label: "Old Building", value: "Historic rest house" },
      { label: "Monuments", value: "Local war memorial" },
      { label: "Museums", value: "No formal museums" }
    ]
  },
  {
    title: 'Local Events:',
    details: [
      { label: "Festivals", value: "Annual spring festival" },
      { label: "Exhibitions", value: "Handicrafts and local food fairs" },
      { label: "Cultural Performance", value: "Traditional Pashto music and dance" }
    ]
  },
];

const TouristAttraction = () => {
  const navigation = useNavigation();

  const handleAddPress = (serviceTitle) => {
    switch (serviceTitle) {
      case 'Natural Land Mark':
        navigation.navigate('NaturalLandmark');
        break;
      case 'Cultural And Historical Places:':
        navigation.navigate('CulturalandHistorical');
        break;
      case 'Local Events:':
        navigation.navigate('localEvents');
        break;
      default:
        console.warn('No screen defined for this service');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Tourist Attraction</Text>

        <View style={{ marginBottom: 60 }}>
          {Tourist_Attraction.map((item, index) => (
            <View key={index} style={styles.cardWrapper}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                {item.details.map((detail, i) => (
                  <Text key={i} style={styles.cardText}>
                    <Text style={styles.bold}>{detail.label}:</Text> {detail.value}
                  </Text>
                ))}
                <TouchableOpacity 
                  style={styles.addButton} 
                  onPress={() => handleAddPress(item.title)}
                >
                  <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default TouristAttraction;
