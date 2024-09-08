import { useContext, useEffect, useState } from "react";
import { Platform } from "react-native";
import { AppContext } from "../context/AppContext";
import SearchableList from "../components/SearchableList";

export default function Index() {
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const { favouriteData, setFavouriteData } = useContext(AppContext);

  useEffect(() => {
    if (Platform.OS === "web") {
      document.title = "Myanmar Agriculture App";
    }
  }, []);

  useEffect(() => {
    const loadJsonData = async () => {
      const jsonUri = require("../../assets/data/Argriculture.json");
      setData(jsonUri);
    };
    loadJsonData();
  }, []);

  return (
    <SearchableList
      data={data}
      favouriteData={favouriteData}
      setFavouriteData={setFavouriteData}
      expanded={expanded}
      setExpanded={setExpanded}
    />
  );
}
