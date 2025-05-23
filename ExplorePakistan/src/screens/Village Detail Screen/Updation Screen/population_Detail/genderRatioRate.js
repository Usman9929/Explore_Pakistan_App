import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from '../Community_Services_Screen/Community_Services_Screen_style';

const GenderRatioRate = () => {
    const navigation = useNavigation();

    const [malePopulation, setMalePopulation] = useState('');
    const [femalePopulation, setFemalePopulation] = useState('');
    const [maleToFemaleRatio, setMaleToFemaleRatio] = useState('');

    const handleSubmit = () => {
        if (
            !malePopulation.trim() &&
            !femalePopulation.trim() &&
            !maleToFemaleRatio.trim()
        ) {
            Alert.alert("Validation Error", "Please fill at least one field to submit.");
            return;
        }

        Alert.alert("Success", "Your data has been submitted successfully!", [
            { text: "OK", onPress: () => navigation.goBack() }
        ]);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require("../../../../assets/images/timergaraImage_1.jpg")}
                style={styles.image}
            />

            <View style={styles.formContainer}>
                <Text style={styles.header}>Gender Ratio Rate</Text>

                <Text style={styles.label}>Male Population:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter total male population"
                    placeholderTextColor="#888"
                    value={malePopulation}
                    onChangeText={setMalePopulation}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Female Population:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter total female population"
                    placeholderTextColor="#888"
                    value={femalePopulation}
                    onChangeText={setFemalePopulation}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Male to Female Ratio:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter male to female ratio (e.g., 1:1)"
                    placeholderTextColor="#888"
                    value={maleToFemaleRatio}
                    onChangeText={setMaleToFemaleRatio}
                />

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <LinearGradient colors={['#ff7e5f', '#ff2d55']} style={styles.buttonGradient}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default GenderRatioRate;
