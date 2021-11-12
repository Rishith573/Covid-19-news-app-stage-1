import React from 'react';
import { StyleSheet } from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import NewsScreen from '../screens/news';
import FAQ from '../screens/FAQ';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize'

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends React.Component{
    render(){
        return(
            <Tab.Navigator 
            labeled={false}
            barStyle={styles.bottomTabStyle}
            screenOptions = {({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let nameOfIcon;
                    if(route.name === "NewsScreen"){
                        nameOfIcon = focused ? 'book' : 'book-outline'
                    } else if (route.name === "FAQ"){
                        nameOfIcon = focused ? 'help' : 'help-outline'
                    }
                    return <Ionicons name={nameOfIcon} size={RFValue(20)} color={color} style={styles.icons}/>
                }
            })}
                activeColor={"blue"}
                inactiveColor={"gray"}
            >
                <Tab.Screen
                    name="NewsScreen"
                    component={NewsScreen}
                />
                <Tab.Screen
                    name="FAQ"
                    component={FAQ}
                />
            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "lightblue",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(30),
        height: RFValue(30)
    }
})