import PressibleButton from '@/components/pressible-button';
import React, { useState } from 'react';
import {
    Alert,
    SafeAreaView,
    StyleSheet,
    View
} from 'react-native';

export default function ActionButtons() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    Alert.alert('Thành công', 'Thông tin của bạn đã được gửi đi.');
    
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  const handleCancel = () => {
    Alert.alert('Hủy bỏ', 'Bạn đã hủy thao tác.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonWrapper}>
        <PressibleButton  handleSubmit={handleSubmit}  isSubmitting={isSubmitting} />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 24,
    gap: 16, 
  },
});
