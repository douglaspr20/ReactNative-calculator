import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  bigbutton?: boolean;
  action: (value: string) => void;
}

const ButtonCalc: FC<Props> = ({
  text,
  color = '#2D2D2D',
  bigbutton,
  action,
}) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.button,
          backgroundColor: color,
          width: bigbutton ? 180 : styles.button.width,
          paddingLeft: bigbutton ? 25 : 0,
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.buttonText,
            color: color === '#9B9B9B' ? 'black' : 'white',
            textAlign: bigbutton ? 'left' : styles.buttonText.textAlign,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCalc;
