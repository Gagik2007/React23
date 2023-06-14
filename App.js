import React from 'react';
import {StyleSheet, Text, SafeAreaView, Pressable,TextInput, StatusBar,View, FlatList, Image} from 'react-native';


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
  {
    id: 4,
    title: "Անվասայլակներ",
  }
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const SellItem = ({url,desc,price,itemName}) => {
  const styles = StyleSheet.create({
    sellItem:{
      alignItems:'center',
      flexDirection:'row',
      marginBottom:10
    
    },
    sellItemImage:{
      alignItems:'center',
      marginRight:5
    },
    sellItemHeader:{
      fontSize:20,
      color:'white',
      marginBottom:5

    },
    sellItemPrice:{
      fontWeight:'bold',
      color:'white',
      fontSize:18,


    },
    sellItemDesc:{
      // width:'70%',
      color:'white'
    }
    
  })
  descrip = desc
  if(desc.length >= 20) descrip = desc.slice(0,40) + '...'
  
  return(
    <View style={styles.sellItem}>
          <View style={styles.sellItemImage}>
            <Image source={{
              uri:url
            }} style={{width:150,height:75,borderRadius:14}} />
          </View>
      <View style={styles.styleItemTexts}>
        <Text style ={styles.sellItemHeader} >{itemName}</Text>
    <Text style={styles.sellItemPrice}>{'$' + price}</Text>
   
    <Text style={styles.sellItemDesc}>{descrip}</Text>


          </View>
    </View>
  )
 
}
  const sellItemData = [
    {
      id:0,
      url:'https://d1d5up1bxajdjs.cloudfront.net/1800x1200/object/toyota-supra-mk4-30-turbo-14101-16318813011.jpeg',
      desc:`Supra A80 with 320hp motor`,
      price:28950,
      header:"Toyota Supra 1993 "

    },

    {
      id:1,
      url:'https://d1d5up1bxajdjs.cloudfront.net/1800x1200/object/toyota-supra-mk4-30-turbo-14101-16318813011.jpeg',
      desc:`Supra A80 with 320hp motor`,
      price:92800,
     
      header:"Toyota Supra 1993 "

    },

    {
      id:2,
      url:'https://d1d5up1bxajdjs.cloudfront.net/1800x1200/object/toyota-supra-mk4-30-turbo-14101-16318813011.jpeg',
      desc:`Supra A80 with 320hp motor`,
      price:55900,
      header:"Toyota Supra 1993 "

    },

    {
      id:3,
      url:'https://d1d5up1bxajdjs.cloudfront.net/1800x1200/object/toyota-supra-mk4-30-turbo-14101-16318813011.jpeg',
      desc:`Supra A80 with 320hp motor`,
      price:45890,
      header:"Toyota Supra 1993 "


    },
    {
      id:4,
      url:'https://d1d5up1bxajdjs.cloudfront.net/1800x1200/object/toyota-supra-mk4-30-turbo-14101-16318813011.jpeg',
      desc:`Supra A80 with 320hp motor`,
      price:28990,
    

      header:"Toyota Supra 1993 "


    },
    {
      id:5,
      url:'https://d1d5up1bxajdjs.cloudfront.net/1800x1200/object/toyota-supra-mk4-30-turbo-14101-16318813011.jpeg',
      desc:`Supra A80 with 320hp motor`,
      price:84000,
      header:"Toyota Supra 1993 "


    },
    {
      id:6,
      url:'https://d1d5up1bxajdjs.cloudfront.net/1800x1200/object/toyota-supra-mk4-30-turbo-14101-16318813011.jpeg',
      desc:`Supra A80 with 320hp motor`,
      price:84000,
      header:"Toyota Supra 1993 "


    },
  ]

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
      <FlatList
        data={sellItemData}
        renderItem={({item}) => <SellItem url={item.url} desc={item.desc} status={item.status} itemName={item.header} price={item.price}/> }
        keyExtractor={item => item.id}
        />
      </View>
 

      <View style={styles.footer}>
      <Image source={
            {
              uri:'https://icon-library.com/images/home-icon-black/home-icon-black-1.jpg'
            }
          } style={styles.pagesIcon} /> 
          <Image source={
            {
              uri:'https://cdn.nerdschalk.com/wp-content/uploads/2020/09/aesthetic-app-icons-black-6-e1601116181704.jpg?width=1500'
            }
          } style={styles.pagesIcon} /> 
                <Image source={
            {
              uri:'https://www.gloryofthesnow.com/wp-content/uploads/2022/05/ZOOM-Cloud-Meetings-Black.png'
            }
          } style={styles.pagesIcon} /> 
          <Image source={
            {
              uri:'https://mcdn.wallpapersafari.com/medium/70/35/PjtODp.jpg'
            }
          } style={styles.pagesIcon} /> 
             <Image source={
            {
              uri:'https://as1.ftcdn.net/v2/jpg/02/09/95/42/1000_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.jpg'
            }
          } style={styles.pagesIcon} /> 
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
title:{
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
  borderRadius:7,
  color:'white'
},
footer:{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor:'black',
    flexDirection:'row',
    justifyContent:'space-around',
    padding:3
  },
 
pagesIcon:{
  width:50,
  height:50
}
});

export default App;