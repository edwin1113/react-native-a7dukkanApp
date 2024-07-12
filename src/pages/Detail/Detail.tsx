import React from 'react';
import {Text, View} from 'react-native';
import Config from 'react-native-config';
import FastImage from 'react-native-fast-image';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import useFetch from '../../hooks/useFetch';
import styles from './Detail.style';

const Detail = ({route}) => {
  const {id} = route.params;
  const url = `${Config.API_PRODUCT_URL}/${id}`;
  const {_loading, _data, _error} = useFetch(url);

  if (_loading) {
    return <Loading />;
  }
  // Because backend return 200 although there is no _data in response,
  // we need to handle this case as _error too.
  if (!_loading && (_error || !_data)) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FastImage
        source={{uri: _data.image}}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.body_container}>
        <Text style={styles.title}>{_data.title}</Text>
        <Text style={styles.desc}>{_data.description}</Text>
        <Text style={styles.price}>{_data.price} TL</Text>
      </View>
    </View>
  );

};

export default Detail;
