import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

export default MenuItem = ({icon, menuName,onPress}) => (
    <View style={styles.container}>
        <TouchableOpacity style={{flex:1}} onPress={onPress}>
            <View style={styles.item}>
                <View style={styles.icon}>
                    <Icon name={icon || "pizza"}/>
                    <View style={{
                        height: 35,
                        width: StyleSheet.hairlineWidth,
                        backgroundColor: '#dfdfdf',
                        marginLeft: 10
                    }}></View>
                </View>
                <View style={styles.text}>
                    <Text>{menuName || "?"}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        height: 50,
        backgroundColor: '#f1f1f1',
        marginBottom: 10
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    icon: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {}
});