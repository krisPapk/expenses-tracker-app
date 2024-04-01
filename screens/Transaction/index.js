import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import TransactionList from '../../components/TransactionList';
import { useNavigation } from '@react-navigation/native'; 
import Summary from '../Summary';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebaseConfig';

const Transactions = () => {
  const navigation = useNavigation(); 
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [];
      const querySnapshot = await getDocs(collection(db, 'expenses'));
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setTransactions(data);
    };

    fetchData();
  }, []);

  const handleTransactionPress = (transaction) => {
    navigation.navigate('TransactionDetails', { transaction });
  };

  return (
    <View>
      <TransactionList transactionData={transactions} onPress={handleTransactionPress} />
    </View>
  );
};

export default Transactions;
