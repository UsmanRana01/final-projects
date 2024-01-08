import React from 'react'
import { View, Text } from 'react-native'

const RowText = (props) => {
    const {containerStyles, msgOneStyles, msgTwoStyles, msgOne, msgTwo} = props;
  return (
    <View style={containerStyles}>
      <Text style={msgOneStyles}>{msgOne} </Text>
      <Text style={msgTwoStyles}>{msgTwo}</Text>
    </View>
  );
}

export default RowText
