import {Formik} from 'formik';
import React from 'react';
import {Alert, SafeAreaView, Text, View, ScrollView} from 'react-native';
import Config from 'react-native-config';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import Button from '../../components/Button';
import Input from '../../components/Input';
import usePost from '../../hooks/usePost';
import styles from './Login.style';

export type LoginFormValues = {
  username: string;
  email: string;
  password: string;
};

export type LoginPostValues = {
  username: string;
  password: string;
};

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Username is too short!')
    .max(50, 'Username is too long!')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password is too short!')
    .max(10, 'Password is too long!')
    .required('Password is required'),
});

const Login = () => {
  const {loading, data, error, post} = usePost();
  const dispatch = useDispatch();

  const handleLogin = (formValues: LoginFormValues) => {
    const loginPostData: LoginPostValues = {
      username: formValues.username,
      password: formValues.password,
    };
    post(Config.API_AUTH_LOGIN_URL, loginPostData);
  };

  if (!loading && error) {
    switch (error.response.status) {
      case 401:
        Alert.alert('Dükkan', 'Hatalı kullanıcı adı ya da şifre!');
        break;
      case 404:
        Alert.alert('Dükkan', 'Web sayfası/API yanıt vermiyor!');
        break;
      default:
        Alert.alert('Dükkan', 'Bilinmeyen ağ hatası!');
        break;
    }
  }

  if (!loading && data) {
    dispatch({type: 'SET_USER', payload: {user}});
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <FastImage
          style={styles.logo}
          source={require('../../assets/login_logo.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <Formik
        initialValues={{username: '', email: '', password: ''}}
        validationSchema={SignupSchema}
        onSubmit={formValues => handleLogin(formValues)}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <View style={styles.body_container}>
            <ScrollView>
              <Input
                iconName="account"
                placeholder="Kullanıcı adını giriniz..."
                onType={handleChange('username')}
                value={values.username}
              />
              {errors.username && touched.username ? (
                <Text style={styles.error}>{errors.username}</Text>
              ) : null}
              <Input
                iconName="email-outline"
                placeholder="Email adresi giriniz..."
                onType={handleChange('email')}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <Text style={styles.error}>{errors.email}</Text>
              ) : null}
              <Input
                isSecure={true}
                iconName="key-outline"
                placeholder="Şifrenizi giriniz..."
                onType={handleChange('password')}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <Text style={styles.error}>{errors.password}</Text>
              ) : null}
              <Button
                title="Giriş Yap"
                onPress={handleSubmit}
                loading={loading}
              />
            </ScrollView>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

const user = {
  address: {
    geolocation: {
      lat: '40.3467',
      long: '-30.1310',
    },
    city: 'Cullman',
    street: 'Frances Ct',
    number: 86,
    zipcode: '29567-1452',
  },
  id: 3,
  email: 'kevin@gmail.com',
  username: 'kevinryan',
  password: 'kev02937@',
  name: {
    firstname: 'kevin',
    lastname: 'ryan',
  },
  phone: '1-567-094-1345',
  __v: 0,
};
