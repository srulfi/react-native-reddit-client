import { StyleSheet } from 'react-native'
import { Colors, FontsSizes, Metrics } from '../../themes'

export default StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  author: {
    alignSelf: 'flex-start',
    fontSize: FontsSizes.large,
  },
  thumbnail: {
    width: 130,
    height: 130,
    marginVertical: 30,
  }
})
