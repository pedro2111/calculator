import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e", // dark theme
    padding: 16,
    justifyContent: "space-between", // Mudança para distribuir espaço entre topo e base
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
    flex: 1, // Agora usa flex para ocupar o espaço disponível
    backgroundColor: "#252526",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    maxHeight: '30%', // Limita a altura máxima
},

  historyText: {
    color: "#aaa",
    fontSize: 16,
    marginVertical: 2,
  },

  topArea: {
    flex: 1,
    justifyContent: "flex-start",
  },

  keypadArea: {
    marginTop: 'auto', // Empurra para o final do container
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
