import React, { useEffect } from 'react';
import { View } from 'react-native';
import TransactionList from '../../components/TransactionList';
import { useNavigation } from '@react-navigation/native'; 
import Summary from '../Summary';

const Transactions = () => {
  const navigation = useNavigation(); 
  useEffect(() => {
    navigation.navigate('Summary', { transactions });
  }, []);

  const transactions = [
    { id: 1, description: 'Groceries', amount: '$50.00',  date: "15.01.2024",
    address: "123 Main St, Anytown, USA" },
    { id: 2, description: 'Dinner', amount: '$80.00',  date: "18.01.2024",
    address: "456 Elm St, Another Town, USA"},
    { id: 3, description: 'Shopping', amount: '$120.00',date: "22.01.2024",
    address: "789 Oak St, Somewhere, USA" },
    { id: 4, description: 'Burger King', amount: '$26.60', date: "03.02.2024",
    address: "321 Maple St, Anytown, USA" },
    { id: 5, description: 'Sephora', amount: '$30.00', date: "10.02.2024",
    address: "654 Pine St, Another Town, USA" },
    { id: 6, description: 'Shopping', amount: '$330.00', date: "15.02.2024",
    address: "987 Cedar St, Somewhere, USA" },
    { id: 7, description: 'Dinner', amount: '$30.00', date: "22.02.2024",
    address: "234 Walnut St, Anytown, USA" },
    { id: 8, description: 'Rent', amount: '$1700.00', date: "05.03.2024",
    address: "543 Birch St, Another Town, USA" },
    { id: 9, description: 'Insurance', amount: '$270.00', date: "12.03.2024",
    address: "876 Spruce St, Somewhere, USA" },
    { id: 10, description: 'Dinner', amount: '$30.00',date: "20.03.2024",
    address: "135 Fir St, Anytown, USA" },
  ];

  const handleTransactionPress = (transaction) => {
    navigation.navigate('TransactionDetails', {transaction});
  };

  return (
    <View>
      <TransactionList transactions={transactions} onPress={handleTransactionPress} />
      
    </View>
  );
};

export default Transactions;
