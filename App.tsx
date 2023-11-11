import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import FormScreen from './src/screens/FormScreen';
import UserDetailScreen from './src/screens/UserDetailScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Form">
                <Stack.Screen name="Form" component={FormScreen} />
                <Stack.Screen name="UserDetail" component={UserDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
