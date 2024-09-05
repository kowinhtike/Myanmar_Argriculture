import { Ionicons } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AppContext } from "../context/AppContext";
import { Platform } from "react-native";
import { homeStyles } from "../styles/homeStyles";


export default function Favourite() {
  const [expanded, setExpanded] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { favouriteData, setFavouriteData } = useContext(AppContext);

  const filteredData = favouriteData.filter((item) =>
    item.Instruction.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const removeFavourite = (item) => {
    setFavouriteData(favouriteData.filter((data) => data.id !== item.id));
  };

  const renderItem = ({ item, index }) => {
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
            <View style={[homeStyles.outputContainer]}>
              <Text
                style={[homeStyles.output, Platform.OS === "web" && { width: 500 }]}
              >
                {" "}
                {item.Output}{" "}
              </Text>
              <TouchableOpacity
                style={homeStyles.icon}
                onPress={() => {
                  removeFavourite(item);
                }}
              >
                <Ionicons name="heart" size={30} color="#067528" />
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: Platform.OS === "web" ? 50 : 0,
//   },
//   search: { width: 150, color: "#067528" },
//   searchContainer: {
//     padding: 8,
//     flexDirection: "row",
//     position: "absolute",
//     bottom: 25,
//     backgroundColor: "white",
//     borderRadius: 16,
//     borderWidth: 2,
//     borderColor: "#067528",
//   },
//   icon: { position: "absolute", bottom: 0, right: 0 },
//   outputContainer: {
//     padding: 8,
//     borderWidth: 2,
//     borderRadius: 25,
//     backgroundColor: "white",
//     borderColor: "#067528",
//   },
//   instruction: { fontSize: 16, fontWeight: "700", color: "#067528" },
//   instructionHolder: {
//     marginBottom: 8,
//   },
//   item: { padding: 12, flexDirection: "row",marginRight:25},
//   id: { marginRight: 10, fontSize: 16, fontWeight: "500"},
//   output: { marginBottom: 10 },
//   flatlist:{width:"100%"}
// });
