import React, { Component } from 'react'
import {
    View, Text, ImageBackground, TouchableOpacity, StyleSheet, FlatList, Dimensions, Animated, ScrollView, Image
} from 'react-native'
import  Icon  from "react-native-vector-icons/FontAwesome";
import MapView, { PROVIDER_GOOGLE , Marker} from 'react-native-maps';
import ItemHotel from './FlatlistItem/ItemHotel';
import ActionButton from 'react-native-action-button';

export default class MapHotelsScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            region:{
                latitude:21.038247,
                longitude:105.7825949,
                latitudeDelta:0.02,
                longitudeDelta:0.02,
            },
            listHotel : [
                {
                    title: "melodi1",
                    rank: 4,
                    rating: 4,
                    vote: 190,
                    distance: 130,
                    image: "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
                    per_night: "103454",
                    location: {
                        latitude: 21.038240,
                        longitude: 105.7825929 
                    }
                  },
                  {
                    title: "melodi2",
                    rank: 4,
                    rating: 4,
                    vote: 190,
                    distance: 130,
                    image: "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
                    per_night: "103454",
                    location: {
                        latitude: 21.040226,
                        longitude: 105.779483
                    }
                  },
                  {
                    title: "melodi3",
                    rank: 4,
                    rating: 4,
                    vote: 190,
                    distance: 130,
                    image: "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
                    per_night: "103454",
                    location: {
                        latitude:21.035850, 
                        longitude:105.783474
                    }
                  },
                  {
                    title: "melodi4",
                    rank: 4,
                    rating: 4,
                    vote: 190,
                    distance: 130,
                    image: "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
                    per_night: "103454",
                    location: {
                      latitude: 21.03421,
                      longitude: 105.732345
                    }
                  }
            ]
        }
    }

    render() {
        return (
               <View style={{flex:1}}>
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
                                
                                <Text style={{color:'white', fontSize:20, marginHorizontal:15}}>Hotels</Text>
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
                   <View style={styles.container}>
                   
                        <MapView
                            ref={map => this.map = map}
                            initialRegion={this.state.region}
                            style={{flex:4}}
                        >

                        {/* {this.state.listHotel.map((hotel, index) => {
                            console.log(this.state.listHotel.length + '--------' + index)
                            return (                            
                                <Marker key={index} 
                                    coordinate={hotel.location}
                                    title={hotel.title}>
                                    <View>
                                        <Image source={require('../../Resource/Hotels/Map/hotelMarker.png')} style={{height:300, width:300}}>
                                        </Image>
                                    </View>
                                </Marker>
                            );
                            
                        })} */}
                        {console.log('return market done...')}
                        </MapView>
                        <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                        <Icon name="md-create" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                        <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                        <Icon name="md-done-all" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    </ActionButton>
                        <Animated.ScrollView
                            horizontal
                            scrollEventThrottle={1}
                            showsHorizontalScrollIndicator={false}
                            style={{flex:1, margin:10}}
                            >
                            {this.state.listHotel.map((marker, index) => {
                                console.log(this.state.listHotel.length + '--------' + index)
                                return(
                                    <ItemHotel
                                                key={index}
                                                title = {marker.title}
                                                image = {marker.image}
                                                rank = {marker.rank}
                                                rating = {marker.rating}
                                                vote = {marker.vote}
                                                distance = {marker.distance}
                                                per_night = {marker.per_night}
                                                location = {marker.location}
                                            />
                                    )
                            })}
                            {console.log('return flatlist done...')}
                        </Animated.ScrollView>
                    </View>
                    
               </View>     
        );
    }
}

const styles = StyleSheet.create({
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
    container: {
        flex:1,
        height:'100%',
      },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
})