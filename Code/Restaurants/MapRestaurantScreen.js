import React, { Component } from 'react'
import { 
    View, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView, Dimensions
 } from "react-native";
import MapView, {Marker} from "react-native-maps";
import  Icon  from "react-native-vector-icons/FontAwesome";
import ItemRestaurants from './FlastListItemRestaurants/ItemRestaurants';


const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class MapRestaurantScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            region:{
                latitude:21.038247,
                longitude:105.7825949,
                latitudeDelta:0.02,
                longitudeDelta:0.02,
            },
            listRestaurants:[
                {
                    title: "la decima",
                    rating: 4,
                    vote: 190,
                    distance: 1934,
                    image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg',
                    location:{
                        latitude: 21.038240,
                        longitude: 105.7825929 
                    }
                },
                {
                    title: "la decima34",
                    rating: 4,
                    vote: 190,
                    distance: 1934,
                    image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg',
                    location:{
                        latitude: 21.040226,
                        longitude: 105.779483 
                    }
                },
                {
                    title: "la decima54",
                    rating: 4,
                    vote: 190,
                    distance: 1934,
                    image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg',
                    location:{
                        latitude:21.035850, 
                        longitude:105.783474 
                    }
                },
                {
                    title: "la decima7uy6",
                    rating: 4,
                    vote: 190,
                    distance: 1934,
                    image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg',
                    location:{
                        latitude: 21.03421,
                      longitude: 105.732345 
                    }
                },
            ]
        }
    }
  render() {
    return (
      <View style={{flex:1}}>
            <View style={StyleSheet.header}>
                <ImageBackground
                        source={require('../../Resource/Hotels/logo.png')}
                        style = {{height: 100, width:'100%'}}>
                        <View style = {{flex:1}}></View>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <View style={styles.containerBackHeader}>
                                <TouchableOpacity 
                                    style={{height:20, width:30, borderRadius:20}}
                                    onPress={()=> {this.props.navigation.goBack()}}>
                                    <Icon
                                        name='long-arrow-left'
                                        size={20}
                                        style={{color:'white'}}
                                    />
                                </TouchableOpacity>
                                
                                <Text style={{color:'white', fontSize:20, marginHorizontal:15}}>Restaurants</Text>
                            </View>
                            <View style={styles.containerMenuHeader}>
                                    <Icon
                                        name='search'
                                        size={20}
                                        style={{color:'white', margin:10}}
                                    />
                                    <Icon
                                        name='list'
                                        size={20}
                                        style={{color:'white', margin:10}}
                                    />
                            </View>
                        </View>
                   </ImageBackground>
            </View>
            <View style = {styles.body}>
                <MapView
                    ref={map => this.map = map}
                    initialRegion={this.state.region}
                    style={{height:'100%'}}>
                    {this.state.listRestaurants.map((item, index) => (
                    <Marker
                        coordinate = {item.location}
                        title = {item.title}>
                        <Image source = {require('../../Resource/Hotels/Map/restaurantMarker.png')}
                            style={{height:200, width:200}}
                        />
                        </Marker>
                        
                ))}
                </MapView>

                
                
                <Image
                        source={require('../../Resource/Hotels/Map/qw.png')}
                        style={{height:100, width:100}}
                        contentContainerStyle={{alignItems:'center', justifyContent:'center'}}
                />

                <ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH}
                    style={styles.scrollView}
                    contentContainerStyle={styles.endPadding}>
                    {this.state.listRestaurants.map((item, index) => (
                        <ItemRestaurants
                            title = {item.title}
                            image = {item.image}
                            distance = {item.distance}
                            rating = {item.rating}
                            vote = {item.vote}
                        />
                    ))}
                </ScrollView>
                
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    header:{

    },
    containerBackHeader: {
        flex:1,  
        justifyContent:'flex-start', 
        alignItems:'center', 
        flexDirection:'row', 
        paddingLeft:20
    },
    containerMenuHeader:{
        flex:1, 
        justifyContent:'flex-end', 
        alignItems:'center', 
        flexDirection:'row', 
        paddingRight:5
    },
    body:{
        flex:1,
    },
    scrollView: {
        position: "absolute",
        bottom: 10,
        left: 10,
        right: 0,
        paddingVertical: 5,
    },
    endPadding: {
    //  paddingHorizontal: width - CARD_WIDTH,
    },
})