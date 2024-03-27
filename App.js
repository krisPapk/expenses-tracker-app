import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Transactions from './screens/Transaction';
import TransactionDetails from './screens/TransactionDetails';
import Summary from './screens/Summary';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const TransactionsStack = () => {
    return (
      <Stack.Navigator
      initialRouteName='Transactions'
      >
        <Stack.Screen
          name="Transactions"
          component={Transactions}
         
        />
        <Stack.Screen
          name="TransactionDetails"
          component={TransactionDetails}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Transaction"
          component={TransactionsStack}
          options={{
            headerShown: false,
            tabBarLabel: "Transactions",
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Summary"
          component={Summary}
          options={{
            title: 'Summary',
            tabBarIcon: ({ color }) => (
              <Ionicons name="stats-chart" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
