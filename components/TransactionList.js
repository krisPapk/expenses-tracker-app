import React, { useState, useEffect } from "react";
import { FlatList, View, Text,TextInput, TouchableOpacity, Modal, Alert, Button, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { Calendar } from 'react-native-calendars'; // Import the Calendar component
import moment from 'moment'; // Import moment.js for date formatting

import styles from './styles';
import { db } from '../firebaseConfig';

const TransactionList = ({ onPress }) => {
  const [transactions, setTransactions] = useState([]);
  const [place, setPlace] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState('');

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

  const addExpense = async () => {
    if (!place || !amount || !date || !address) {
      Alert.alert('Oops, error...', 'All fields are required.');
      return;
    }

    await addDoc(collection(db, 'expenses'), {
      place: place,
      amount: amount,
      date: date,
      address: address
    });
    setPlace('');
    setAmount('');
    setDate('');
    setAddress('');
    setModalVisible(false);
    setError('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.transactionItem} onPress={() => onPress(item)}>
            <View style={styles.transactionDetails}>
              <Text style={styles.description}>{item.place}</Text>
              <Text style={styles.amount}>{item.amount}$</Text>
            </View>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => item.id}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.headerModal}>Let's add new transaction!</Text>
            <TextInput
              style={styles.input}
              placeholder="Place"
              value={place}
              onChangeText={setPlace}
            />
            <TextInput
              style={styles.input}
              placeholder="Amount"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
             <TextInput
              style={styles.input}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />
            <Calendar
              style={styles.calendar}
              current={date}
              markedDates={{ [date]: { selected: true } }}
              onDayPress={(day) => setDate(day.dateString)}
            />
           
            <Button
              title="Add Expense"
              onPress={addExpense}
              style={styles.addExpenseButton} 
            />            
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>Add Expense</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionList;
