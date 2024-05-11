import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useRef, useState } from 'react';
import ProgressHeader from '../../components/ProgressHeader';
import DropDown from '../../components/Dropdown';
import InputText from '../../components/InputText';
import { faHome, faFlag, faRing, faChevronDown, faVenusMars } from '@fortawesome/free-solid-svg-icons/';


export default function Home() {

  const [completed, setCompleted] = useState(false);
  const [numOfSteps, setNumOfSteps] = useState(5);

  return (
    <>
      <StatusBar style='light' backgroundColor='#1FA6EC' translucent animated />
      <ProgressHeader TotalSteps="6" CurrentStep="1" />
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Informação Pessoal</Text>
          <InputText placeholder="Nome Completo" icon={faHome} />
          <InputText placeholder="Nacionalidade" icon={faFlag} />

          <DropDown initialValue="Estado Civil" values={['Solteiro', 'Casado']} icon_start={faRing} icon_end={faChevronDown} />
          <DropDown initialValue="Gênero" values={['Feminino', 'Masculino']} icon_start={faVenusMars} icon_end={faChevronDown} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginBottom: 30,
    marginVertical: 10
  },
  main: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    width: "100%",
    padding: 20
  },
  divi: {
    margin: 20
  }
});
