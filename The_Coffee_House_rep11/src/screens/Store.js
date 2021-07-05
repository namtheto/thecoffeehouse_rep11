import React, { useEffect, useState } from "react";
import { Modal, FlatList, StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header_content';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getProductStore } from '../reducers/storeReducer';
import { useDispatch, useSelector } from "react-redux";

const Store = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const [storeSelected, setStoreSelected] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const productStore = useSelector((store) => store.storeReducer.productsStore);
  useEffect(() => {
    dispatch(getProductStore());
  }, [])
  const HeaderFl = () => {
    return (
      <View style={styles.back_time}>
        <Entypo name="back-in-time" size={23} style={styles.button_seach_icon} />
        <Text style={styles.back_time_text}>CÁC CỬA HÀNG KHÁC</Text>
      </View>
    )
  }
  const renderItem = ({ item }) => (
    <View style={styles.renderItem_view}>
      <TouchableOpacity style={styles.render_list} onPress={() => {
        setModalVisible(!modalVisible)
        setStoreSelected(item)
      }}>
        <Image style={styles.render_img} source={{ uri: item.image_1 }} />
        <View style={styles.render_group_text}>
          <Text style={styles.text_coffee}>THE COFFEE HOUSE</Text>
          <Text style={styles.text_address}>{item.address.full_address}</Text>
          <Text style={styles.text_far}>{item.far}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View>
      <View style={[styles.header_content]}>
        <Header />
        <View style={{ flexDirection: 'row', }}>
          <View style={styles.seach_content}>
            <Entypo name="magnifying-glass" size={23} style={styles.button_seach_icon} />
            <TextInput style={styles.seach_input}
              onChangeText={onChangeText}
              value={number}
              placeholder="Nhập tên đường,quận..."
            />
          </View>
          <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('PlacesMaps')}>
            <Ionicons name="map-sharp" size={25} style={styles.map_icon} />
            <Text style={styles.map_text}>BẢN ĐỒ</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={productStore}
        renderItem={renderItem}
        keyExtractor={item => item.id?.toString()}
        style={{ height: 'auto' }}
        ListHeaderComponent={HeaderFl}
      />
      <Modal
        animationType="slide"
        // transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View>
          <ScrollView style={{ width: '100%' }}>
            <View style={{ flex: 1 }}>
              <Image style={{ width: '100%', height: 360, borderRadius: 9 }} resizeMode="cover" source={{ uri: storeSelected?.image_1 }} />
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ position: 'absolute', right: 10, top: 10 }} >
                <Ionicons name="close-circle" size={40} style={{ color: 'white' }} />
              </TouchableOpacity>
              <View style={{ borderBottomWidth: 1, borderBottomColor: '#E6E6E6' }}>
                <View style={{ width: '90%', marginTop: 20, alignSelf: 'center' }}>
                  <View style={{ backgroundColor: 'white', marginBottom: 20 }}>
                    <Text style={styles.text_coffee}>THE COFFEE HOUSE</Text>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 25, width: '60%' }}>{storeSelected?.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: '#6E6E6E', fontSize: 15 }}>Giờ mở cửa: </Text>
                      <Text style={{ color: '#6E6E6E', fontSize: 15 }}>{storeSelected?.opening_time} - </Text>
                      <Text style={{ color: '#6E6E6E', fontSize: 15 }}>{storeSelected?.closing_time}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ width: '100%', alignSelf: 'center' }}>
                <TouchableOpacity style={{ width: '75%', height: 80, marginLeft: 40, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E6E6E6' }}>
                  <Entypo name="address" size={25} style={{ color: '#2E2E2E' }} />
                  <Text style={{ color: '#2E2E2E', fontSize: 18, marginLeft: 20 }}>{storeSelected?.address?.full_address}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '75%', height: 80, marginLeft: 40, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E6E6E6' }}>
                  <Ionicons name="star" size={25} style={{ color: '#2E2E2E' }} />
                  <Text style={{ color: '#2E2E2E', fontSize: 18, marginLeft: 20 }}>Thêm vào danh sách yêu thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '75%', height: 80, marginLeft: 40, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E6E6E6' }}>
                  <Feather name="share" size={25} style={{ color: '#2E2E2E' }} />
                  <Text style={{ color: '#2E2E2E', fontSize: 18, marginLeft: 20 }}>Chia sẻ địa chỉ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '75%', height: 80, marginLeft: 40, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E6E6E6' }}>
                  <FontAwesome name="phone" size={25} style={{ color: '#2E2E2E' }} />
                  <Text style={{ color: '#2E2E2E', fontSize: 18, marginLeft: 20 }}>Liên hệ: 18006936</Text>
                </TouchableOpacity>
                <Image
                  source={require('../assets/Icon/adressMap.png')}
                  style={{ width: '95%', height: 200, borderRadius: 9, marginTop: 10, alignSelf: 'center' }}
                />
                <TouchableOpacity style={{ marginBottom: 20, marginTop: 20 }} onPress={() => navigation.navigate('Order')}>
                  <LinearGradient colors={['#8A2908', '#DF3A01', '#FE9A2E']}
                    start={{ x: 0, y: 0.01 }} end={{ x: 2.5, y: 1.5 }}
                    locations={[0, 0, 1]}
                    style={{ width: '90%', height: 60, alignSelf: 'center', borderRadius: 9 }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', alignSelf: 'center', marginTop: 5, fontSize: 18 }}>Đặt hàng Pickup</Text>
                    <Text style={{ fontWeight: 'bold', color: 'white', alignSelf: 'center', fontSize: 15 }}>tại cửa hàng này</Text>
                  </LinearGradient>
                </TouchableOpacity>

              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  header_content:
  {
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
    height: 120,
    backgroundColor: 'white'
  },
  seach_content:
  {
    width: '65%',
    height: 40,
    marginLeft: 15,
    borderRadius: 7,
    flexDirection: 'row',
    backgroundColor: '#D8D8D8'
  },
  seach_input:
  {
    width: '90%',
    height: 40,
    marginLeft: 15
  },
  button_seach_icon:
  {
    marginLeft: 10,
    marginTop: 7,
    color: '#A4A4A4'
  },
  map_icon:
  {
    marginTop: 8,
    marginLeft: 20,
    color: '#A4A4A4'
  },
  map_text:
  {
    fontSize: 13,
    marginTop: 12,
    marginLeft: 5
  },
  renderItem_view:
  {
    alignItems: 'center',
    marginTop: 10
  },
  render_list:
  {
    width: '93%',
    height: 120,
    backgroundColor: 'white',
    borderRadius: 9,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: '#A4A4A4'
  },
  render_group_text:
  {
    marginRight: 10,
    width: '65%'
  },
  text_coffee:
  {
    fontWeight: 'bold',
    color: '#6E6E6E',
    fontSize: 11
  },
  text_address:
  {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16
  },
  text_far:
  {
    color: '#848484',
    fontSize: 15
  },
  text_price:
  {
    color: '#848484',
    fontSize: 20
  },
  render_img:
  {
    marginLeft: 10,
    width: '25%',
    height: 90,
    borderRadius: 7
  },
  back_time:
  {
    height: 40,
    width: '93%',
    marginTop: 20,
    borderRadius: 9,
    alignSelf: 'center',
    backgroundColor: '#D8D8D8',
    flexDirection: 'row'
  },
  back_time_text:
  {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 8,
    marginLeft: 10,
    color: '#6E6E6E'
  }
})
export default Store
