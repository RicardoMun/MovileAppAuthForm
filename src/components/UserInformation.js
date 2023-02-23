/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native/types';

export const UserInformation = ({user, setUser, setModalUser}) => {
    return (
        <SafeAreaView style={styles.content}>
            <Text style={styles.tittle}>
                Información {''}
                <Text style={styles.tittleBold}>Usuario</Text>
            </Text>
            <View>
                <Pressable
                    style={styles.btnClose}
                    onLongPress={() => {
                        setModalUser(false);
                        setUser({});
                    }}>
                    <Text style={styles.btnCloseTxt}>Cerrar</Text>
                </Pressable>
            </View>

            <View style={styles.content2}>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.value}>{user.userName}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{user.userEmail}</Text>
                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#fff',
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    tittle: {
        color: '#000',
        textTransform: 'uppercase',
        fontWeight: '800',
        marginBottom: 5,
    },
    tittleBold: {
        fontWeight: 'bold',
    },
    btnClose: {
        backgroundColor: '#2477DA',
        padding: 10,
        margin: 10,
        marginBottom: 50,
        borderRadius: 10,
        textAlign: 'center',
        width: 200,
        alignSelf: 'center',
    },
    btnCloseTxt: {
        textAlign: 'center',
        color: '#EDEEF4',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    content2: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    campo: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 15,
    },
});
