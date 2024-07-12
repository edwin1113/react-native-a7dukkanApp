import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#64b5f6',
    padding: 4,
  },
  logo: {
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width,
    // resizeMode: 'contain',
    // tintColor: 'white',
  },
  logo_container: {
    alignItems: 'center',
    marginBottom: 20,
    flex: 0.4,
    justifyContent: 'center',
  },
  body_container: {
    flex: 0.6,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  error: {
    color: '#ba1a1a',
    marginHorizontal: 10,
  },
});
