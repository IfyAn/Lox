import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';

const data=[
    {
        id:'123',
        icon:'home',
        location:'Home',
        destination:'Code Street, London UK'
    },
    {
        id:'456',
        icon:'briefcase',
        location:'Work',
        destination:'London Eye, London UK'
    },
]


const NavFavourites = () => {
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item)=>item.id}
                ItemSeparatorComponent={()=>(
                    <View style={[tw`bg-gray-200`, {height:0.6}]} />
                )}
                renderItem={({item:{location, destination, icon}})=>(
                    <TouchableOpacity style={tw`flex-row items-center p-5`}>
                       <Icon 
                          style={tw`mr-4 bg-gray-300 rounded-full p-3`}
                          name={icon}
                          color='white' 
                          type='ionicon' 
                          size={18}
                        />
                        <View>
                            <Text style={tw`font-semibold text-lg`}>{location}</Text>
                            <Text style={tw`text-gray-300`}>{destination}</Text>
                        </View>

                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default NavFavourites

const styles = StyleSheet.create({})
