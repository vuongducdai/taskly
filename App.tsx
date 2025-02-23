import { StyleSheet, Text, View } from "react-native";
import { theme } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.itemContainer}>Item 1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
});
