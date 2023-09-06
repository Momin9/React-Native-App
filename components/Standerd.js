import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground
} from 'react-native';

const CalculatorApp = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      evaluateExpression();
    } else if (value === 'C') {
      clearExpression();
    } else if (value === '<-') {
      deleteLastCharacter();
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const evaluateExpression = () => {
    try {
      const result = eval(expression);
      setResult(result.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearExpression = () => {
    setExpression('');
    setResult('');
  };

  const deleteLastCharacter = () => {
    setExpression((prevExpression) =>
      prevExpression.slice(0, prevExpression.length - 1)
    );
  };

  const renderButtons = () => {
    const buttons = [
      [ '<-', 'C', '+/-', '%'],
      ['7', '8', '9', '*'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '=', '/'], // Added <- for back button
    ];

    return buttons.map((row, rowIndex) => (
      <View key={`row-${rowIndex}`} style={styles.buttonRow}>
        {row.map((button) => (
          <TouchableOpacity
            key={button}
            style={styles.button}
            onPress={() => handleButtonPress(button)}
          >
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    ));
  };

  return (
    <ImageBackground source={require('./light-cb-editing-new-background-download-full-hd-11663607132cgs2zpktlv.jpg')} style={styles.container}>
      <Text style={styles.namestyle}>Developed By Momin Ali</Text>
      <View style={styles.expressionContainer}>
        <TextInput style={styles.expressionText}>{expression}</TextInput>
      </View>
      <View style={styles.resultContainer}>
        <TextInput style={styles.resultText}>{result}</TextInput>
        <Text></Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.buttonsContainer}>{renderButtons()}</View>
      </ScrollView>
      <Text style={styles.namestyle1}>Simple Calculator App Design By Momin Ali  Date:22 June 2023</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  expressionContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'flex-end',
    backgroundColor: 'rgba(255,255,255, .5)',
    width:400,
    alignSelf: "center",
    borderTopColor: "#fff",
    borderBottomColor: 'rgba(255,255,255, .5)',
    borderLeftColor: "#fff",
    borderRightColor: "#fff",
    borderWidth: 2
  },
  expressionText: {
    fontSize: 32,
    color: '#FFF',
    fontWeight: 'bold',
  },
  resultContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'flex-end',
    backgroundColor: 'rgba(255,255,255, .6)',
    borderTopColor: "rgba(255,255,255, .5)",
    width:400,
    alignSelf: "center",
    borderBottomColor: '#fff',
    borderLeftColor: "#fff",
    borderRightColor: "#fff",
    borderWidth: 2
  },
  resultText: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'white',
  },
  scrollViewContainer: {
    flexGrow: 2,
    justifyContent: 'center',
  },
  buttonsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: 80,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255, .5)',
    borderRadius: 40,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  namestyle:{
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: "center",
    padding: 15
  },
  namestyle1:{
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: "center",
    backgroundColor : "rgba(255,255,255, .5)"
  }
});

export default CalculatorApp;
