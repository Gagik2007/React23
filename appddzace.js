import React from 'react';
import {StyleSheet, Text, SafeAreaView, Pressable,TextInput, StatusBar,View, FlatList, Image} from 'react-native';
// import SvgComponent from "react-native-svg"

const DATA = [
  {
    id: 1,
    title: "Ավտոմեքենաներ",
  },
  {
    id: 2,
    title: "Տրանսպորտ",
  },
  {
    id: 3,
    title: "Մոտոցիկլեր",
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const App = () => {
 
  return (

    <SafeAreaView style={styles.container}>
    <StatusBar animated={true} />
    <View style={styles.header}>
      <View style={styles.headerFirstLine} >
      <Pressable >
        <Text style={styles.btn}>{'<'}</Text>
      </Pressable>
      <TextInput style={styles.textInput} placeholder='Որոնում'   placeholderTextColor="white"/>
    <Pressable >
        <Text style={styles.btn}>{'?'}</Text>
      </Pressable>
      </View>
 
    <FlatList
           data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
          horizontal={true}
          style={styles.horizon}
      />
     

    </View>
    <View style={styles.main}>
      <Text style={styles.header}>Թոփ հայտարարություններ</Text>
      {/* <FlatList
           data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
          horizontal={true}
      /> */}
    </View>
 
      
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({

container:{
  
  flex: 1,
  backgroundColor:'#1A1A1E'
},

btn:{
  marginTop:10,
  color:'#2A80DA',
  fontSize:44,
  marginRight:15
},
textInput:{
  marginTop:20,
  backgroundColor:'#494949',
  borderRadius:50,
  width:'75%',
  height:40,
  padding:5,
  marginRight:15,
  color:'white'
},
headerFirstLine:{
  flexDirection:'row',
  marginBottom:4,

},
text:{
  color:'white',
  fontSize:18

},
horizon:{
  padding:3,
  backgroundColor:'#',
  marginRight:3,
  borderRadius:5,
  color:'white'
},
flatList:{
  // flex:,
  justifyContent:'center'
},
header:{
  paddingLeft:5,

  // alignItems:'center'
},

main:{
  backgroundColor:'#333300',
  flexDirection:'column'
},
header:{
  fontSize:20,
  marginBottom:10,
  color:'white',
  paddingLeft:5
},
item:{
  marginRight:5,
  backgroundColor:'#494949',
  padding:2,
  borderRadius:7
}
// footer:{
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor:'black',
//     flexDirection:'row',
//     justifyContent:'space-around',
//     padding:3
//   },
//   footerText:{
//     color:'gray'
//   },
// pagesIcon:{
//   width:50,
//   height:50
// }
});

export default App;
