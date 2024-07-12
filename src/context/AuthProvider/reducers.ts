import AsyncStorage from "@react-native-async-storage/async-storage";

const reducers = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      const {user} = action.payload;
      AsyncStorage.setItem('@USER', JSON.stringify(user));
      return {...state, user};
    case 'REMOVE_USER':
      AsyncStorage.removeItem('@USER');
      return {...state, user: null};
    default:
      return state;
  }
};

export default reducers;
