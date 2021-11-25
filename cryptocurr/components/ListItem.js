import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = ({name, symBol, currentPrice, priceChangePercentage7d, logoURL}) => {
  const priceChangeColor = priceChangePercentage7d>0 ? '#34C759':
'#FF3B30'  ; 
return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        {/*left side */}
        <View style={styles.leftWrapper}>
          <Image source={{ uri: logoURL }} style={styles.image} />
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subTitle}>{symBol.toUpperCase()}</Text>
          </View>
        </View>
        {/*right side */}
        <View style={styles.rigthWrapper}>
          <Text style={styles.title}>${currentPrice.toLocaleString('en-US', {currency:'USD'})}</Text>
          <Text style={[styles.subTitle, { color: priceChangeColor }]}>{priceChangePercentage7d.toFixed(2)}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper:{
    paddingHorizontal:16,
    marginTop:24,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center',
  },
  leftWrapper:{
    flexDirection: "row",
    alignItems:'center',

  },
  titlesWrapper: {
    marginLeft: 8,

  },
  rigthWrapper: {
    alignItems: 'flex-end'
  },
  title: {
    fontSize:18,
  },
  subTitle: {
    marginTop:4,
    fontSize:14,
    color:'#a9abb1',
  },
  image:{
    height:48 ,
    width:48 ,
  }
});

export default ListItem;
