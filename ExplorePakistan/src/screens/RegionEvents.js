import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';

const RegionEvents = () => {
    return (
        <ScrollView style={styles.PopularSitesContainer}>
            <Image
                source={require('../assets/images/regional_background.jpg')}
                style={styles.headerImage}
            />
            {/* Grid Buttons */}
            <View style={styles.gridContainer}>
                <RegionEventsButton title="Religious Festival" icon={require('../assets/icons/religious_festivals.png')} />
                <RegionEventsButton title="Cultural and Seasonal Festival " icon={require('../assets/icons/cultural_and_seasonal_festival.png')} />
                <RegionEventsButton title="Regional Events Ethnic Festivals" icon={require('../assets/icons/regional_events_ethnic_festivals.png')} />
                <RegionEventsButton title="Folk and Traditional Celebrations" icon={require('../assets/icons/Folk_and_traditional_celebrations.png')} />
                <RegionEventsButton title="National Observances" icon={require('../assets/icons/national_observances.png')} />
                <RegionEventsButton title="Internationally Inspired Events" icon={require('../assets/icons/internationally_nspired_events.png')} />
                <RegionEventsButton title="Adventure and Sports Events" icon={require('../assets/icons/adventure_and_ports_events.png')} />
            </View>
        </ScrollView>
    );
};
// Button Component
const RegionEventsButton = ({ title, icon, onPress }) => {
    return (
        <TouchableOpacity style={styles.PopularSitesbutton} onPress={onPress}>
            <Image source={icon} style={styles.icon} />
            <Text style={styles.popularSitesbuttonText}>{title}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    PopularSitesContainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom:70,
    },
    headerImage: {
        width: '100%',
        height: 400,
        resizeMode: 'cover',
        overflow: 'hidden',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginBottom:40
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: 10,
        marginLeft:5
    },
    PopularSitesbutton: {
        backgroundColor: '#E74C3C', // Red color like the design
        width: 120,
        height: 120,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        paddingLeft: 10,
        paddingRight: 10,
    },
    icon: {
        width: 48, // Adjust icon size based on your image
        height: 48,
        resizeMode: 'contain',
      },
      popularSitesbuttonText: {
        color: 'white',
        fontSize: 11,
        fontWeight: 'bold',
        marginTop: 8,
        textAlign: 'center',
      },
});

export default RegionEvents;
