import { Ionicons } from "@expo/vector-icons";
import { memo, useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { homeStyles } from "../styles/homeStyles";
import DataItem from "./FlatItem";


const SearchableList = ({ data, favouriteData, setFavouriteData, expanded, setExpanded,resetExpanded = false }: any) => {
  interface Item {
    id: number,
    Instruction: string,
    Output: string
  }
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((item: Item) =>
    item.Instruction.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFavourite = (item: Item) => {
    const isFavourite = favouriteData.some((data: Item) => data.id === item.id);
    if (isFavourite) {
      setFavouriteData(favouriteData.filter((data: Item) => data.id !== item.id));
    } else {
      setFavouriteData([...favouriteData, item]);
    }
    if(resetExpanded){
      setExpanded(null)
    }
  };

  return (
    <View style={homeStyles.container}>
      <FlatList
        style={homeStyles.flatList}
        data={filteredData}
        renderItem={({ item, index }) => (
          <DataItem
            item={item}
            index={index}
            favouriteData={favouriteData}
            expanded={expanded}
            setExpanded={setExpanded}
            toggleFavourite={toggleFavourite}
          />
        )}
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

export default memo(SearchableList);