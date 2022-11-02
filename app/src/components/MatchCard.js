import { Text, View, Image, FlatList } from 'react-native';

export function MatchCard(){
    return(
    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: 'gray', height: '30%', width: '80%'}}>
    <View style={{flex: 2, height: '100%', width: '50%', alignItems: 'center', justifyContent: 'center'}}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: 20}}>
        <Text style={{ flex: 1, backgroundColor: 'black', width: 30, height: 40, borderRadius: 200 / 2}}>{data.timeA}</Text>
        <Text style={{ flex: 2,  marginLeft: 10}}>{data.placarTimeA}</Text>
      </View>
      <Text style={{flex: 1}}>PLacar Time 1</Text>
    </View>
    
      <Text>X</Text>
    
    <View style={{flex: 2, height: '100%', width: '50%', alignItems: 'center', justifyContent: 'center'}}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: 20}}>
        <Text style={{ flex: 1, backgroundColor: 'black', width: 30, height: 40, borderRadius: 200 / 2}}>{data.timeB}</Text>
        <Text style={{ flex: 2, marginLeft: 10}}>{data.placarTimeA}</Text>
      </View>
      <Text style={{flex: 1}}>PLacar Time 2</Text>
    </View>
    </View>
    )
}
