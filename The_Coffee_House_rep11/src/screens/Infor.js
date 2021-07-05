import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../components/Header_content';
import Login from '../components/Login';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from "react-redux";
const Inf = () => {
    const [isOpen, setIsOpen] = useState(false);
    const HandleLogin1 = () => setIsOpen(true)
    const onclose = () => setIsOpen(false)
    const token = useSelector((store) => store.authReducer.token);
    if (token) {
        return (
            <View>
                <Header />
                <View style={{ borderTopWidth: 0.5, borderTopColor: '#A4A4A4', alignItems: 'center' }}>
                    <ScrollView style={{ width: '95%', height: '90%', }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, marginTop: 20 }}>Tiện ích</Text>
                        <View style={{ height: 120, alignSelf: 'center', marginTop: 5, flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.Option} >
                                <Image
                                    source={require('../assets/Icon/History.png')}
                                    style={styles.Img}
                                />
                                <Text style={styles.CataTxt}>Lịch sử đơn hàng</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Option}>
                                <Image
                                    source={require('../assets/Icon/Term.png')}
                                    style={styles.Img}
                                />
                                <Text style={styles.CataTxt}>Điều khoản</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 120, alignSelf: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.Option}>
                                <Image
                                    source={require('../assets/Icon/Music.png')}
                                    style={styles.Img}
                                />
                                <Text style={styles.CataTxt}>Nhạc đang phát</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Option}>
                                <Image
                                    source={require('../assets/Icon/News.png')}
                                    style={styles.Img}
                                />
                                <Text style={styles.CataTxt}>Tin tức & khuyến mại</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, marginTop: 20 }}>Hỗ trợ</Text>
                        <View style={{ height: 100, marginTop: 15, margin: 5, borderRadius: 8, backgroundColor: 'white' }}>
                            <TouchableOpacity style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: '90%', height: 40, marginTop: 10, borderBottomWidth: 0.8, borderBottomColor: '#D8D8D8', flexDirection: 'row' }}>
                                    <Ionicons name="star" size={20} style={{ marginLeft: 15, color: '#61210B' }} />
                                    <Text style={{ marginLeft: 10, fontSize: 15 }}>Đánh giá đơn hàng</Text>
                                </View>
                                <AntDesign name="right" size={15} style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} >
                                <View style={{ width: '90%', height: 40, marginTop: 10, flexDirection: 'row' }}>
                                    <MaterialCommunityIcons name="message-text" size={20} style={{ marginLeft: 15, color: '#61210B' }} />
                                    <Text style={{ marginLeft: 10, fontSize: 15 }}> Liên hệ và góp ý</Text>
                                </View>
                                <AntDesign name="right" size={15} style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, marginTop: 20 }}>Tài khoản</Text>
                        <View style={{ height: 200, marginTop: 15, margin: 5, borderRadius: 8, backgroundColor: 'white' }}>
                            <TouchableOpacity style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: '90%', height: 40, marginTop: 10, borderBottomWidth: 0.8, borderBottomColor: '#D8D8D8', flexDirection: 'row' }}>
                                    <Ionicons name="person" size={20} style={{ marginLeft: 15, color: '#61210B' }} />
                                    <Text style={{ marginLeft: 10, fontSize: 15 }}>Thông tin cá nhân</Text>
                                </View>
                                <AntDesign name="right" size={15} style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} >
                                <View style={{ width: '90%', height: 40, marginTop: 10, borderBottomWidth: 0.8, borderBottomColor: '#D8D8D8', flexDirection: 'row' }}>
                                    <Ionicons name="bookmark" size={20} style={{ marginLeft: 15, color: '#61210B' }} />
                                    <Text style={{ marginLeft: 10, fontSize: 15 }}>Địa chỉ đã lưu</Text>
                                </View>
                                <AntDesign name="right" size={15} style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} >
                                <View style={{ width: '90%', height: 40, marginTop: 10, borderBottomWidth: 0.8, borderBottomColor: '#D8D8D8', flexDirection: 'row' }}>
                                    <Ionicons name="settings-sharp" size={20} style={{ marginLeft: 15, color: '#61210B' }} />
                                    <Text style={{ marginLeft: 10, fontSize: 15 }}>Cài đặt</Text>
                                </View>
                                <AntDesign name="right" size={15} style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}  >
                                <View style={{ width: '90%', height: 40, marginTop: 10, flexDirection: 'row' }}>
                                    <Entypo name="log-out" size={20} style={{ marginLeft: 15, color: '#61210B' }} />
                                    <Text style={{ marginLeft: 10, fontSize: 15 }}>Đăng xuất</Text>
                                </View>
                                <AntDesign name="right" size={15} style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
    return (
        <View>
            <Header />
            <View style={{ borderTopWidth: 0.5, borderTopColor: '#A4A4A4', alignItems: 'center' }}>
                <ScrollView style={{ width: '95%', height: '90%', }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, marginTop: 20 }}>Tiện ích</Text>
                    <View style={{ height: 120, alignSelf: 'center', marginTop: 5, flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.Option} >
                            <Image
                                source={require('../assets/Icon/History.png')}
                                style={styles.Img}
                            />
                            <Text style={styles.CataTxt}>Lịch sử đơn hàng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Option}>
                            <Image
                                source={require('../assets/Icon/Term.png')}
                                style={styles.Img}
                            />
                            <Text style={styles.CataTxt}>Điều khoản</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 120, alignSelf: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.Option}>
                            <Image
                                source={require('../assets/Icon/Music.png')}
                                style={styles.Img}
                            />
                            <Text style={styles.CataTxt}>Nhạc đang phát</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Option}>
                            <Image
                                source={require('../assets/Icon/News.png')}
                                style={styles.Img}
                            />
                            <Text style={styles.CataTxt}>Tin tức & khuyến mại</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, marginTop: 20 }}>Hỗ trợ</Text>
                    <View style={{ height: 100, marginTop: 15, margin: 5, borderRadius: 8, backgroundColor: 'white' }}>
                        <TouchableOpacity style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ width: '90%', height: 40, marginTop: 10, borderBottomWidth: 0.8, borderBottomColor: '#D8D8D8', flexDirection: 'row' }}>
                                <Ionicons name="star" size={20} style={{ marginLeft: 15, color: '#61210B' }} />
                                <Text style={{ marginLeft: 10, fontSize: 15 }}>Đánh giá đơn hàng</Text>
                            </View>
                            <AntDesign name="right" size={15} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} >
                            <View style={{ width: '90%', height: 40, marginTop: 10, flexDirection: 'row' }}>
                                <MaterialCommunityIcons name="message-text" size={20} style={{ marginLeft: 15, color: '#61210B' }} />
                                <Text style={{ marginLeft: 10, fontSize: 15 }}> Liên hệ và góp ý</Text>
                            </View>
                            <AntDesign name="right" size={15} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, marginTop: 20 }}>Tài khoản</Text>
                    <View style={{ height: 200, marginTop: 15, margin: 5, borderRadius: 8, backgroundColor: 'white' }}>
                        <TouchableOpacity style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ width: '90%', height: 40, marginTop: 10, borderBottomWidth: 0.8, borderBottomColor: '#D8D8D8', flexDirection: 'row' }}>
                                <Ionicons name="person" size={20} style={{ marginLeft: 15, color: '#61210B' }} />
                                <Text style={{ marginLeft: 10, fontSize: 15 }}>Thông tin cá nhân</Text>
                            </View>
                            <AntDesign name="right" size={15} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} >
                            <View style={{ width: '90%', height: 40, marginTop: 10, borderBottomWidth: 0.8, borderBottomColor: '#D8D8D8', flexDirection: 'row' }}>
                                <Ionicons name="bookmark" size={20} style={{ marginLeft: 15, color: '#61210B' }} />
                                <Text style={{ marginLeft: 10, fontSize: 15 }}>Địa chỉ đã lưu</Text>
                            </View>
                            <AntDesign name="right" size={15} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} >
                            <View style={{ width: '90%', height: 40, marginTop: 10, borderBottomWidth: 0.8, borderBottomColor: '#D8D8D8', flexDirection: 'row' }}>
                                <Ionicons name="settings-sharp" size={20} style={{ marginLeft: 15, color: '#61210B' }} />
                                <Text style={{ marginLeft: 10, fontSize: 15 }}>Cài đặt</Text>
                            </View>
                            <AntDesign name="right" size={15} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} onPress={HandleLogin1} >
                            <View style={{ width: '90%', height: 40, marginTop: 10, flexDirection: 'row' }}>
                                <Entypo name="login" size={20} style={{ marginLeft: 15, color: '#61210B' }} />
                                <Text style={{ marginLeft: 10, fontSize: 15 }}>Đăng nhập</Text>
                            </View>
                            <AntDesign name="right" size={15} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                        <Login isOpen={isOpen} onclose={onclose} />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Inf
const styles = StyleSheet.create({
    Option: {
        flex: 1,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 8,
        borderBottomWidth: 0.3,
        borderBottomColor: 'silver',
    },
    Img: {
        width: 50,
        height: 50,
        margin: 13
    },
    CataTxt: {
        fontSize: 16,
        marginLeft: 15
    },
})

