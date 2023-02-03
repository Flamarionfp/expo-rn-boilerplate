import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box, Text } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box bg="gray.800" flex={1} justifyContent="center" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold" color="white">
          Hello Expo RN Boilerplate
        </Text>
        <StatusBar style="auto" />
      </Box>
    </NativeBaseProvider>
  );
}
