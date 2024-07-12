import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 3,
    // resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body_container: {
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  desc: {
    fontStyle: 'italic',
    marginVertical: 5,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'right',
  },
});
