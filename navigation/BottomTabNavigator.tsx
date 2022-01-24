import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { WithBottomTabParamList, WithBottomTabScreenProps } from './routes.types'

import { colors } from '../theme'

import { TabOneScreen } from '../screens/TabOneScreen'
import { TabTwoScreen } from '../screens/TabTwoScreen'

const BottomTab = createBottomTabNavigator<WithBottomTabParamList>()

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneScreen}
        options={({ navigation }: WithBottomTabScreenProps<'Home'>) => ({
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="home" color={focused ? colors.main : colors.inactive} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Account"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="account" color={focused ? colors.main : colors.inactive} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name']
  color: string
}) {
  return <MaterialCommunityIcons size={35} style={{ marginBottom: -3 }} {...props} />
}
