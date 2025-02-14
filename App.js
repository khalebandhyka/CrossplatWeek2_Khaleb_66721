import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.blueText}>This is my friends</Text>

        <View style={styles.imageContainer}>
          <View style={styles.item}>
            <Image source={require('./assets/lebbus.jpg')} style={styles.image}/>
            <Text style={styles.blueText}>Khaleb Andhyka Aprijadi - 00000066721</Text>
          </View>

          <View style={styles.item}>
            <Image source={require('./assets/hito.jpg')} style={styles.image}/>
            <Text style={styles.blueText}>Hito Kawiswara - 00000067891</Text>
          </View>

          <View style={styles.item}>
            <Image source={require('./assets/cisarus.jpg')} style={styles.image}/>
            <Text style={styles.blueText}>Caesar Eka Nathanael - 00000065465</Text>
          </View>

          <View style={styles.item}>
            <Image source={require('./assets/mario.jpg')} style={styles.image}/>
            <Text style={styles.blueText}>Mario Richie Lim - 00000078951</Text>
          </View>

          <View style={styles.item}>
            <Image source={require('./assets/webe.jpg')} style={styles.image}/>
            <Text style={styles.blueText}>William Purba - 00000065342</Text>
          </View>

          <View style={styles.item}>
            <Image source={require('./assets/marpis eving.jpg')} style={styles.image}/>
            <Text style={styles.blueText}>Marvell Christoffer - 00000054543</Text>
          </View>

          <View style={styles.item}>
            <Image source={require('./assets/awe.jpg')} style={styles.image}/>
            <Text style={styles.blueText}>Ryo Anthonio Wijaya - 00000077612</Text>
          </View>

          <View style={styles.item}>
            <Image source={require('./assets/damu.jpg')} style={styles.image}/>
            <Text style={styles.blueText}>Daffa Muflih Purnama - 00000066891</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center', 
  },
  item: {
    alignItems: 'center', 
    marginBottom: 20, 
  },
  image: {
    width: 100,  
    height: 100,
    marginVertical: 10,
    borderRadius: 10, 
  },
  blueText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
});
