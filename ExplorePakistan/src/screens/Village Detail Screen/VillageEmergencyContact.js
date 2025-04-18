import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './VillageDetailScreenStyle';
import { useNavigation } from '@react-navigation/native';

const Village_Emergency_Contact = [
  {
    title: 'Police Station',
    details: [
      { label: "Contact Number", value: "1122" },
      { label: "Address", value: "Main Road, Khazana Village" },
      { label: "Operating Hours", value: "24/7" }
    ]
  },
  {
    title: 'Fire Station',
    details: [
      { label: "Contact Number", value: "115" },
      { label: "Address", value: "Near Market Square, Khazana Village" },
      { label: "Operating Hour", value: "24/7" }
    ]
  },
  {
    title: 'Medical Emergency',
    details: [
      {label:"Ambulance Service", value: "1122"}, 
      {label:"Hospital Emergency Number", value: "0345-6789012"},
      {label:"Blood Bank", value: "Available in District Hospital"},
      {label:"Disaster Management", value: "Rescue 1122 team"},
      {label:"Contact For Handling Flood", value: "Flood Control Authority - 0800-12345"},
      {label:"Contact For Earthquake", value: "Disaster Response Team - 0800-67890"}
    ]
  },
];

const VillageEmergencyContact = () => {
    const navigation = useNavigation();
  
    const handleAddPress = (serviceTitle) => {
      switch (serviceTitle) {
        case 'Police Station':
          navigation.navigate('policeStation');
          break;
        case 'Fire Station':
          navigation.navigate('FireStation');
          break;
        case 'Medical Emergency':
          navigation.navigate('medicalEmergency');
          break;
        default:
          console.warn('No screen defined for this service:', serviceTitle);
      }
    };
    
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Emergency Contact</Text>

        <View style={{ marginBottom: 60 }}>
          {Village_Emergency_Contact.map((item, index) => (
            <View key={index} style={styles.cardWrapper}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                {item.details.map((detail, i) => (
                  <Text key={i} style={styles.cardText}>
                    <Text style={styles.bold}>{detail.label}:</Text> {detail.value}
                  </Text>
                ))}
                <TouchableOpacity style={styles.addButton} onPress={() => handleAddPress(item.title)}> 
                  <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView >
  );
};



export default VillageEmergencyContact;
