/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import RadioButtonRN from 'radio-buttons-react-native';

export const Form = ({modalRegistro, setModalRegistro}) => {

  const [setSelectedDate] = useState('');
  const [userName, setUserName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const data = [
    {
      label: 'Masculino',
    },
    {
      label: 'Femenino',
    },
  ];

  return (
      <Modal animationType="slide" visible={modalRegistro}>
        <SafeAreaView style={styles.content}>
          <ScrollView>

            {/* Botón para cerrar ventana modal */}
            <Pressable
              style={styles.exitWindow}
              onPress={() => setModalRegistro(!modalRegistro)}>
              <Text style={styles.btnTxtStyle}> Regresar </Text>
            </Pressable>
            <Text style={styles.title}>Registrarse</Text>

            <View>
              <TextInput
              placeholder="Nombre"
              style={styles.input}
              value={userName}
              onChange={setUserName}
              />{/* Cierre TextInput */}

              <TextInput
              placeholder="Apellido"
              style={styles.input}
              value={userLastName}
              onChange={setUserLastName}
              />{/* Cierre TextInput */}

              <TextInput
              placeholder="Correo"
              style={styles.input}
              value={email}
              onChange={setEmail}
              />{/* Cierre TextInput */}

              <TextInput
              placeholder="Edad"
              style={styles.input}
              value={userAge.toString()}
              onChange={setUserAge}
              />{/* Cierre TextInput */}

              <Text style={styles.semiTitle}>Género</Text>
              <RadioButtonRN
                data={data}
                box={false}
                selectedBtn={(e) => console.log(e)}
              />

              <Text style={styles.semiTitle}>Fecha de nacimiento</Text>
              <DatePicker
              onSelectedChange={date => setSelectedDate(date)}
              />

              <Pressable
                style={styles.btnStyle}>
                <Text style={styles.btnTxtStyle}>Enviar Información</Text>
              </Pressable>

            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
  );
};


const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  semiTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  btnStyle: {
    backgroundColor: '#2477DA',
    padding: 10,
    margin: 10,
    marginBottom: 50,
    borderRadius: 10,
    textAlign: 'center',
    width: 200,
    alignSelf: 'center',
  },
  exitWindow: {
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#2477DA',
    margin: 15,
    padding: 5,
    height: 30,
    width: 75,
  },
  btnTxtStyle: {
    textAlign: 'center',
    color: '#EDEEF4',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },

});
