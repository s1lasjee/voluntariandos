import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

import colors from '../../styles/colors';
import styles from './styles';

interface Props {
  onChangeText?: (((text: string) => void) & Function) | undefined;
  value?: string;
  label?: string;
  secureText?: boolean;
  spellCheck?: boolean;
  maxLength?: number;
  maks?: string | undefined;
  autoCorrect?: boolean;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad'
    | 'visible-password'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search'
    | undefined;
}

const Input: React.FC<Props> = ({
  value,
  onChangeText,
  secureText,
  spellCheck,
  label,
  maxLength,
  autoCorrect,
  keyboardType,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          label={label}
          value={value}
          onChangeText={onChangeText}
          theme={{
            colors: {
              primary: colors.light,
              text: colors.gray2,
              placeholder: colors.light,
              background: colors.primary,
            },
          }}
          mode="outlined"
          keyboardType={keyboardType}
          autoCorrect={autoCorrect}
          style={styles.input}
          maxLength={maxLength}
          placeholderTextColor={colors.gray2}
          secureTextEntry={secureText}
          spellCheck={spellCheck}
        />
      </View>
    </View>
  );
};

export default Input;
