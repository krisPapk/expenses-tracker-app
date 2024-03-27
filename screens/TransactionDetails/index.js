import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function TransactionDetails({ route }) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.transaction}>
        <Text style={styles.amount}>{transaction.amount}</Text>
        <Text style={styles.description}>{transaction.description}</Text>
        <Text style={styles.address}>{transaction.address}</Text>
        <Text style={styles.date}>Transaction Date: {transaction.date}</Text>
      </View>
    </View>
  );
}
