import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import api from '../server/api';
import styles from './styles';

function HomeScreen({ navigation },) {

  function PokemonShow(item) {

    const { name, url } = item.item

    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.customBtnBG}
            onPress={() => {
              navigation.navigate('Detail', { name, url })
            }} >
            <Text style={styles.customBtnText}>{name}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const [poke, setPoke] = React.useState([])
  React.useEffect(() => {
    api.get('api/v2/pokemon?limit=20').then((response) => {
      setPoke(response.data.results)
    });
  }, []);

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo1}>Lista de Pokémons</Text>
      </View>
      <FlatList data={poke}
        keyExtractor={(pokemon) => pokemon.name}
        keyExtractor={(pokemonurl) => pokemonurl.url}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={PokemonShow}>
      </FlatList>
    </View>
  );
}

export default HomeScreen;
