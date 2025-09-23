import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e", // dark theme
    padding: 16,
    justifyContent: "flex-start",
  },

  display: {
    backgroundColor: "#2d2d2d",
    color: "#fff",
    fontSize: 48,
    textAlign: "right",
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
  },

  history: {
  height: 80, // altura fixa (ajuste como preferir)
  backgroundColor: "#252526",
  borderRadius: 8,
  padding: 10,
  marginBottom: 10,
},

  historyText: {
    color: "#aaa",
    fontSize: 16,
    marginVertical: 2,
  },

  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  button: {
    flex: 1,
    backgroundColor: "#3c3c3c",
    padding: 20,
    margin: 4,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 24,
    color: "#fff",
  },

  buttonOperation: {
    backgroundColor: "#0078d4", // azul Windows
  },

  buttonEqual: {
    backgroundColor: "#0b7dda",
  },

  buttonClear: {
    backgroundColor: "#d13438", // vermelho
  },
});
