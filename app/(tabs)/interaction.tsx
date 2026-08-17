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
  const [isDeleting, setIsDeleting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    Alert.alert('Thành công', 'Thông tin của bạn đã được gửi đi.');
    
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };
  const handleDelete = () => {
    setIsDeleting(true);
    Alert.alert('Thành công', 'Dữ liệu đã được xóa.');
    
    setTimeout(() => {
      setIsDeleting(false);
    }, 2000);
  };
 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonWrapper}>
        <PressibleButton text='Xac nhan' textLoading='Dang xac nhan'  handleSubmit={handleSubmit}  isSubmitting={isSubmitting} />
        <PressibleButton style={{ backgroundColor: '#EF4444' }} text='Xoa' textLoading='Dang Xoa'  handleSubmit={handleDelete}  isSubmitting={isDeleting} />
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
