import { Ionicons } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import { AppContext } from "../context/AppContext";
import { homeStyles } from "../styles/homeStyles";

export default function Index() {
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { favouriteData, setFavouriteData } = useContext(AppContext);

  useEffect(() => {
    if (Platform.OS === "web") {
      document.title = "Myanmar Argriculture App";
    }
  }, []);

  useEffect(() => {
    const loadJsonData = async () => {
      const jsonUri = require("../../assets/data/Argriculture.json");
      setData(jsonUri);
    };
    loadJsonData();
  }, []);

  const filteredData = data.filter((item) =>
    item.Instruction.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFavourite = (item) => {
    const isFavourite = favouriteData.some((data) => data.id === item.id);
    if (isFavourite) {
      setFavouriteData(favouriteData.filter((data) => data.id !== item.id));
    } else {
      setFavouriteData([...favouriteData, item]);
    }
  };

  const renderItem = ({ item, index }) => {
    const isFavourite = favouriteData.some((data) => data.id === item.id);
    return (
      <View style={homeStyles.item} key={item.id}>
        <Text style={homeStyles.id}>{item.id}</Text>
        <View>
          <TouchableOpacity
            style={homeStyles.instructionHolder}
            onPress={() => setExpanded(expanded === index ? null : index)}
          >
            <Text style={homeStyles.instruction}>{item.Instruction} </Text>
          </TouchableOpacity>

          {expanded === index && (
            <View
              style={[
                homeStyles.outputContainer,
                isFavourite && { borderColor: "#067528" },
              ]}
            >
              <Text
                style={[
                  homeStyles.output,
                  Platform.OS === "web" && { width: 500 },
                ]}
              >
                {" "}
                {item.Output}{" "}
              </Text>
              <TouchableOpacity
                style={homeStyles.icon}
                onPress={() => {
                  toggleFavourite(item);
                }}
              >
                <Ionicons
                  name="heart"
                  size={30}
                  color={isFavourite ? "#067528" : "black"}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };
  return (
    <View style={homeStyles.container}>
      <FlatList
        style={homeStyles.flatList}
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        initialNumToRender={10}
        windowSize={5}
        maxToRenderPerBatch={20}
        removeClippedSubviews={true}
      />
      <View style={homeStyles.searchContainer}>
        <TextInput
          style={homeStyles.search}
          placeholder="ဒီနေရာမှာ ရှာပါ။"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity
          onPress={() => {
            setSearchQuery("");
          }}
        >
          <Ionicons name="close-outline" size={30} color="#067528" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
