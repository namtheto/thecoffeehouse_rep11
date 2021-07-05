import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const DATA = [
    {
        id: 1,
        logo: 'data:image/jpeg;base64,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',
        script: 'Ưu đãi 25% dịch vụ tổng quát tại Nha Khoa Kim',
        Bean: '59',
        Img: 'https://img.kam.vn/images/375x0/23907f5b79ce42c6beeee5b01e1aa5e3/image/nha-khoa-kim-uu-dai-25-dich-vu-rang-su.jpg'
    },
    {
        id: 2,
        logo: 'data:image/jpeg;base64,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',
        script: 'Ưu đãi 35% dịch vụ thẩm mỹ tại Nha Khoa Kim',
        Bean: '79',
        Img: 'https://img.kam.vn/images/375x0/1c02189d5b6644beaf9979197dfa9905/image/nha-khoa-kim-sale-den-35-rang-su-tham-my.jpg'
    },
    {
        id: 3,
        logo: 'https://chanhtuoi.vn1.vdrive.vn/uploads/2016/03/ok-1.jpg',
        script: 'Ưu đãi 15% đặt phòng khách sạn tại Mytour',
        Bean: '99',
        Img: 'https://stc.shopiness.vn/deal/2019/08/13/1/4/8/b/1565686926708_540.png'
    },
]
const DoiUuDai = () => {
    const renderItem1 = ({ item }) => (
        <TouchableOpacity style={{ width: 340, height: 420, backgroundColor: 'white', margin: 10, borderRadius: 10 }}>
            <Image
                source={{ uri: item.Img }}
                style={{ width: 340, height: 340 }}
            />
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Image
                        source={{ uri: item.logo }}
                        style={{ width: 20, height: 20, marginTop: 15, marginLeft: 20 }}
                    />
                    <Text style={{ width: 250, marginLeft: 20, color: '#585858' }}>{item.script}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 50, height: 50, marginTop: 15 }}>
                    <View style={{ backgroundColor: '#A9F5BC', width: 40, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: '#088A29' }}>{item.Bean}</Text>
                    </View>
                    <Text style={{ fontSize: 16, marginTop: 5 }}>BEAN</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
    const renderItem2 = ({ item }) => (
        <TouchableOpacity style={{ width: '95%', height: 150, backgroundColor: 'white', margin: 5, alignSelf: 'center', borderBottomColor: 'silver', borderBottomWidth: 0.4, borderRadius: 8, flexDirection: 'row' }}>
            <Image
                source={{ uri: item.Img }}
                style={{
                    width: 100,
                    height: 100,
                    marginLeft: 15,
                    borderRadius: 8,
                    alignSelf: 'center'
                }}
            />
            <View>
                <Image
                    source={{ uri: item.logo }}
                    style={{
                        width: 30,
                        height: 30,
                        marginLeft: 15,
                        marginTop: 21,
                    }}
                />
                <Text style={{ width: 180, marginLeft: 15, color: '#585858' }}>{item.script}</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: 50, height: 50, marginTop: 50 }}>
                <View style={{ backgroundColor: '#A9F5BC', width: 40, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                    <Text style={{ color: '#088A29' }}>{item.Bean}</Text>
                </View>
                <Text style={{ fontSize: 16, marginTop: 5 }}>BEAN</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() =>
                <View>
                    <View style={styles.TitComp}>
                        <Text style={styles.title}>Nổi bật</Text>
                        <TouchableOpacity style={styles.Xtc}>
                            <Text style={styles.TxtBn}>XEM TẤT CẢ</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={DATA}
                        renderItem={renderItem1}
                        keyExtractor={item => item.id}
                    />
                    <View style={styles.TitComp}>
                        <Text style={styles.title}>Từ đối tác</Text>
                        <TouchableOpacity style={styles.Xtc}>
                            <Text style={styles.TxtBn}>XEM TẤT CẢ</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem2}
                        keyExtractor={item => item.id}
                    />
                    <Text style={[styles.title, { marginTop: 25 }]}>By Category</Text>
                    <View style={styles.CateDad}>
                        <TouchableOpacity style={styles.CateChild}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('../assets/Icon/crown.png')}
                                    style={styles.Icon}
                                />
                                <Text style={styles.TxtCate}>Tất cả</Text>
                            </View>
                            <AntDesign name={'right'} size={18} color={'silver'} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                        <View
                            style={styles.line}
                        />
                        <TouchableOpacity style={styles.CateChild}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('../assets/Icon/tch.png')}
                                    style={styles.Icon}
                                />
                                <Text style={styles.TxtCate}>The Coffee House</Text>
                            </View>
                            <AntDesign name={'right'} size={18} color={'silver'} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                        <View
                            style={styles.line}
                        />
                        <TouchableOpacity style={styles.CateChild}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('../assets/Icon/eat.png')}
                                    style={styles.Icon}
                                />
                                <Text style={styles.TxtCate}>Ăn uống</Text>
                            </View>
                            <AntDesign name={'right'} size={18} color={'silver'} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                        <View
                            style={styles.line}
                        />
                        <TouchableOpacity style={styles.CateChild}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('../assets/Icon/travel.png')}
                                    style={styles.Icon}
                                />
                                <Text style={styles.TxtCate}>Du lịch</Text>
                            </View>
                            <AntDesign name={'right'} size={18} color={'silver'} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                        <View
                            style={styles.line}
                        />
                        <TouchableOpacity style={styles.CateChild}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('../assets/Icon/shop.png')}
                                    style={styles.Icon}
                                />
                                <Text style={styles.TxtCate}>Mua sắm</Text>
                            </View>
                            <AntDesign name={'right'} size={18} color={'silver'} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                        <View
                            style={styles.line}
                        />
                        <TouchableOpacity style={styles.CateChild}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('../assets/Icon/entertai.png')}
                                    style={styles.Icon}
                                />
                                <Text style={styles.TxtCate}>Giải trí</Text>
                            </View>
                            <AntDesign name={'right'} size={18} color={'silver'} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                        <View
                            style={styles.line}
                        />
                        <TouchableOpacity style={styles.CateChild}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('../assets/Icon/service.png')}
                                    style={styles.Icon}
                                />
                                <Text style={styles.TxtCate}>Dịch vụ</Text>
                            </View>
                            <AntDesign name={'right'} size={18} color={'silver'} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                        <View
                            style={styles.line}
                        />
                        <TouchableOpacity style={styles.CateChild}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('../assets/Icon/limit.png')}
                                    style={styles.Icon}
                                />
                                <Text style={styles.TxtCate}>Giới hạn</Text>
                            </View>
                            <AntDesign name={'right'} size={18} color={'silver'} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                        <View
                            style={styles.line}
                        />
                    </View>
                </View>
            }
            style={{ marginBottom: 100 }}
        />
    )
}

export default DoiUuDai

const styles = StyleSheet.create({
    TitComp: {
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
        marginTop: 25,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 20
    },
    Xtc: {
        width: 100,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 0.1,
        borderColor: 'silver',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    TxtBn: {
        color: '#fe8f01'
    },
    CateDad: {
        width: '100%',
        height: 'auto',
        marginBottom: 15,
        backgroundColor: 'white',
    },
    CateChild: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Icon: {
        width: 25,
        height: 25,
        marginHorizontal: 15
    },
    TxtCate: {
        fontSize: 16
    },
    line: {
        height: 1,
        width: '95%',
        backgroundColor: '#f2f2f2',
        alignSelf: 'flex-end'
    },
})
