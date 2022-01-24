import { View, Text, Image } from 'react-native'
import { styles } from './TrendDish.styles'

const TrendDish = () => (
  <View>
    <Image style={styles.image} source={require('../../assets/images/pizza.jpeg')} />
    <View style={styles.infoContainer}>
      <Text>Pizza Margharita</Text>
    </View>
  </View>
)

export { TrendDish }
