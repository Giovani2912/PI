import { useEffect, useState } from "react";
import { Text, View, Image, FlatList, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MatchCard } from "./src/components/MatchCard";

function GameScreen() {
  const [carregando, setCarregando] = useState(true);
  const [dados, setDados] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3333/matches')
      .then((resp) => resp.json())
      .then((json)=>setDados(json))
      .finally(()=>setCarregando(false))
  })

  return(
    <View>
      {
        carregando ? <ActivityIndicator /> : (
          <View>
          <Text>Partidas recentes</Text>
          <FlatList 
            data={dados}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <View>
                <Text style={{color: 'white', fontSize: 44}}>{item.timeA}</Text>
                <Text style={{color: 'white', fontSize: 44}}>{item.placarTimeA}</Text>
                <Text style={{color: 'white', fontSize: 44}}>X</Text>
                <Text style={{color: 'white', fontSize: 44}}>{item.timeB}</Text>
                <Text style={{color: 'white', fontSize: 44}}>{item.placarTimeB}</Text>

              </View>
            )}
          />
          </View>
        )
      }
    </View>
  )
}

function NewsScreen() {
  const [carregando, setCarregando] = useState(true);
  const [dados, setDados] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3333/news')
      .then((resp) => resp.json())
      .then((json)=>setDados(json))
      .finally(()=>setCarregando(false))
  })

  return(
    <View>
      {
        carregando ? <ActivityIndicator /> : (
          <View>
          <Text>Notícias</Text>
          <FlatList 
            data={dados}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <View>
                <Text style={{color: 'white', fontSize: 44}}>{item.titulo}</Text>
                <Text style={{color: 'white', fontSize: 44}}>{item.descricao}</Text>
              </View>
            )}
          />
          </View>
        )
      }
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Games" component={GameScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}