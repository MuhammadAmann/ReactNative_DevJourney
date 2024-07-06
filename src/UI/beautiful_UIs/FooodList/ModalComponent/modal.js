import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {styles} from './style';

const OrderConfirmationModal = ({
  isVisible,
  onBackdropPress,
  itemPrice,
  totalBill,
  totalItems,
  confirmOrder,
  itemName,
}) => {
  return (
    <Modal
      style={styles.modal}
      onBackdropPress={onBackdropPress}
      isVisible={isVisible}>
      <View style={styles.mainView}>
        <View style={styles.heading}>
          <Text style={styles.orderDetail}>Order Details</Text>
        </View>
        <View style={styles.itemPrice}>
          <Text style={styles.item}>Food Name</Text>
          <Text style={styles.item}>{itemName || 'Item Name'}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.itemPrice}>
          <Text style={styles.item}>Item Price</Text>
          <Text style={styles.item}>$ {itemPrice || '00'}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.itemPrice}>
          <Text style={styles.item}>Total Items</Text>
          <Text style={styles.item}>{totalItems || '0'}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.itemPrice}>
          <Text style={styles.item}>Total Bill </Text>
          <Text style={styles.item}>$ {totalBill || '00'}</Text>
        </View>
        <View style={styles.line}></View>
        <TouchableOpacity onPress={confirmOrder} style={styles.confirmButton}>
          <Text style={styles.comfirm}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default OrderConfirmationModal;
