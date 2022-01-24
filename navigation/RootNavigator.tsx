import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

import { BottomTabNavigator } from './BottomTabNavigator'
import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import { DishDetailsScreen } from '../screens/DishDetailsScreen'

import { RootStackParamList, RootStackScreenName } from './routes.types'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={RootStackScreenName.BottomTab}
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={RootStackScreenName.NotFound}
      component={NotFoundScreen}
      options={{ title: 'Oops!' }}
    />
    <Stack.Screen name={RootStackScreenName.DishDetails} component={DishDetailsScreen} />
    <Stack.Group screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen name={RootStackScreenName.Modal} component={ModalScreen} />
    </Stack.Group>
  </Stack.Navigator>
)
