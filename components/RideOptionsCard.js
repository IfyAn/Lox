import React, { useState } from 'react'
import { FlatList, SafeAreaView as ScrollView, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import { selectTravelTimeInformation } from '../slices/navSlice';
import { useSelector } from 'react-redux'

const data=[
    {
        id:'Uber-X-123',
        title:'UberX',
        image:'https://links.papareact.com/3pn',
        multiplier:1,
    },
    {
        id:'Uber-Xl-456',
        title:'Uber XL',
        image:'https://links.papareact.com/5w8',
        multiplier:1.2,
    },
    {
        id:'Uber-LUX-789',
        title:'Uber LUX',
        image:'https://links.papareact.com/7pf',
        multiplier:1.75,
    },
  
]

const SURGE_CHARGE_RATE=1.5

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null)
    const travelTimeInformation= useSelector(selectTravelTimeInformation)

    return (
        <View style={tw`flex-grow bg-white`}>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('NavigateCard')}
                    style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
                >
                    <Icon name='chevron-left' type='fontawesome' />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select A Ride - {travelTimeInformation?.distance?.text}</Text>
            </View>
            <View>
                <TouchableOpacity disabled={!selected}
                     style={tw`bg-black ${!selected && 'bg-gray-300'} py-3 m-3`}
                >
                    <Text style={tw`text-xl text-center text-white`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
            <View>
            <FlatList
                data={data}
                keyExtractor={(item)=>item.id}

                renderItem={({item:{id, title, image, multiplier}, item})=>(
                    <TouchableOpacity onPress={()=>setSelected(item)}
                     style={tw`flex-row justify-between items-center ${id===selected?.id && 'bg-red-300'} px-10`}
                    >
                       <Image
                          style={{width:100, height:100, resizeMode:'contain'}}
                          source={{uri:image}}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`font-semibold text-xl`}>{title}</Text>
                            <Text>{travelTimeInformation?.duration?.text}Travel Time</Text>
                        </View>
                            <Text style={tw`text-xl`}>$99
                                {/* {new Intl.NumberFormat('en-gb',{
                                    style:'currency',
                                    currency:'GBP',
                                }).format(
                                    (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier)/100
                                )} */}
                            </Text>
                    </TouchableOpacity>
                )}
            />
          </View>  
        </View>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
