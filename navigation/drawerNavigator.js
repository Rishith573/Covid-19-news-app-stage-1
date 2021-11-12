import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../screens/profile';
import BottomTabNavigator from './bottomTabNavigator';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component{
    render(){
        return(
            <Drawer.Navigator>
                <Drawer.Screen
                    name="HomeScreen"
                    component={BottomTabNavigator}
                />
                <Drawer.Screen
                    name="Profile"
                    component={Profile}
                />
            </Drawer.Navigator>
        )
    }
}