import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './Button.style';

type ButtonProps = {
  title: string;
  onPress: any;
  loading?: boolean;
};

const Button = ({title, onPress, loading = false}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, loading && styles.container_disabled]}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={[styles.title, loading && styles.title_disabled]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
