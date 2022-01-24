import { StyleSheet } from 'react-native'

import { Text, View } from 'react-native'
import { RootStackScreenProps } from '../navigation/routes.types'

export const DishDetailsScreen = ({ navigation }: RootStackScreenProps<'DishDetails'>) => (
  <View style={styles.container}>
    <Text style={styles.title}>Dish Details</Text>
  </View>
)

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
