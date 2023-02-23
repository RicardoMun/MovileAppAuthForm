/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import {Form} from './src/components/Form';
import {User} from './src/components/User';

function App(): JSX.Element {
  /* const [text, onChangeText] = useState('Text'); */
  const [modalVisible, setModalVisible] = useState(false);
  const [modalRegistro, setModalRegistro] = useState(false);
  const [users, setUsers] = useState([]);
  /* const [modalRegistro, setModalRegistro] = useState(false); */
  /*  const [selectedDate, setSelectedDate] = useState('');
      const [modalVisible2, setModalVisible2] = useState(false);
      const [gender, setGender] = useState('');
  */

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.baseText}>INICIAR SESIÓN</Text>

        {/* Sección botón1 */}
        <Pressable
          onPress={() => setModalVisible(!modalVisible)}
          onLongPress={() => console.log('Please realese me')}
          style={styles.btnStyle}>
          <Text style={styles.btnTxtStyle}>Ingresar</Text>
        </Pressable>

        {/* Sección botón2 */}
        <Pressable
          onPress={() => setModalRegistro(true)}
          style={styles.btnStyleOrange}>
          <Text style={styles.btnTxtStyle}>Registrarse</Text>
        </Pressable>
        <Form modalRegistro={modalRegistro} setModalRegistro={setModalRegistro}/>
          {users.length === 0 ? <Text>No hay usuaruis</Text> :
            <FlatList
              data={users}
              renderItem={({userItem}) => {
                return (
                  <User userItem={userItem}></User>
                );
              }}
            />
          }
      </View>
    </ScrollView>
  );
}

/*const onPressFunction = () => {
  console.log('Click');
};*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    padding: 20,
    marginTop: 80,
  },
  baseText: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'MountainsofChristmas-Regular',
    color: 'black',
    marginBottom: 50,
    marginTop: 50,
  },
  baseTextWitheMode: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'MountainsofChristmas-Regular',
    color: 'black',
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputWhiteMode: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
  btnStyle: {
    backgroundColor: '#2437DA',
    padding: 20,
    marginTop:120,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  btnStyleOrange: {
    backgroundColor: '#EA4918',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  btnTxtStyle: {
    textAlign: 'center',
    color: '#EDEEF4',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  innerRB: {
    width: 13,
    height: 13,
    borderRadius: 50,
    backgroundColor: '#2437DA',
  },
  outterRB: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  genderStyle: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  genderSelectTxtStyle: {
    fontSize: 14,
    padding: 10,
  },
  calendarStyle: {
    borderRadius: 10,
  },
});
export default App;
