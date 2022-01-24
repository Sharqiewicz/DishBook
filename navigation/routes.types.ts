import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  BottomTab: NavigatorScreenParams<WithBottomTabParamList> | undefined
  Modal: undefined
  NotFound: undefined
  DishDetails: undefined
}

export type RootStackScreenProps<StackScreenList extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, StackScreenList>

export enum RootStackScreenName {
  BottomTab = 'BottomTab',
  Modal = 'Modal',
  NotFound = 'NotFound',
  DishDetails = 'DishDetails',
}

/**
 * @component BottomTabNavigator
 */

export type WithBottomTabParamList = {
  Home: undefined
  Account: undefined
}

export type WithBottomTabScreenProps<Screen extends keyof WithBottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<WithBottomTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >
