import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const TransactionList = ({ transactions, onPress }) => {

  const renderTransactionItem = ({ item }) => (
    <TouchableOpacity style={styles.transactionItem} onPress={() => onPress(item)}>
      <View style={styles.transactionDetails}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>
      <AntDesign name="right" size={24} color="black" />
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={transactions}
      renderItem={renderTransactionItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};



export default TransactionList;
