import { StyleSheet } from 'react-native'

import { Text, View } from 'react-native'

export const TabTwoScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Tab Two</Text>
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
