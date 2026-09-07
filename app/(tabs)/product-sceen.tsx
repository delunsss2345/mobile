import React, { memo, useCallback, useMemo, useState } from 'react';
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

type Item = {
    id : string , 
    name : string, 
    price : number 
}

const products = [
    { id: '1', name: 'Áo thun', price: 200000 },
    { id: '2', name: 'Quần jean', price: 450000 },
    { id: '3', name: 'Giày thể thao', price: 800000 },
];
  
const ProductItem = memo(({ item , onSelect } : {
    item : Item , 
    onSelect : (item : Item) => void
}) => {
    
  return (
    <Button
      title={`${item.name} - ${item.price.toLocaleString("vi-VN")}đ`}
      onPress={() => onSelect(item)}
    />
  );
});

export default function ProductScreen() {
  const [keyword, setKeyword] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [upPrice , setUpPrice] = useState(false) ; 
  const [downPrice , setDownPrice] = useState(false) ; 


  const filteredProducts = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase();

    return products.filter(product =>
      product.name.toLowerCase().includes(normalizedKeyword)
    );
  }, [keyword, products]);

  const handleSelectProduct = useCallback((product : Item)  => {
    setSelectedName(product.name);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Tìm sản phẩm"
        style={styles.input}
      />
      <Button title='Tang dan' onPress={() =>setUpPrice(true)} />
      <Button title='Giam dan'onPress={() =>setDownPrice(true)} />
      <Text>Sản phẩm đã chọn: {selectedName || 'Chưa chọn'}</Text>
        
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProductItem item={item} onSelect={handleSelectProduct} />
        )}
        ListEmptyComponent={<Text>Không tìm thấy sản phẩm</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    padding: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 8,
    padding: 12,
  },
});
