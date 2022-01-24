import { StyleSheet } from 'react-native'

import { Text, View, Button } from 'react-native'
import { WithBottomTabScreenProps, RootStackScreenName } from '../navigation/routes.types'

import { TrendDish } from '../components/TrendDish'

export const TabOneScreen = ({ navigation }: WithBottomTabScreenProps<'Home'>) => {
  const handleShowDish = () => {
    navigation.navigate(RootStackScreenName.DishDetails)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Button onPress={handleShowDish} title="show this dish" />
      <TrendDish />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
