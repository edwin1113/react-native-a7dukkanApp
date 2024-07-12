import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './ProductCard.style';
import FastImage from 'react-native-fast-image';

const ProductCard = ({product, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <FastImage
          style={styles.image}
          source={{uri: product.image}}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.body_container}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price} TL</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
