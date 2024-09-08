import { Platform, Text, TouchableOpacity, View } from "react-native";
import { homeStyles } from "../styles/homeStyles"
import { Ionicons } from "@expo/vector-icons";
import { memo } from "react";

const DataItem = ({ item, index, favouriteData, expanded, setExpanded, toggleFavourite }: any) => {
  const isFavourite = favouriteData.some((data: any) => data.id === item.id);
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

export default memo(DataItem);