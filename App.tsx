import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import { styles } from './src/components/Estilo';
import useCalculator from './src/components/useCalculator';


export default function App() {
  const { displayValue, addDigit, clear, addOperation, history } = useCalculator();

  return (
    <View style={styles.container}>
      {/* Área superior: Display e Histórico */}
      <View style={styles.topArea}>
        <Text style={styles.display}>{displayValue}</Text>

        <View style={styles.history}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {history.map((h, i) => (
              <Text key={i} style={styles.historyText}>{h}</Text>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Área inferior: Teclado da calculadora */}
      <View style={styles.keypadArea}>
        <View style={styles.buttonsRow}>
          <Button onPress={clear} customStyle={styles.buttonClear}>AC</Button>
          <Button onPress={() => addOperation('/')} customStyle={''}>÷</Button>
        </View>
        <View style={styles.buttonsRow}>
          <Button onPress={() => addDigit('7')} customStyle={''}>7</Button>
          <Button onPress={() => addDigit('8')} customStyle={''}>8</Button>
          <Button onPress={() => addDigit('9')} customStyle={''}>9</Button>
          <Button onPress={() => addOperation('*')} customStyle={styles.buttonOperation}>x</Button>
        </View>
        <View style={styles.buttonsRow}>
          <Button onPress={() => addDigit('4')} customStyle={''}>4</Button>
          <Button onPress={() => addDigit('5')} customStyle={''}>5</Button>
          <Button onPress={() => addDigit('6')} customStyle={''}>6</Button>
          <Button onPress={() => addOperation('-')} customStyle={styles.buttonOperation}>-</Button>
        </View>
        <View style={styles.buttonsRow}>
          <Button onPress={() => addDigit('1')} customStyle={''}>1</Button>
          <Button onPress={() => addDigit('2')} customStyle={''}>2</Button>
          <Button onPress={() => addDigit('3')} customStyle={''}>3</Button>
          <Button onPress={() => addOperation('+')} customStyle={styles.buttonOperation}>+</Button>
        </View>
        <View style={styles.buttonsRow}>
          <Button onPress={() => addDigit('0')} customStyle={{ flex: 2 }}>0</Button>
          <Button onPress={() => addDigit('.')} customStyle={''}>.</Button>
          <Button onPress={() => addOperation('=')} customStyle={styles.buttonEqual}>=</Button>
        </View>
      </View>
    </View>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
*/
