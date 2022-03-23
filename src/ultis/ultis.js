import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@account', jsonValue)
    } catch (e) {
        console.log(e);
    }
  }

  export  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@account')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log(e);
    }
  }