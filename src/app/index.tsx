import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

const Home = () => {
    const router = useRouter();
    return <View>
        <Text>
            Trang chu
        </Text>
        <Button title="See movies" onPress={() => router.push("/movies")} />
    </View>
}
 
export default Home;