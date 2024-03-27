import React from "react";
import { StyleSheet, View, Text,  } from "react-native";

const ExpenseContent = (transactions) => {
    return (
        <View>
            <View>
                <Text>{transactions.place}</Text>
                <Text>{transactions.amount}</Text>
                <Text>{transactions.date}</Text>
                <Text>{transactions.address}</Text>
            </View>
        </View>
    )
}
export default ExpenseContent;
