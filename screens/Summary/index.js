import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from '../../firebaseConfig';

const Summary = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'expenses'), (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setTransactions(data);
    });

    return () => unsubscribe();
  }, []);

  // Calculate summary information
  const totalTransactions = transactions.length;
  const totalBalance = transactions.reduce((acc, cur) => acc + parseFloat(cur.amount.replace('$', '')), 0);
  const highestSpending = Math.max(...transactions.map(transaction => parseFloat(transaction.amount.replace('$', ''))));
  const lowestSpending = Math.min(...transactions.map(transaction => parseFloat(transaction.amount.replace('$', ''))));

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Transaction Summary</Text>
      <View style={styles.summaryItem}>
        <Text>Total Transactions: {totalTransactions}</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text>Total Balance: ${totalBalance.toFixed(2)}</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text>Highest Spending: ${highestSpending.toFixed(2)}</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text>Lowest Spending: ${lowestSpending.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default Summary;
