import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
const DATA = [
    {
        id: 1,
        name: '- Ưu đãi 15% đặt phòng khách sạn tại Mytour',
        Photo: 'https://stc.shopiness.vn/deal/2019/08/13/1/4/8/b/1565686926708_540.png',
        Date: 'Hết hạn 31/05/2021',
    },
    {
        id: 2,
        name: 'Ưu đãi 35% dịch vụ tổng quát tại Nha Khoa Kim',
        Photo: 'https://img.kam.vn/images/375x0/1c02189d5b6644beaf9979197dfa9905/image/nha-khoa-kim-sale-den-35-rang-su-tham-my.jpg',
        Date: 'Hết hạn 31/05/2021',
    },
    {
        id: 3,
        name: '- Giảm 35% cho đơn hàng từ 5 món, tối đa 59K...',
        Photo: 'https://stc.shopiness.vn/deal/2021/02/01/b/7/f/c/1612171059221_540.png',
        Date: 'Hết hạn 31/05/2021',
    },
    {
        id: 4,
        name: 'Giảm 35% cho đơn hàng 149k...',
        Photo: 'https://stc.shopiness.vn/deal/2020/12/15/1/d/6/6/1608005335943_540.png',
        Date: 'Hết hạn 31/05/2021',
    },
    {
        id: 5,
        name: 'Ưu đãi 25% dịch vụ thẩm mỹ tại Nha Khoa Kim',
        Photo: 'https://img.kam.vn/images/375x0/23907f5b79ce42c6beeee5b01e1aa5e3/image/nha-khoa-kim-uu-dai-25-dich-vu-rang-su.jpg',
        Date: 'Hết hạn 31/05/2021',
    },
]
const PhieuUuDai = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.Coupon}>
            <Image
                source={require('../assets/Icon/Coupon.png')}
                style={styles.SaleComp}
            />
            <Image
                source={{ uri: item.Photo }}
                style={styles.Sale}
            />
            <View style={styles.CoupChild}>
                <Text style={styles.CoupTxt1}>{item.name}</Text>
                <Text style={styles.CoupTxt2}>{item.Date}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() =>
                <View>
                    <TouchableOpacity style={styles.sch}>
                        <View style={{ flexDirection: 'row', marginLeft: 15, alignItems: 'center' }}>
                            <Image
                                source={require('../assets/Icon/ticket.png')}
                                style={{
                                    width: 30,
                                    height: 25,
                                }}
                            />
                            <Text style={{ marginLeft: 15, fontSize: 16 }}>Nhập mã khuyến mại</Text>
                        </View>
                        <AntDesign name={'right'} size={18} color={'silver'} style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 20, marginLeft: 15 }}>Sẵn sàng sử dụng</Text>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            }
            style={{ marginBottom: 100 }}
        />
    )
}

export default PhieuUuDai

const styles = StyleSheet.create({
    sch: {
        width: '95%',
        height: 50,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderBottomWidth: 0.3,
        borderBottomColor: 'grey'
    },
    Coupon: {
        width: '95%',
        height: 120,
        borderRadius: 10,
        borderBottomWidth: 0.5,
        borderColor: 'silver',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    SaleComp: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        position: 'absolute'
    },
    Sale: {
        width: 90,
        height: 90,
        marginLeft: 20,
    },
    CoupChild: {
        width: '110%',
        height: 120,
        justifyContent: 'space-around'
    },
    CoupTxt1: {
        marginLeft: 45,
        width: '50%',
        fontSize: 17
    },
    CoupTxt2: {
        marginLeft: 45,
        width: '55%',
        fontSize: 16,
        color: 'grey'
    },
})
