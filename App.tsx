import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import { styles } from './src/components/Estilo';


export default function App() {
  const history = ['1+2 = 10', '3x4', '5-6', '7÷8', '7÷8', '7÷8', '7÷8'];
  return (
    <View style={styles.container}>
      <Text style={styles.display}>display</Text>

      <View style={styles.history}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {history.map((h, i) => (
            <Text key={i} style={styles.historyText}>{h}</Text>
          ))}
        </ScrollView>
      </View>

      <View style={styles.buttonsRow}>
        <Button onPress={() => console.log('ac')} customStyle={styles.buttonClear}>AC</Button>
        <Button onPress={() => console.log('/')} customStyle={''}>÷</Button>
      </View>
      <View style={styles.buttonsRow}>
        <Button onPress={() => console.log('7')} customStyle={''}>7</Button>
        <Button onPress={() => console.log('8')} customStyle={''}>8</Button>
        <Button onPress={() => console.log('9')} customStyle={''}>9</Button>
        <Button onPress={() => console.log('x')} customStyle={styles.buttonOperation}>x</Button>
      </View>
      <View style={styles.buttonsRow}>
        <Button onPress={() => console.log('4')} customStyle={''}>4</Button>
        <Button onPress={() => console.log('5')} customStyle={''}>5</Button>
        <Button onPress={() => console.log('6')} customStyle={''}>6</Button>
        <Button onPress={() => console.log('-')} customStyle={styles.buttonOperation}>-</Button>
      </View>
      <View style={styles.buttonsRow}>
        <Button onPress={() => console.log('1')} customStyle={''}>1</Button>
        <Button onPress={() => console.log('2')} customStyle={''}>2</Button>
        <Button onPress={() => console.log('3')} customStyle={''}>3</Button>
        <Button onPress={() => console.log('+')} customStyle={styles.buttonOperation}>+</Button>
      </View>
      <View style={styles.buttonsRow}>
        <Button onPress={() => console.log('0')} customStyle={{ flex: 3 }}>0</Button>
        <Button onPress={() => console.log('.')} customStyle={''}>.</Button>
        <Button onPress={() => console.log('=')} customStyle={styles.buttonEqual}>=</Button>
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
