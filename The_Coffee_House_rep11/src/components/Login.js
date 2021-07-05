import React, { useEffect, useState } from 'react'
import { View, Text, Modal, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { login, verifyCode } from '../reducers/authReducer'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Login(props) {
  const dispatch = useDispatch();
  const [isSubmitPhone, setIsSubmitPhone] = useState(false);
  const [phone, setPhone] = useState();
  const [code, setCode] = useState();
  const { isOpen, onclose } = props;
  const userInfo = useSelector((store) => store.authReducer.userInfo);
  useEffect(() => {
    // userInfo && onclose && onclose()
    if (userInfo) {
      onclose && onclose()
    }
  }, [userInfo])
  const onChangePhone = (value) => {
    // setAccount(prev => ({ ...prev, [type]: value }))
    setPhone(value)
  }

  const onChangeCode = (value) => {
    setCode(value)
  }
  const handleLogin = () => {
    // call api here
    setIsSubmitPhone(true)
    phone ? dispatch(verifyCode({ phone, otp: code })) : dispatch(login({ phone }))
  }

  const handleClose = () => onclose && onclose()

  return (
    <Modal visible={isOpen} animationType="slide">
      <ImageBackground style={{ width: '100%', height: 360, borderRadius: 9 }} resizeMode="cover" source={{ uri: 'https://static.riviu.co/image/2020/06/03/5be153668575539e60e242cde7ad44d3_output.jpeg' }} />
      <TouchableOpacity onPress={handleClose} style={{ position: 'absolute', right: 10, top: 10 }}>
        <Ionicons name="close-circle" size={40} style={{ color: 'white' }} />
      </TouchableOpacity>
      <View style={{ width: '100%', height: 250, marginTop: 280, position: 'absolute', backgroundColor: 'white', borderRadius: 35 }}>
        <View style={{ marginTop: 30, alignItems: 'center' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#848484' }}>Chào mừng các bạn đến với</Text>
          <Image
            source={require('../assets/Icon/thecoffee.png')}
            style={{
              width: '70%',
              height: 30,
              marginTop: 3
            }} />
        </View>
        <View>
          {!isSubmitPhone ?
            <View style={{ width: '90%', height: 50, marginTop: 20, alignSelf: 'center', flexDirection: 'row', borderWidth: 1, borderColor: '#A4A4A4', borderRadius: 9 }}>
              <View style={{ alignSelf: 'center', flexDirection: 'row', borderRightWidth: 1, borderRightColor: '#A4A4A4' }}>
                <Image
                  source={require('../assets/Icon/vietnam.png')}
                  style={{
                    width: '25%',
                    height: 20,
                    marginTop: 3,
                    marginLeft: 10
                  }} />
                <Text style={{ fontSize: 16, }}>+84</Text>
              </View>
              <TextInput
                style={{
                  height: 40,
                  width: '90%',
                  margin: 12,
                  alignSelf: 'center'
                }}
                onChangeText={onChangePhone}
                value={phone}
                placeholder="Nhập số điện thoại"
              />
            </View>
            :
            <View style={{ width: '100%' }}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeCode}
                value={code}
                placeholder="Nhập số mã"
              />
            </View>
          }
          <TouchableOpacity style={styles.btn} onPress={handleLogin}>
            <Text style={{ fontSize: 18, color: 'white' }}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '90%', height: 50, marginTop: 15, flexDirection: 'row', alignSelf: 'center' }}>
          <Image
            source={require('../assets/Icon/line.png')}
            style={{
              width: '40%',
              height: 7,
              marginTop: 7,
              marginRight: 5
            }} />
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#BDBDBD' }}>HOẶC</Text>
          <Image
            source={require('../assets/Icon/line.png')}
            style={{
              width: '40%',
              height: 7,
              marginTop: 7,
              marginLeft: 5,
            }} />
        </View>
        <TouchableOpacity style={{ width: '90%', height: 50, borderRadius: 9, backgroundColor: '#5858FA', flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
          <Entypo name="facebook-with-circle" size={30} style={{ color: 'white', marginLeft: 60 }} />
          <Text style={{ fontSize: 18, marginLeft: 10, color: 'white' }}>Tiếp tục bằng Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '90%', height: 50, marginTop: 10, borderRadius: 9, borderWidth: 1, borderColor: '#A4A4A4', flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
          <Image
            source={require('../assets/Icon/google.png')}
            style={{
              width: '10%',
              height: 25,
              marginLeft: 60,
            }} />
          <Text style={{ fontSize: 18, marginLeft: 10, color: 'black' }}>Tiếp tục bằng Google</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '90%',
    borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#A4A4A4',
    borderRadius: 9
  },
  btn: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 9,
    backgroundColor: '#BDBDBD'
  },
  btnClose: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: 5,
    right: 0,
  }
});
