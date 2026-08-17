import ActionButton from '@/components/action-button';
import StudentCard from '@/components/cart-student';
import Header from '@/components/header';
import ProfileCard from '@/components/profile-card';
import SearchField from '@/components/search-field';
import { ScrollView, StyleSheet } from 'react-native';


export default function Homework() {
  return (
    <ScrollView 
    style={{
        backgroundColor : "#fff"
    }}
      >
    <Header />
    <ScrollView
        alwaysBounceVertical={false}
      > 

    <ProfileCard />
    <SearchField />

    <StudentCard />

    <ActionButton text='Save profile' />
    </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
