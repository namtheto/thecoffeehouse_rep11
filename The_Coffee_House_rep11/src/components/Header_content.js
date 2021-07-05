import React from 'react'
import { View, TouchableOpacity,StyleSheet, Image} from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Image
                source={require('../assets/Icon/Logo.png')}
                style={{
                    width:180,
                    height:18,
                    marginLeft:10
                }}
            />
            <TouchableOpacity>
                <Image
                    source={require('../assets/Icon/Newbie.png')}
                    style={{
                        width:35,
                        height:35,
                        marginRight:10
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Header
const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:70,
        backgroundColor:'white'
    },
})