import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const Bai10 = () => {
  const [data, setData] = useState<User[] | null>();
  const [detail, setDetail] = useState<User | null>();
  const fetchUserDetail = async (id: string) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      if (!response.ok) throw Error("Fetch failed");

      const data = await response.json();

      setDetail(data as User);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) throw Error("Fetch failed");

        const data = await response.json();

        setData(data as User[]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={async () => fetchUserDetail(String(item.id))}>
            <View>
              <Text style={{ color: "blue" }}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => String(item.id)}
      />

      {detail && (
        <View
          style={{
            marginTop: 20,
            padding: 15,
            backgroundColor: "#f0f0f0",
            borderRadius: 8,
          }}>
          <Text style={{ fontWeight: "bold" }}>Chi tiết User đã chọn:</Text>
          <Text style={{ color: "black" }}>Tên: {detail.name}</Text>
          <Text style={{ color: "blue" }}>Email: {detail.email}</Text>
          <Text style={{ color: "black" }}>Điện thoại: {detail.phone}</Text>
        </View>
      )}
    </>
  );
};

export default Bai10;
