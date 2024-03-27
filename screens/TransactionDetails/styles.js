import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  transaction: {
    marginBottom: 20,
    alignItems:'center',

  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    color: '#555',
  },
  date: {
    fontSize: 16,
    color: '#888',
    marginTop: 20,
    
  },
});

export default styles;
