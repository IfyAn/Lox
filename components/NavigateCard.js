import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements'

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <Text style={tw`text-center py-5 text-xl`}>Good day to you</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                    placeholder='Where to'
                    debounce={400}
                    styles={toInputBoxStyles}
                    onPress={(data, details = null) => {
                        dispatch(setDestination({
                            location:details.geometry.location,
                            description:data.description
                        })
                        )
                        navigation.navigate('RideOptionsCard')
                    }}
                    fetchDetails = {true}
                    returnKeyType={'search'}
                    enablePoweredByContainer={false}
                    nearByPlacesAPI='GooglePlacesSearch'
                    minLength={2}
                    query={{
                        key: MAPS_APIKEY,
                        language: 'en',
                    }}
                    />
                </View>
                <NavFavourites />
            </View>
            <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-200`}>
                <TouchableOpacity onPress={()=>navigation.navigate('RideOptionsCard')}
                style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
                
                >
                    <Icon name='car' color='white' type='font-awesome' size={16} />
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex flex-row justify-between bg-gray-200 w-24 px-4 py-3 rounded-full`}>
                    <Icon name='fast-food-outline' color='brown' type='ionicon' size={16} />
                    <Text style={tw`text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        flex:0,
        paddingTop:20,
        backgroundColor:'white'
    }, 
    textInput:{
        fontSize:18,
        borderRadius:0,
        backgroundColor:'#DDDDDF'
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0,
    },
})
