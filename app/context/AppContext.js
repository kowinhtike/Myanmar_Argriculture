// app/AppContext.js
import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [favouriteData, setFavouriteData] = useState([]);

  useEffect(() => {
    const loadFovouriteData = async () => {
      //await AsyncStorage.removeItem('favourite');
      const loaded_data = await AsyncStorage.getItem("favourite");
      if (loaded_data) {
        setFavouriteData(JSON.parse(loaded_data));
      } else {
        setFavouriteData([]);
      }
    };
    loadFovouriteData();
  }, []);

  useEffect(() => {
    const saveFavouriteData = async () => {
      await AsyncStorage.setItem("favourite", JSON.stringify(favouriteData));
    };
    saveFavouriteData();
  }, [favouriteData]);

  return (
    <AppContext.Provider value={{ favouriteData, setFavouriteData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
