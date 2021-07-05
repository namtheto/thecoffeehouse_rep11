import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Switch, Modal, TouchableOpacity, FlatList, SectionList, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { getOrder } from '../src/API/Api'
import { useDispatch, useSelector } from "react-redux";
import { SwipeListView } from 'react-native-swipe-list-view';

const DatMon = () => {

    const [productSelected, setProductSelected] = useState([])
    const dispatch = useDispatch();
    const data = useSelector((store) => store.cartReducer.cart);
    const onAddCart = () => {
        dispatch({ type: 'ADD_CART', detail: productSelected })
        console.log(data)
    }
    const onRemoveAll = () => dispatch({ type: 'REMOVE_ALL' })
    const [note, setNote] = useState(null);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [select, setSelect] = useState(false);
    const Select = () => {
        setSelect(!select);
    };
    const onRemoveItem = (item) => () => dispatch({ type: 'REMOVE_ITEM', data: item })
    const [checkedSize, setCheckedSize] = useState();
    const [order, setOrder] = useState()
    useEffect(() => {
        const getApiOrder = async () => {
            const result = await getOrder()
            setOrder(result.data.data)
        }
        getApiOrder()
    }, [])
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [heart, setHeart] = useState(false);
    const addFavorite = () => {
        setHeart(!heart);
    };
    const renderHiddenItem = ({ item }) => (
        <View style={styles.rowBack}>
            <TouchableOpacity style={[{ backgroundColor: 'grey' }, styles.hiddenBt]} onPress={() => {
                setModalVisible(!modalVisible)
                setProductSelected(item)
            }}>
                <Image
                    source={require('../src/Icon/pencil.png')}
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: 'white'
                    }}
                />
                <Text style={styles.backTextWhite}>CHỈNH SỬA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[{ backgroundColor: 'red' }, styles.hiddenBt]} onPress={onRemoveItem(item)}>
                <Image
                    source={require('../src/Icon/trash.png')}
                    style={{
                        width: 28,
                        height: 28,
                        tintColor: 'white'
                    }}
                />
                <Text style={styles.backTextWhite}>BỎ CHỌN</Text>
            </TouchableOpacity>
        </View>
    );
    const renderItem = ({ item }) => (
        <View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '95%', height: 150, alignSelf: 'center', backgroundColor: 'white', marginBottom: 10, borderBottomColor: 'silver', borderBottomWidth: 0.2, borderRadius: 10 }}
                onPress={() => {
                    setModalVisible(!modalVisible)
                    setProductSelected(item)
                }}>
                <View style={{ justifyContent: 'space-evenly', width: '100%', height: '100%', width: 250 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 15, width: 220, height: 27 }}>{item.product_name}</Text>
                    <Text style={{ fontSize: 16, marginLeft: 15, color: 'grey', width: 215, height: 40 }}>{item.description}</Text>
                    <Text style={{ fontSize: 18, marginLeft: 15, color: 'grey' }}>{item.price}đ</Text>
                </View>
                <Image
                    source={{ uri: item.image }}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 10
                    }}
                />
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <View style={{ position: 'absolute', width: '100%' }}>
                <TouchableOpacity style={styles.Header1}>
                    <Image
                        source={require('../src/Icon/Order1.png')}
                        style={{
                            width: 40,
                            height: 40,
                            marginLeft: 10
                        }}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Giao đến</Text>
                            <AntDesign name={'down'} size={10} color={'#5e5e5e'} style={{ marginLeft: 5 }} />
                        </View>
                        <Text style={{ fontSize: 16, color: '#5e5e5e' }}>Chùa Văn Hội, Phường Phú Lương, Quận...</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.header2}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '65%', height: 40, backgroundColor: '#d3d3d3', borderRadius: 10, justifyContent: 'flex-end' }}>
                        <AntDesign name={'down'} size={15} color={'#5e5e5e'} style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <AntDesign name={'search1'} size={18} color={'grey'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Favorite')}>
                        <AntDesign name={'heart'} size={18} color={'grey'} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={order}
                    showsVerticalScrollIndicator={false}
                    style={{ height: 555, }}
                    keyExtractor={item => item._id?.toString()}
                    renderItem={renderItem}
                />
                <Modal visible={modalVisible} animationType={'slide'}>
                    <ScrollView style={{ height: 750, width: '100%' }} showsVerticalScrollIndicator={false}>
                        <View style={{ flex: 1 }}>
                            <View style={{ width: '100%', height: 350 }}>
                                <Image
                                    source={{ uri: productSelected?.image }}
                                    style={{
                                        width: '100%',
                                        height: 350,
                                    }}
                                />

                            </View>
                            <View>
                                <View>
                                    <View style={{ width: '100%', height: 'auto', flexDirection: 'row', justifyContent: 'space-between', margin: 15 }}>
                                        <View style={{ width: '60%' }}>
                                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{productSelected?.product_name}</Text>
                                            <Text style={{ fontSize: 18, marginTop: 5 }}>{productSelected?.base_price}đ</Text>
                                        </View>
                                        <View style={{ marginRight: 30, alignItems: 'center', marginTop: 10 }}>
                                            <TouchableOpacity onPress={() => addFavorite()}>
                                                <AntDesign name={heart ? 'heart' : 'hearto'} color={heart ? '#990000' : 'grey'} size={23} />
                                            </TouchableOpacity>
                                            <Text style={{ color: 'grey', fontSize: 13, fontWeight: 'bold' }}>YÊU THÍCH</Text>
                                        </View>
                                    </View>
                                </View>
                                <Text style={{ marginHorizontal: 15, marginBottom: 10 }}>{productSelected?.description}</Text>
                            </View>
                            <View
                                style={{
                                    backgroundColor: '#f2f2f2',
                                    height: 10
                                }}
                            />

                            {
                                productSelected != 0 && productSelected?.options.length == 2 ?
                                    <View style={{ height: 'auto' }}>
                                        <View style={{ height: 80, borderBottomWidth: 0.7, borderBottomColor: 'silver' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, marginTop: 20 }}>
                                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{productSelected?.options[0].name}</Text>
                                                <View style={{ borderRadius: 50, backgroundColor: '#FBE1C4', width: 80, alignItems: 'center', justifyContent: 'center', height: 30 }}>
                                                    <Text style={{ color: '#CA4600', fontSize: 12, fontWeight: 'bold' }}>BẮT BUỘC </Text>
                                                </View>
                                            </View>
                                            <Text style={{ marginLeft: 15, color: 'grey' }}>{productSelected?.desciption}</Text>
                                        </View>
                                        <View style={styles.check}>
                                            <View style={{ height: 'auto', width: '100%' }}>
                                                {productSelected.length != 0 ?
                                                    productSelected?.options[0]?.items.map((e, i) => {
                                                        return (
                                                            <View style={{ flexDirection: 'row', height: 60, width: '100%', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: 'silver', borderBottomWidth: 0.5, left: 15 }} key={i}>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <TouchableOpacity onPress={() => setCheckedSize(e.product_id)}>
                                                                        <FontAwesome name={checkedSize == e.product_id ? 'dot-circle-o' : 'circle-thin'} color={checkedSize == e.product_id ? '#fe8f01' : 'grey'} size={23} key={i} />
                                                                    </TouchableOpacity>
                                                                    <Text style={{ marginLeft: 10 }}>{e.val}</Text>
                                                                </View>
                                                                <Text style={styles.addPrice}>+{e.price}đ</Text>
                                                            </View>
                                                        )
                                                    }) : null
                                                }
                                            </View>

                                        </View>
                                    </View>
                                    : null
                            }

                            <View
                                style={{
                                    height: 10,
                                    backgroundColor: '#f2f2f2',
                                    width: '100%',
                                    alignSelf: 'flex-end'
                                }}
                            />
                            {
                                productSelected != 0 && productSelected?.options.length == 2 ?
                                    <View style={{ height: 'auto' }}>
                                        <View style={{ height: 80, borderBottomWidth: 0.7, borderBottomColor: 'silver' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, marginTop: 20 }}>
                                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{productSelected?.options[1].name}</Text>
                                                <View style={{ borderRadius: 50, backgroundColor: 'silver', width: 80, alignItems: 'center', justifyContent: 'center', height: 30 }}>
                                                    <Text style={{ color: 'grey', fontSize: 12, fontWeight: 'bold' }}>TÙY CHỌN</Text>
                                                </View>
                                            </View>
                                            <Text style={{ marginLeft: 15, color: 'grey' }}>{productSelected?.options[1].desciption}</Text>
                                        </View>
                                        {productSelected.length != 0 ?
                                            productSelected?.options[1]?.items.map((e, i) => (
                                                <View key={i}>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, left: 15, borderBottomColor: 'silver', borderBottomWidth: 0.5 }}>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                            <TouchableOpacity onPress={() => Select()}>
                                                                <Ionicons name={select ? 'checkmark-circle-outline' : 'ellipse-outline'} color={select ? '#fe8f01' : 'grey'} size={23} />
                                                            </TouchableOpacity>
                                                            <Text style={{ marginLeft: 7 }}>{e.product_name}</Text>
                                                        </View>
                                                        <Text style={{ marginRight: '7%' }}>+ {e.price}đ</Text>
                                                    </View>
                                                </View>
                                            )) : null
                                        }
                                    </View>
                                    : null
                            }
                            <View
                                style={{
                                    height: 10,
                                    backgroundColor: '#f2f2f2',
                                    width: '100%',
                                    alignSelf: 'flex-end'
                                }}
                            />
                            <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center', height: 60, paddingHorizontal: 10 }}>
                                <Image
                                    source={require('../src/Icon/pencil.png')}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: '#0066CC'
                                    }}
                                />
                                <Text style={{ fontSize: 18, color: '#0066CC', marginLeft: 10 }}>Ghi chú món</Text>
                            </TouchableOpacity>
                            <View
                                style={{
                                    height: 25,
                                    backgroundColor: '#f2f2f2',
                                    width: '100%',
                                    alignSelf: 'flex-end'
                                }}
                            />
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                                    <TouchableOpacity>
                                        <Ionicons name={'remove-circle-outline'} color={'#fe8f01'} size={40} />
                                    </TouchableOpacity>
                                    <Text style={{ width: 50, textAlign: 'center', fontSize: 20 }}>1</Text>
                                    <TouchableOpacity>
                                        <Ionicons name={'add-circle-outline'} color={'#fe8f01'} size={40} />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={{ height: 'auto', width: '100%', alignItems: 'center', borderRadius: 10, marginBottom: 40 }} onPress={onAddCart}>
                                    <LinearGradient colors={['#5e5e5e', '#fe8f01', '#5e5e5e']} style={{ height: 70, width: '95%', justifyContent: 'center', alignItems: 'center', borderRadius: 7 }} start={{ x: -0.5, y: 0 }} end={{ x: 2, y: 0 }} >
                                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Chọn món - {productSelected?.price}đ</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{ width: '98%', marginTop: 10, position: 'absolute' }}>
                        <View
                            style={{
                                width: 40,
                                height: 2,
                                backgroundColor: 'silver',
                                borderRadius: 100,
                                alignSelf: 'center'
                            }}
                        />
                        <TouchableOpacity onPress={() => setModalVisible(false)} >
                            <AntDesign name={'closecircle'} size={25} color={'grey'} style={{ alignSelf: 'flex-end' }} />
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
            {/* Detail outside */}
            <TouchableOpacity style={{ marginTop: 600 }} onPress={() => { setModalVisible2(true) }}>
                <LinearGradient colors={['#5e5e5e', '#fe8f01', '#5e5e5e']} style={{ height: 80, flexDirection: 'row', width: '95%', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderRadius: 15, alignSelf: 'center' }} start={{ x: -0.5, y: 0 }} end={{ x: 2, y: 0 }} >
                    <View>
                        <Text style={{ color: 'white', fontSize: 17 }}>1 món trong giỏ hàng</Text>
                        <Text style={{ color: 'white', fontSize: 17 }}>50.000đ</Text>
                    </View>
                    <View style={{ backgroundColor: 'white', width: 90, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, borderWidth: 0.1, borderColor: 'orange' }}>
                        <Text style={{ color: '#CA4600' }}>GIỎ HÀNG</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>

            {/* Detail inside */}
            <Modal visible={modalVisible2} animationType={'slide'}>
                <View style={{ backgroundColor: '#fff', width: '100%', flexDirection: 'row', height: 50, justifyContent: 'center', alignItems: 'center', borderBottomColor: 'grey', borderBottomWidth: 0.5, position: 'absolute' }}>
                    <Text style={{ fontSize: 20 }}>Xác nhận đơn hàng</Text>
                </View>
                <TouchableOpacity style={{ width: '100%', height: 50, alignItems: 'center', flexDirection: 'row-reverse', right: 10 }} onPress={() => setModalVisible2(false)} >
                    <Ionicons name={'close-outline'} size={35} />
                </TouchableOpacity>
                <SwipeListView
                    data={data}
                    renderHiddenItem={renderHiddenItem}
                    leftOpenValue={0}
                    rightOpenValue={-200}
                    style={{ height: 600, width: '100%', backgroundColor: '#f2f2f2' }}
                    keyExtractor={item => item._id?.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ width: '100%', height: 100, alignItems: "center", backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#F2F2F2' }}>
                                <View style={{ width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        source={require('../src/Icon/pencil.png')}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: 'grey'
                                        }}
                                    />
                                    <View style={{ width: '85%', height: 60, marginLeft: 20, }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 18, marginRight: 5 }}>{item?.quantity}x</Text>
                                                <Text style={{ fontWeight: 'bold', width: 200, height: 25, fontSize: 18, marginRight: 5 }}>{item?.product_name}</Text>
                                            </View>
                                            <Text style={{ fontSize: 18, marginRight: 5 }}>{item?.price * item?.quantity}đ</Text>
                                        </View>
                                        <Text style={{ fontSize: 15, color: 'grey', }}></Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                    ListHeaderComponent={({ item }) => {
                        return (
                            <View>
                                <View style={{ marginTop: 15, height: 70, backgroundColor: 'white', borderBottomColor: 'grey', borderBottomWidth: 0.5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Giao tận nơi</Text>
                                    <TouchableOpacity style={{ borderRadius: 50, backgroundColor: '#FBE1C4', width: 80, alignItems: 'center', justifyContent: 'center', height: 30 }}>
                                        <Text style={{ color: '#CA4600', fontSize: 12, fontWeight: 'bold' }}>THAY ĐỔI</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: 70, backgroundColor: 'white', borderBottomColor: 'grey', borderBottomWidth: 0.5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                                    <View>
                                        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Chùa Văn Nội</Text>
                                        <Text style={{ fontSize: 17 }}>Chùa Văn Nội, Phường Phú Lương, Quận H...</Text>
                                    </View>
                                    <Ionicons name={'chevron-forward-outline'} size={25} color={'silver'} />
                                </View>
                                <Text style={{ backgroundColor: 'white', padding: 10, color: 'silver', fontSize: 15 }}>Thêm hướng dẫn giao hàng</Text>
                                <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 60 }}>
                                    <View style={{ width: '50%', borderRightWidth: 0.5, borderBottomColor: 'silver', marginHorizontal: 10 }}>
                                        <Text style={{ fontSize: 18 }}>TÂN NGUYỄN</Text>
                                        <Text style={{ fontSize: 16, color: 'grey' }}>0378546546</Text>
                                        <Text style={{ fontSize: 19, letterSpacing: 5, fontWeight: 'bold', color: 'grey' }}>-------------</Text>
                                    </View>
                                    <View style={{ width: '50%', borderRightWidth: 0.5, borderBottomColor: 'silver', marginHorizontal: 10 }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey' }}>15-30 phút</Text>
                                        <Text style={{ fontSize: 16, color: 'black' }}>Càng sớm càng tốt</Text>
                                        <Text style={{ fontSize: 19, letterSpacing: 5, fontWeight: 'bold', color: 'grey' }}>------------</Text>
                                    </View>
                                </View>
                                <View style={{ height: 70, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 17 }}>Lưu thông tin giao hàng cho lần sau</Text>
                                    <Switch
                                        trackColor={{ false: "silver", true: "silver" }}
                                        thumbColor={isEnabled ? "#5F5C34" : "#5F5C34"}
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                </View>
                                <View style={{ marginTop: 15, height: 70, backgroundColor: 'white', borderBottomColor: 'grey', borderBottomWidth: 0.5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Các món đã chọn</Text>
                                    <TouchableOpacity style={{ borderRadius: 50, backgroundColor: '#FBE1C4', width: 100, alignItems: 'center', justifyContent: 'center', height: 30 }}>
                                        <Text style={{ color: '#CA4600', fontSize: 12, fontWeight: 'bold' }}>+ THÊM MÓN</Text>
                                    </TouchableOpacity>
                                </View>
                                <TextInput
                                    style={{ backgroundColor: 'white' }}
                                    onChangeText={setNote}
                                    value={note}
                                    placeholder=" Thêm ghi chú đơn hàng..."
                                />
                            </View>
                        )
                    }}


                    ListFooterComponent={({ item }) => {
                        return (
                            <View>
                                <View style={{ marginTop: 15, height: 70, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Tổng cộng</Text>
                                </View>
                                <View style={{ height: 180, backgroundColor: 'white', borderTopColor: 'grey', borderTopWidth: 0.3, paddingHorizontal: 10 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 60, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16 }}>Tổng cộng</Text>
                                        <Text style={{ fontSize: 16 }}>50000đ</Text>
                                    </View>
                                    <View
                                        style={{
                                            width: '95%',
                                            height: 0.5,
                                            backgroundColor: 'silver',
                                            alignSelf: 'center'
                                        }}
                                    />
                                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', height: 60, alignItems: 'center' }}>
                                        <Text style={{ color: 'blue', fontSize: 16 }}>Chọn khuyến mại</Text>
                                        <Ionicons name={'chevron-forward-outline'} size={25} color={'silver'} />
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            width: '95%',
                                            height: 0.5,
                                            backgroundColor: 'silver',
                                            alignSelf: 'center'
                                        }}
                                    />
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 60, alignItems: 'center' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Số tiền thanh toán</Text>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{console.log(item?.branch)}</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: 15, height: 70, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Thanh toán</Text>
                                </View>
                                <TouchableOpacity style={{ backgroundColor: 'white', paddingHorizontal: 10, borderTopWidth: 0.5, borderTopColor: 'grey', flexDirection: 'row', justifyContent: 'space-between', height: 60, alignItems: 'center' }}>
                                    <Text style={{ color: 'blue', fontSize: 16 }}>Bấm để chọn phương thức thanh toán</Text>
                                    <Ionicons name={'chevron-forward-outline'} size={25} color={'silver'} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: 'white', marginTop: 15, flexDirection: 'row', height: 60, alignItems: 'center', paddingHorizontal: 10, marginBottom: 20 }} onPress={onRemoveAll}>
                                    <MaterialCommunityIcons name={'trash-can'} size={25} color={'red'} />
                                    <Text style={{ marginLeft: 15, color: 'red', fontSize: 16 }}>Xóa đơn hàng</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
                <LinearGradient colors={['#5e5e5e', '#fe8f01', '#5e5e5e']} style={{ height: 80, flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', padding: 10 }} start={{ x: -0.5, y: 0 }} end={{ x: 2, y: 0 }} >
                    <View>
                        <Text style={{ color: 'white', fontSize: 17 }}>Giao tận nơi ● 1 món</Text>
                        <Text style={{ color: 'white', fontSize: 17 }}>50.000đ</Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: 'white', width: 90, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, borderWidth: 0.1, borderColor: 'orange' }}>
                        <Text style={{ color: '#CA4600' }}>ĐẶT HÀNG</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </Modal>
        </View>
    )
}

export default DatMon

const styles = StyleSheet.create({
    Header1: {
        height: 60,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
    },
    header2: {
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: 'silver',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    btn: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
        borderRadius: 8
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 25,
        marginVertical: 15
    },
    itemmodal: {
        flexDirection: 'row',
    },
    check: {
        height: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    addPrice: {
        marginRight: '7%'
    },
    backTextWhite: {
        color: '#FFF',
        fontSize: 10,
        fontWeight: 'bold'
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    hiddenBt: {
        width: 75,
        height: 75,
        marginHorizontal: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})