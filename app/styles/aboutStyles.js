import { StyleSheet } from "react-native";

export const aboutStyles = StyleSheet.create({
    root:{ flex: 1, paddingTop: 70, backgroundColor: "white" },
    header:{ flexDirection: "row", justifyContent: "space-around" },
    headerLeft:{ alignItems: "center", justifyContent: "center" },
    profile:{ width: 100, height: 100, borderRadius: 50 },
    title: {
      fontSize: 16,
      fontWeight: "700",
      marginBottom: 15,
      letterSpacing: 2.5,
    },
    headerTitle:{ fontSize: 16, marginBottom: 20, fontFamily: "CustomFont" },
    headerSubTitle:{ fontSize: 16, fontFamily: "CustomFont" },
    container:{ padding: 20 },
    link: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      marginTop: 10,
    },
    linkText:{ fontSize: 16, color: "blue" }
  });
  