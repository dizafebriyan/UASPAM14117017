import { StyleSheet,StatusBar,View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native'
import React, { Component } from 'react'


function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }


class Table extends Component {
 constructor(props){
        super(props);
        this.state={
            searchData:'',
            dataMovie:[]
        };
    }
 ambildata=()=>{
    fetch('http://www.omdbapi.com/?apikey=4938c7c8&s='+this.state.searchData)
    .then((response)=>response.json())
    .then((json)=>this.setState({dataMovie:json.Search},()=>console.log(json)))
    .catch((err)=>console.log(err))
 }
 render(){
  return (
    
    <View style ={{ flex:1 }}>

        <View style = {{ flex:1,backgroundColor:'#000', justifyContent : 'center',alignItems:'center' }}>

            <Text style={{ color:'#fff', fontSize:24, fontWeight:'bold' }}>Movie</Text>

        </View>

        <View style={{ flex:7}}>

            <View style={{flex:1,backgroundColor : '#fff',flexDirection:'row', justifyContent:'center',alignItems:'flex-start',marginTop:10 }}>

                <View>
                    <TextInput placeholder='Cari film' 
                    onChangeText={(value)=>this.setState({searchData:value})} 
                    style={{ 
                    marginHorizontal:20,
                    paddingHorizontal:10,
                    borderBottomColor:'#000',
                    borderBottomWidth:2,
                    width:200 }}

                    />
                </View>

                <View>
                    <TouchableOpacity style={{ 
                        backgroundColor:'#000',
                        paddingHorizontal:20,
                        paddingVertical:20,
                        borderRadius:10,
                        elevation:5 }}
                        onPress= {()=>this.ambildata()}>

                        <Text style={{ color:'#fff' }}>Search</Text>

                    </TouchableOpacity>
                </View> 
            </View>
        </View>

        <FlatList
                data={this.state.dataMovie}
                keyExtractor={(item)=>item.imdbID}
                renderItem={({item,index})=>(
                <SafeAreaView>
                <View>
                    <Text>{item.Title}</Text>
                    <Text>{item.Year}</Text>
                    <Text>{item.Poster}</Text>
                </View>
                </SafeAreaView>
                    )}/>
    </View>
  )
}
}

export default Table;

const styles = StyleSheet.create({

    container: {
        marginTop:200
    }
})