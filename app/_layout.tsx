import { Stack } from "expo-router";
import { AppProvider } from './context/AppContext'
import { View } from "react-native";


export default function RootLayout() {

  return (
    <View style={{flex:1,width:"100%",maxWidth:800,alignSelf:"center"}}>
      <AppProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </AppProvider>
    </View>

  );
}
