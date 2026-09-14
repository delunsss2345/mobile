import { useEffect, useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";


export interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface ProductReview {
  rating: number;
  comment: string;
  date: string; 
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductMeta {
  createdAt: string; 
  updatedAt: string; 
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: ProductDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta;
  images: string[];
  thumbnail: string;
}



const Bai11 = () => {
    const [data, setData] = useState<Product[] | null>() ; 
    const [query , setQuery] = useState<string | null>('') ; 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=10`) ; 
                if(!response.ok) throw Error('Fetch failed') ; 

                const {products} = await response.json();

                setData(products as Product[]) ; 
            }
            catch(error) {
                console.log(error) ; 
            }  
        } 
        fetchProducts() ; 
    }, [query])

    return (
       <>
       <TextInput placeholder="Nhap" onChangeText={setQuery} />
        <FlatList 
            data={data} 
            renderItem={({ item }) => (
            <View >
                <Text style={
                    {
                        color: "blue"
                    }
                } >{item.title}</Text>
                <Text style={
                    {
                        color: "blue"
                    }
                } >{item.discountPercentage}</Text>
            </View>
            )} 
            keyExtractor={item =>String(item.id)}
        />
       </>
        );

}

export default Bai11 ; 