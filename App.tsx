import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Modal,
  TouchableOpacity,
} from 'react-native';
/* import {TouchableOpacity} from 'react-native/Libraries/Components/Touchable/TouchableOpacity'; */
/* import {Form} from './src/components/Form'; */

function App(): JSX.Element {
  const [text, onChangeText] = useState('Text');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisibleForm, setModalVisibleForm] = useState(false);
  /* const newUser = () => {console.log('crear usuario')} */
  const [gender, setGender] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>REGISTRO</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={'Nombre(s)'}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={'Apellidos(s)'}
      />

      {/* Sección radio button */}
      <Text style={styles.baseText}>Género</Text>

      <View style={styles.wrapper}>
        {['Masculino', 'Femenino'].map(genderSelect => (
          <View key={genderSelect} style={styles.genderStyle}>
            <Text style={styles.genderSelectTxtStyle}>{genderSelect}</Text>
            <TouchableOpacity
              style={styles.outterRB}
              onPress={() => setGender(genderSelect)}>
              {gender === genderSelect && <View style={styles.innerRB} />}
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Sección correo */}
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={'Correo electrónico'}
      />

      {/* Sección botón1 */}
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        onLongPress={() => console.log('Please realese me')}
        style={styles.btnStyle}>
        <Text style={styles.btnTxtStyle}>iniciar sesión</Text>
      </Pressable>

      {/* Sección botón2 */}
      <Pressable
        onPress={() =>
          setTimeout(() => {
            setModalVisible2(true);
          }, 2000)
        }
        style={styles.btnStyleRed}>
        <Text style={styles.btnTxtStyle}>Registrarse</Text>
      </Pressable>

      {/* Sección botón para abrir el formulario */}
      <Pressable
        onPress={() => setModalVisibleForm(true)}
        style={styles.btnStyleRed}>
        <Text style={styles.btnTxtStyle}>Registrar usuario</Text>
      </Pressable>

      {/* Sección ventana modal */}
      <Modal animationType="slide" visible={modalVisible}>
        <Text style={styles.baseTextWitheMode}>Ventana modal</Text>
        <TextInput
          style={styles.inputWhiteMode}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.inputWhiteMode}
          onChangeText={onChangeText}
          value={text}
        />
      </Modal>

      {/* Modal2 */}
      <Modal animationType="fade" visible={modalVisible2}>
        <Text>Mostrar por 3 seg</Text>
      </Modal>
    </View>
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
  },
  baseText: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'MountainsofChristmas-Regular',
    color: 'white',
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
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  btnStyleRed: {
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
    width: 20,
    height: 20,
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
});
export default App;
