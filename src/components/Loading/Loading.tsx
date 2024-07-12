import LottieView from 'lottie-react-native';
import React from 'react';

const Loading = () => {
  return (
    <LottieView
      style={{flex: 1}}
      source={require('../../assets/loading_paper_plane.json')}
      autoPlay
    />
  );
};

export default Loading;
