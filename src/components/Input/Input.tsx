import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './Input.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type InputProps = {
  placeholder: string;
  onType: any;
  value: string;
  isSecure?: boolean;
  iconName: string;
};

const Input = ({
  placeholder,
  onType,
  value,
  isSecure = false,
  iconName,
}: InputProps) => {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name={iconName} size={24} />
      <TextInput
        style={styles.text_input}
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Input;
