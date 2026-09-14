import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";


type Post = {
    userId: string,
    id: number,
    title: string ,
    body : string
}


const Bai9 = () => {
    const [data, setData] = useState<Post[] | null>() ; 


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts') ; 
                if(!response.ok) throw Error('Fetch failed') ; 

                const data = await response.json();

                setData(data as Post[]) ; 
            }
            catch(error) {
                console.log(error) ; 
            }  
        } 
        fetchPosts() ; 
    }, [])

    return (
        <FlatList 
            data={data} 
            renderItem={({ item }) => (
            <View >
                <Text style={
                    {
                        color: "blue"
                    }
                } >{item.title}</Text>
            </View>
            )} 
            keyExtractor={item =>String(item.id)}
        />
        );

}

export default Bai9 ; 