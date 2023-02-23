/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export const User = ({
    userItem,
    setUser,
    setModalVisible,
    userEdit,
    userDelete,
    setModalUser,
}) => {
    const {userName, userEmail, birthday} = userItem;
    return (
        <Pressable
            onLongPress={() => {
                setModalUser(true);
                setUser(userItem);
            }}>
            <View style={styles.content}>
                <Text style={styles.label}>Nombre: {/* {userName} */}</Text>
                <Text style={styles.text}>{userName}</Text>
                <Text style={styles.text}>{userEmail}</Text>
                <Text style={styles.birthdayStyle}>{birthday}</Text>
            </View>
            <View>
                {/* Botón para editar usuarios */}
                <Pressable
                    style={[styles.btn, styles.btnEdit]}
                    onLongPress={() => {
                        setModalVisible(true);
                        userEdit(id);
                    }}>
                    <Text style={styles.btnText}>Edit</Text>
                </Pressable>

                {/* Botón para eliminar usuarios */}
                <Pressable
                    style={[styles.btn, styles.btnDelete]}
                    onLongPress={() => { userDelete(id) }}>
                    <Text style={styles.btnText}>Delete</Text>
                </Pressable>
            </View>

        </Pressable>
    );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#fff',
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    label: {
        color: '#000',
        textTransform: 'uppercase',
        fontWeight: '800',
        marginBottom: 5,
    },
    text: {
        color: '#000',
        marginBottom: 10,
        fontSize: 16,
        fontWeight: '600',
    },
    birthdayStyle: {
        color: '#000',
    },
    btn: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    btnEdit: {
        backgroundColor: '#000',
    },
    btnDelete: {
        backgroundColor: '#f00',
    },
    btnText: {
        color: '#fff',
        fontWeight: '800',
        fontSize: 16,
        textTransform: 'uppercase',
    },
});
