import React, { useEffect, useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Screens
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/Signup';
import BottomTabs from './navigation/BottomTab';
import ExploreVillageScreen from './screens/ExploreVillageScreen';
import RegionEvents from './screens/RegionEvents';
import EmergencyContact from './screens/EmergencyContact';
import SearchScreen from './screens/SearchScreen';
import VillageDetail from './screens/VillageDetail';
import ReligousFestivalScreen from './screens/Region_Events_Screens/ReligousFestivalScreen';
import CulturalandSeasonalFestival from './screens/Region_Events_Screens/CulturalandSeasonalFestival';
import RegionalEventsEthnicFestivals from './screens/Region_Events_Screens/RegionalEventsEthnicFestivals';
import FolkandTraditionalCelebration from './screens/Region_Events_Screens/FolkandTraditionalCelebration';
import NationalObservances from './screens/Region_Events_Screens/NationalObservances';
import InternationalllyInspiredEvents from './screens/Region_Events_Screens/InternationalllyInspiredEvents';
import AdventureAndSportsEvents from './screens/Region_Events_Screens/AdventureAndSportsEvents';
import TopTabNavigator from './screens/Explore_City/TopTabNavigator';
import About from './screens/Village Detail Screen/About';
import SignificantPeaple from './screens/Village Detail Screen/SignificantPeaple';
import Photo from './screens/Village Detail Screen/Photo';
import AdditionalElement from './screens/Village Detail Screen/AdditionalElement';
import CommunityServices from './screens/Village Detail Screen/CommunityServices';
import CulturalInformation from './screens/Village Detail Screen/CulturalInfo';
import Economy from './screens/Village Detail Screen/Economy';
import VillageEmergencyContact from './screens/Village Detail Screen/VillageEmergencyContact';
import GeographicalInfo from './screens/Village Detail Screen/GeographicalInfo';
import HistoricalBackground from './screens/Village Detail Screen/HistoricalBackground';
import PopulationDetail from './screens/Village Detail Screen/PopulationDetail';
import TouristAttraction from './screens/Village Detail Screen/TouristAttraction';
import ProfileDetail from './screens/Village Detail Screen/ProfileDetail';
import EducationAddButton from './screens/Village Detail Screen/Updation Screen/Community_Services_Screen/EducationAddButton';
import Recreational from './screens/Village Detail Screen/Updation Screen/Community_Services_Screen/Recreational';
import Transportation from './screens/Village Detail Screen/Updation Screen/Community_Services_Screen/Transportation';
import Utilities from './screens/Village Detail Screen/Updation Screen/Community_Services_Screen/Utilities';
import HealthCare from './screens/Village Detail Screen/Updation Screen/Community_Services_Screen/HealthCare';
import Market from './screens/Village Detail Screen/Updation Screen/Community_Services_Screen/Market';
import CulturalandHistorical from './screens/Village Detail Screen/Updation Screen/Tourist Attraction Screen/cultural_and_historical';
import localEvents from './screens/Village Detail Screen/Updation Screen/Tourist Attraction Screen/localEvents';
import NaturalLandmark from './screens/Village Detail Screen/Updation Screen/Tourist Attraction Screen/NaturalLandmark';
import FireStation from './screens/Village Detail Screen/Updation Screen/Emergency_conatact.js/FireStation';
import medicalEmergency from './screens/Village Detail Screen/Updation Screen/Emergency_conatact.js/medicalEmergency';
import PoliceStation from './screens/Village Detail Screen/Updation Screen/Emergency_conatact.js/PoliceStation';
import PopulationAdult from './screens/Village Detail Screen/Updation Screen/population_Detail/PopulationAdult';
import PoplutaionChildren from './screens/Village Detail Screen/Updation Screen/population_Detail/PoplutaionChildren';
import GenderRatioRate from './screens/Village Detail Screen/Updation Screen/population_Detail/GenderRatioRate';
import ClimateDetail from './screens/Village Detail Screen/Updation Screen/Geographical Information/ClimateDetail';
import GeoArea from './screens/Village Detail Screen/Updation Screen/Geographical Information/GeoArea';
import LocalInformation from './screens/Village Detail Screen/Updation Screen/Geographical Information/LocalInformation';
import LocalFestival from './screens/Village Detail Screen/Updation Screen/Historical Background/localFestival';
import Farming from './screens/Village Detail Screen/Updation Screen/Economy/farming';
import HandiCrafts from './screens/Village Detail Screen/Updation Screen/Economy/HandiCrafts';
import Industries from './screens/Village Detail Screen/Updation Screen/Economy/Industries';
import LanguageSpoken from './screens/Village Detail Screen/Updation Screen/Cultural Information/LanguageSpoken';
import Cultural_LocalFestival from './screens/Village Detail Screen/Updation Screen/Cultural Information/Cultural_LocalFestival';
import Traditions from './screens/Village Detail Screen/Updation Screen/Cultural Information/Traditions';
import PopulationElderly from './screens/Explore_City/PopulationDetail/PopulationElderly';
import NewsFeedScreen from './screens/NewsFeedScreen';
import AllVillagesScreen from './screens/Village Detail Screen/AllVillagesScreen';

// Create context for city data
export const CityContext = createContext();

const Stack = createStackNavigator();

const App = () => {
  const [isGuest, setIsGuest] = useState(null);
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        setIsGuest(!token); // if no token → guest
      } catch (error) {
        console.error("Token check failed:", error);
        setIsGuest(true);
      }
    };
    checkToken();
  }, []);

  if (isGuest === null) return null;

  return (
    <CityContext.Provider value={{ cityData, setCityData }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome">
            {(props) => <WelcomeScreen {...props} setIsGuest={setIsGuest} />}
          </Stack.Screen>
          <Stack.Screen name="Login">
            {(props) => (
              <LoginScreen
                {...props}
                setIsGuest={setIsGuest}
                setCityData={setCityData}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="MainTabs">
            {(props) => (
              <BottomTabs
                {...props}
                isGuest={isGuest}
                cityData={cityData}        // ✅ Pass to BottomTabs
              />
            )}
          </Stack.Screen>


          {/* All routes */}
          <Stack.Screen name="ExploreVillageScreen" component={ExploreVillageScreen} />
          <Stack.Screen name="RegionEvents" component={RegionEvents} />
          <Stack.Screen name="EmergencyContact" component={EmergencyContact} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="VillageDetail" component={VillageDetail} />
          <Stack.Screen name="ReligousFestivalScreen" component={ReligousFestivalScreen} />
          <Stack.Screen name="CulturalandSeasonalFestival" component={CulturalandSeasonalFestival} />
          <Stack.Screen name="RegionalEventsEthnicFestivals" component={RegionalEventsEthnicFestivals} />
          <Stack.Screen name="FolkandTraditionalCelebration" component={FolkandTraditionalCelebration} />
          <Stack.Screen name="NationalObservances" component={NationalObservances} />
          <Stack.Screen name="InternationalllyInspiredEvents" component={InternationalllyInspiredEvents} />
          <Stack.Screen name="AdventureAndSportsEvents" component={AdventureAndSportsEvents} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Photo" component={Photo} />
          <Stack.Screen name="Economy" component={Economy} />
          <Stack.Screen name="AdditionalElement" component={AdditionalElement} />
          <Stack.Screen name="CommunityServices" component={CommunityServices} />
          <Stack.Screen name="CulturalInformation" component={CulturalInformation} />
          <Stack.Screen name="VillageEmergencyContact" component={VillageEmergencyContact} />
          <Stack.Screen name="GeographicalInfo" component={GeographicalInfo} />
          <Stack.Screen name="HistoricalBackground" component={HistoricalBackground} />
          <Stack.Screen name="PopulationDetail" component={PopulationDetail} />
          <Stack.Screen name="TouristAttraction" component={TouristAttraction} />
          <Stack.Screen name="SignificantPeaple" component={SignificantPeaple} />
          <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
          <Stack.Screen name="ExploreCity" component={TopTabNavigator} />
          <Stack.Screen name="EducationAddButton" component={EducationAddButton} />
          <Stack.Screen name="HealthCare" component={HealthCare} />
          <Stack.Screen name="Market" component={Market} />
          <Stack.Screen name="Recreational" component={Recreational} />
          <Stack.Screen name="Transportation" component={Transportation} />
          <Stack.Screen name="Utilities" component={Utilities} />
          <Stack.Screen name="CulturalandHistorical" component={CulturalandHistorical} />
          <Stack.Screen name="localEvents" component={localEvents} />
          <Stack.Screen name="NaturalLandmark" component={NaturalLandmark} />
          <Stack.Screen name="FireStation" component={FireStation} />
          <Stack.Screen name="MedicalEmergency" component={medicalEmergency} />
          <Stack.Screen name="PoliceStation" component={PoliceStation} />
          <Stack.Screen name="GenderRatioRate" component={GenderRatioRate} />
          <Stack.Screen name="PopulationAdult" component={PopulationAdult} />
          <Stack.Screen name="PoplutaionChildren" component={PoplutaionChildren} />
          <Stack.Screen name="ClimateDetail" component={ClimateDetail} />
          <Stack.Screen name="GeoArea" component={GeoArea} />
          <Stack.Screen name="LocalInformation" component={LocalInformation} />
          <Stack.Screen name="LocalFestival" component={LocalFestival} />
          <Stack.Screen name="Farming" component={Farming} />
          <Stack.Screen name="HandiCrafts" component={HandiCrafts} />
          <Stack.Screen name="Industries" component={Industries} />
          <Stack.Screen name="Cultural_LocalFestival" component={Cultural_LocalFestival} />
          <Stack.Screen name="Traditions" component={Traditions} />
          <Stack.Screen name="LanguagSpoken" component={LanguageSpoken} />
          <Stack.Screen name="PopulationElderly" component={PopulationElderly} />
          <Stack.Screen name="NewsFeed" component={NewsFeedScreen} />
          <Stack.Screen name="AllVillagesScreen" component={AllVillagesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CityContext.Provider >
  );
};

export default App;
