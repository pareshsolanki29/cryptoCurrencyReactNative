import * as React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import ListItem from './components/ListItem';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { SAMPLE_DATA } from './assets/data/sampleData';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {getData} from './services/getCryptoService';
const ListHeader = () => {
  return(
    <>
     <View style={styles.titleWrapper}>
        <Text style={styles.title}> Crypto </Text>
      </View>
      <View style={styles.divider} />
  </>
  )
}
export default function App() {

  const [data, setData] = useState([])


  useEffect(()=>{
    const fetchMarketData =async ()=>{
      const marketData = await getData();
      setData(marketData);
    }
    fetchMarketData();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
 

      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem = {({ item }) => (
          <ListItem
            name = {item.name}
            symBol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage7d={
            item.price_change_percentage_7d_in_currency
            }
            logoURL={item.image}
          />
        )}
        ListHeaderComponent = { <ListHeader /> }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleWrapper: {
    marginTop: 80,
    paddingHorizontal: 16,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#a9abb1',
    marginHorizontal: 16,
    marginTop: 16,
  },
});
