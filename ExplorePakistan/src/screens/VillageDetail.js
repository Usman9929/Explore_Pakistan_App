import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import About from "./Village Detail Screen/About";
import SignificantPeaple from "./Village Detail Screen/SignificantPeaple";
import AdditionalElement from "./Village Detail Screen/AdditionalElement";
import CommunityServices from "./Village Detail Screen/CommunityServices";
import CulturalInformation from "./Village Detail Screen/CulturalInfo";
import Economy from "./Village Detail Screen/Economy";
import GeographicalInfo from "./Village Detail Screen/GeographicalInfo";
import HistoricalBackground from "./Village Detail Screen/HistoricalBackground";
import Photo from "./Village Detail Screen/Photo";
import PopulationDetail from "./Village Detail Screen/PopulationDetail";
import TouristAttraction from "./Village Detail Screen/TouristAttraction";
import VillageEmergencyContact from "./Village Detail Screen/VillageEmergencyContact";


// Create top tab navigator
const Tab = createMaterialTopTabNavigator();

const VillageDetail = ({ route }) => {
  const navigation = useNavigation();
  const { village } = route.params; // Get village data from navigation

  return (
    <View style={styles.container}>
      {/* Village Image */}
      <Image source={{ uri: village.image }} style={styles.villageImage} />

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Village Info */}
      <View style={styles.villageInfo}>
        <Text style={styles.villageName}>{village.name}</Text>
        <View style={styles.locationContainer}>
          <Icon name="location-outline" size={16} color="red" />
          <Text style={styles.villageLocation}>{village.location}</Text>
          <Icon name="star" size={16} color="orange" style={styles.favoriteIcon} />
        </View>
      </View>

      {/* Tab Navigator */}
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 13, fontWeight: "bold", },
          tabBarIndicatorStyle: { backgroundColor: "red", height: 3, width: 150, marginLeft:10},
          tabBarStyle: { backgroundColor: "white", },
          tabBarScrollEnabled: true, // Enables horizontal scrolling
        }}
      >
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Significant People" component={SignificantPeaple} />
        <Tab.Screen name="Photos" component={Photo} />
        <Tab.Screen name="Community Services" component={CommunityServices} />
        <Tab.Screen name="Tourist Attraction" component={TouristAttraction} />
        <Tab.Screen name="Emergency Conatact" component={VillageEmergencyContact} />
        <Tab.Screen name="Additional Element" component={AdditionalElement} />
        <Tab.Screen name="Population Detail" component={PopulationDetail} />
        <Tab.Screen name="Geographical Info" component={GeographicalInfo} />
        <Tab.Screen name="Historical Background" component={HistoricalBackground} />
        <Tab.Screen name="Economy" component={Economy} />
        <Tab.Screen name="Cultural Information" component={CulturalInformation} />
      </Tab.Navigator>
    </View>
  );
};

export default VillageDetail;

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  villageImage: { width: "100%", height: 250, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  backButton: { position: "absolute", top: 40, left: 20, backgroundColor: "rgba(0,0,0,0.5)", padding: 10, borderRadius: 20 },
  villageInfo: { padding: 15, backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: -30 },
  villageName: { fontSize: 20, fontWeight: "bold", color: "#333" },
  locationContainer: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  villageLocation: { fontSize: 14, color: "gray", marginLeft: 5 },
  favoriteIcon: { marginLeft: 5 },
  tabContent: { flex: 1, padding: 15, backgroundColor: "white" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  description: { fontSize: 14, color: "#555" },
});
