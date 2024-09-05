import { Platform, StyleSheet,Dimensions } from "react-native";
const { width, height } = Dimensions.get('window'); // Screen size information
export const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingTop: Platform.OS === 'web' && width > 600 ? 70 : 0,
    },
    search: { width: 150, color: "#067528" },
    searchContainer: {
      padding: 8,
      flexDirection: "row",
      position:"absolute",
      bottom:25,
      backgroundColor:'white',
      borderRadius:16,
      borderWidth:2,
      borderColor:"#067528"
    },
    icon: { position: "absolute", bottom: 0, right: 0 },
    outputContainer: {
      padding: 8,
      borderWidth: 2,
      borderRadius: 25,
      backgroundColor: "white",
    },
    instruction: { fontSize: 16, fontWeight: "700", color: "#067528" },
    instructionHolder: {
      marginBottom: 8,
    },
    item: { padding: 12, flexDirection: "row",marginRight:25},
    id: { marginRight: 10, fontSize: 16, fontWeight: "500" },
    output: { marginBottom: 10},
    flatList:{width:"100%"}
  });
  