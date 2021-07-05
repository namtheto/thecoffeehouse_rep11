import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const DATATICKET = [
    {
        id: 1,
        name: '- Giảm 35% cho đơn hàng từ 5 món, tối đa 59K...',
        Photo: 'https://stc.shopiness.vn/deal/2021/02/01/b/7/f/c/1612171059221_540.png',
        Date: 'Hết hạn 31/05/2021',
    },
    {
        id: 2,
        name: 'Giảm 35% cho đơn hàng 149k...',
        Photo: 'https://stc.shopiness.vn/deal/2020/12/15/1/d/6/6/1608005335943_540.png',
        Date: 'Hết hạn 31/05/2021',
    },
    {
        id: 3,
        name: 'Combo 1 Cà phê Việt Nam size L và 2 bánh mì...',
        Photo: 'data:image/jpeg;base64,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',
        Date: 'Hết hạn 31/05/2021',
    },
]
const DATAEXCHANGE = [
    {
        id: 1,
        name: 'MYTOUR',
        script: 'Ưu đãi 15% đặt phòng khách sạn tại Mytour',
        Bean: '59',
        ExchageImg: 'https://stc.shopiness.vn/deal/2019/08/13/1/4/8/b/1565686926708_540.png'
    },
    {
        id: 2,
        name: 'NHA KHOA KIM',
        script: 'Ưu đãi 35% dịch vụ tổng quát tại Nha Khoa Kim',
        Bean: '99',
        ExchageImg: 'https://img.kam.vn/images/375x0/1c02189d5b6644beaf9979197dfa9905/image/nha-khoa-kim-sale-den-35-rang-su-tham-my.jpg'
    },
    {
        id: 3,
        name: 'NHA KHOA KIM',
        script: 'Ưu đãi 25% dịch vụ thẩm mỹ tại Nha Khoa Kim',
        Bean: '99',
        ExchageImg: 'https://img.kam.vn/images/375x0/23907f5b79ce42c6beeee5b01e1aa5e3/image/nha-khoa-kim-uu-dai-25-dich-vu-rang-su.jpg'
    },
]
const TichDiem = () => {
    const [SC, setScreen] = useState('TichDiem');
    const renderItem1 = ({ item }) => (
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
    const renderItem2 = ({ item }) => (
        <View>
            <TouchableOpacity style={{ flexDirection: 'row', width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={{ uri: item.ExchageImg }}
                    style={styles.ExchageImg}
                />
                <View>
                    <Text style={styles.CoupTxt3}>{item.name}</Text>
                    <Text style={styles.CoupTxt4}>{item.script}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 50, height: 50 }}>
                    <View style={{ backgroundColor: '#A9F5BC', width: 40, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: '#088A29' }}>{item.Bean}</Text>
                    </View>
                    <Text style={{ fontSize: 16, marginTop: 5 }}>BEAN</Text>
                </View>
            </TouchableOpacity>
            <View
                style={{
                    width: '95%',
                    height: 1,
                    backgroundColor: '#F2F2F2',
                    alignSelf: 'center',
                }}
            />
        </View>
    );
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() =>
                <View>
                    <LinearGradient colors={['black', '#F2F2F2']} style={styles.linearGradient} />
                    <View elevation={5} style={styles.ContainerDad}>
                        <Image
                            source={require('../assets/Icon/code.png')}
                            style={{
                                width: 220,
                                height: 70
                            }}
                        />
                        <Text>M161467451</Text>
                        <LinearGradient elevation={5} colors={['#F2F2F2', '#fe8f01', 'black']} style={styles.Container} start={{ x: 0, y: 0.01 }} end={{ x: 2.5, y: 1.5 }} locations={[0, 0, 1]}>
                            <Text style={[styles.TextContai, { fontSize: 23 }]}>NAM TÔ</Text>
                            <Text style={[styles.TextContai, { fontSize: 17 }]}>Mới</Text>
                            <Text style={[styles.TextContai, { fontSize: 12, fontWeight: 'bold' }]}>0 BEAN</Text>
                        </LinearGradient>
                        <View style={styles.ContaiSub}>
                            <Text style={styles.TxtU}>MỚI</Text>
                            <Text style={styles.TxtU}>ĐỒNG</Text>
                        </View>
                        <View style={styles.Line}>
                            <LinearGradient colors={['#F2F2F2', '#fe8f01', 'black']} style={{ width: '100%', borderRadius: 8, height: 10, position: 'absolute' }} start={{ x: 0, y: 0.01 }} end={{ x: 2.5, y: 1.5 }} locations={[0, 0, 1]} />
                            <Image
                                source={require('../assets/Icon/Seed.png')}
                                style={{
                                    width: 30,
                                    height: 30,
                                    marginLeft: -3
                                }}
                            />
                            <View
                                style={{
                                    width: 4,
                                    height: 4,
                                    backgroundColor: 'white',
                                    borderRadius: 100,
                                    marginRight: 3
                                }}
                            />
                        </View>
                        <Text style={styles.TextSub}>Còn 100 BEAN nữa bạn sẽ thăng hạng.</Text>
                        <Text style={styles.TextSub}>Đổi quà không ảnh hưởng tới việc thăng hạng của bạn</Text>
                        <Text style={styles.TextSub}>Chưa tích điểm</Text>
                    </View>
                    <View style={{ width: '95%', height: 120, alignSelf: 'center', marginTop: 5, flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.Option} >
                            <Image
                                source={require('../assets/Icon/Point2.png')}
                                style={styles.Img}
                            />
                            <Text style={styles.CataTxt}>Đổi ưu đãi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Option}>
                            <Image
                                source={require('../assets/Icon/Point3.png')}
                                style={styles.Img}
                            />
                            <Text style={styles.CataTxt}>Phiếu ưu đãi của b...</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '95%', height: 120, alignSelf: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.Option}>
                            <Image
                                source={require('../assets/Icon/Point1.png')}
                                style={styles.Img}
                            />
                            <Text style={styles.CataTxt}>Lịch sử giao dịch</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Option}>
                            <Image
                                source={require('../assets/Icon/Point4.png')}
                                style={styles.Img}
                            />
                            <Text style={styles.CataTxt}>Quyền lợi của bạn</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>Phiếu ưu đãi của bạn</Text>
                    <View style={styles.CoupContain}>
                        <FlatList
                            data={DATATICKET}
                            renderItem={renderItem1}
                            keyExtractor={item => item.id}
                            ListFooterComponent={() =>
                                <View>
                                    <Text style={styles.title}>Đổi ưu đãi</Text>
                                    <View style={{ width: '100%', height: 'auto' }}>
                                        <TouchableOpacity style={styles.ChangeCoup}>
                                            <FlatList
                                                data={DATAEXCHANGE}
                                                renderItem={renderItem2}
                                                keyExtractor={item => item.id}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }
                            style={{ marginBottom: 20 }}
                        />
                    </View>
                </View>
            }
            style={{
                marginBottom: 100
            }}
        />
    )
}

export default TichDiem

const styles = StyleSheet.create({
    linearGradient: {
        width: '100%',
        height: 250,
        position: 'absolute',
    },
    ContainerDad: {
        marginTop: 15,
        width: '95%',
        height: 400,
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 1.0,
        marginBottom: 10
    },
    Container: {
        width: '100%',
        height: 155,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 1.0
    },
    TextContai: {
        color: 'white',
        marginBottom: 2
    },
    ContaiSub: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    TxtU: {
        fontSize: 15,
        color: '#585858',
        marginTop: 15
    },
    Line: {
        width: '95%',
        height: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    TextSub: {
        color: '#2E2E2E'
    },
    Option: {
        flex: 1,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 8,
        borderBottomWidth: 0.3,
        borderBottomColor: 'silver'
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25,
        marginLeft: 15,
        marginBottom: 20
    },
    CoupContain: {
        width: '100%',
        height: 'auto',
        alignSelf: 'center',
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
        fontSize: 16
    },
    CoupTxt2: {
        marginLeft: 45,
        width: '55%',
        fontSize: 16,
        color: 'grey'
    },
    ChangeCoup: {
        width: '100%',
        height: 'auto',
        backgroundColor: 'white'
    },
    ExchageImg: {
        width: 80,
        height: 80,
        marginLeft: 15
    },
    CoupTxt3: {
        fontSize: 13,
        marginLeft: 15,
        color: '#2e2e2e',
        fontWeight: 'bold',
    },
    CoupTxt4: {
        fontSize: 17,
        marginLeft: 15,
        color: 'black',
        width: 220,
    },
})
