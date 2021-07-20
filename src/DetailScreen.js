import * as React from 'react';
import { View, Text, FlatList, Image, SafeAreaView } from 'react-native';
import api from '../server/api';
import styles from './styles';

function DetailScreen({ route }) {

  function PokemonShowAbility(item) {
    const { name } = item.item
    return (
      <View style={styles.container}>
        <View style={styles.button3}>
          <Text style={styles.textAbility}>| {name} </Text>
        </View>
      </View>
    )
  }

  function PokemonShowMoves(item) {
    const { name } = item.item
    return (
      <View style={styles.container}>
        <View style={styles.button1}>
          <Text style={styles.textAbility}> {name} </Text>
        </View>
      </View>
    )
  }

  const { name, url } = route.params;

  const [detailspokemon, setDetails] = React.useState([])
  React.useEffect(() => {
    api.get(url).then(({ data }) => {
      setDetails(data.abilities.map(x => x.ability))
    });

  }, []);

  const [movespokemon, setMoves] = React.useState([])
  React.useEffect(() => {
    api.get(url).then(({ data }) => {
      setMoves(data.moves.map(x => x.move))
    });

  }, []);

  const [id, setId] = React.useState([])
  React.useEffect(() => {
    api.get(url).then(({ data }) => {
      setId(data.id)

    });

  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <Text style={styles.titulo1}>Detalhes do Pokémon</Text>
      </View>
      <View style={styles.pokemon}>
        <View style={styles.imageArea}>
          <View style={styles.imageArea1}>
            <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` }}
              style={{ width: 200, height: 200 }} />
          </View>
        </View>
        <View style={styles.dcrArea}>
          <View style={styles.descriptArea}>
            <Text style={styles.nome}>Nome:</Text>
            <Text style={styles.nomePokemon}>{name}</Text>
          </View>
        </View>
      </View>
      <View style={styles.abilityView}>
        <View style={styles.abilitys}>
          <Text style={styles.nome}>Habilidades:</Text>
          <FlatList data={detailspokemon}
            keyExtractor={(pokemonability) => pokemonability.name}
            contentContainerStyle={{ flexGrow: 1 }, { flexDirection: 'row' }}
            renderItem={PokemonShowAbility}
          >
          </FlatList>
        </View>
      </View>
      <View style={styles.movesView}>
        <Text style={styles.nome2}>Movimentos:</Text>
        <View style={styles.moves}>
          <SafeAreaView>
            <FlatList data={movespokemon}
              contentContainerStyle={{ width: '100%' }}
              numColumns={2}
              keyExtractor={(pokemonMoves) => pokemonMoves.name}
              renderItem={PokemonShowMoves}>
            </FlatList>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
}

export default DetailScreen;

