import React from 'react';
import { Text, View } from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import useCalculator from '../hooks/useCalculator';
import { styles } from '../theme/appTheme';

const CalculadoraScreen = () => {
  const {
    number,
    lastNumber,
    clear,
    postiveNegative,
    createNumber,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnAdd,
    btnSubtract,
    calc,
  } = useCalculator();
  return (
    <View style={styles.calculadoraContainer}>
      {lastNumber !== '0' && (
        <Text style={styles.resultSmall}>{lastNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit={true}>
        {number}
      </Text>

      <View style={styles.buttonRow}>
        <ButtonCalc text="C" color="#9B9B9B" action={clear} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={postiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" action={btnDelete} />
        <ButtonCalc text="/" color="#FF9427" action={btnDivide} />
      </View>

      <View style={styles.buttonRow}>
        <ButtonCalc text="7" action={createNumber} />
        <ButtonCalc text="8" action={createNumber} />
        <ButtonCalc text="9" action={createNumber} />
        <ButtonCalc text="X" color="#FF9427" action={btnMultiply} />
      </View>

      <View style={styles.buttonRow}>
        <ButtonCalc text="4" action={createNumber} />
        <ButtonCalc text="5" action={createNumber} />
        <ButtonCalc text="6" action={createNumber} />
        <ButtonCalc text="-" color="#FF9427" action={btnSubtract} />
      </View>

      <View style={styles.buttonRow}>
        <ButtonCalc text="1" action={createNumber} />
        <ButtonCalc text="2" action={createNumber} />
        <ButtonCalc text="3" action={createNumber} />
        <ButtonCalc text="+" color="#FF9427" action={btnAdd} />
      </View>

      <View style={styles.buttonRow}>
        <ButtonCalc text="0" bigbutton action={createNumber} />
        <ButtonCalc text="." action={createNumber} />
        <ButtonCalc text="=" color="#FF9427" action={calc} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
