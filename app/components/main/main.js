import React,{Component} from 'react'
import {View,Image,Button,StyleSheet,Text,TextInput
    ,TouchableOpacity,
    ScrollView} from 'react-native';

export default class MainComponent extends Component{
    jumpuToList=()=>{
        this.props.navigation.navigate("product")
    }
    render(){
        return <ScrollView style={{backgroundColor:"powderblue",flex:1}}>
          <View style={styles.conitaner}>  
        <View style={styles.childConitaner}>
            <Text style={{fontSize:30,color:"red"}}>200</Text>
            <Text>今日pc端pv量</Text>
        </View> 
        <View style={styles.childConitaner}>
            <Text style={{fontSize:30,color:"green"}}>200</Text>
            <Text>今日移动端pv量</Text>
        </View>
        </View>
        <View style={styles.conitaner}>  
        <View style={styles.childConitaner}>
            <Text style={{fontSize:30,color:"red"}}>100</Text>
            <Text>已完成订单总数</Text>
        </View> 
        <View style={styles.childConitaner}>
            <Text style={{fontSize:30,color:"green"}}>200</Text>
            <Text>今日移动端pv量</Text>
        </View>
        </View>
        <Text></Text> 
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={{ flex:1,alignItems:"center",justifyContent:"center"}}>
                <Image style={{width:60,height:60}} source={require("../../imgs/1.jpg")}></Image>
                <Text>订单管理</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1, alignItems:"center",justifyContent:"center"}}>
                <Image style={{width:60,height:60}} source={require("../../imgs/1.jpg")}></Image>
                <Text>用户管理</Text>
            </TouchableOpacity>
        </View>
        <Text></Text>
         {/*作为分隔上部分的内容 */}
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity
             onPress={this.jumpuToList}
             style={{ flex:1,alignItems:"center",justifyContent:"center"}}>
                <Image style={{width:60,height:60}} source={require("../../imgs/1.jpg")}></Image>
                <Text>商品管理</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1, alignItems:"center",justifyContent:"center"}}>
                <Image style={{width:60,height:60}} source={require("../../imgs/1.jpg")}></Image>
                <Text>设置</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>  
    }
}

const styles = StyleSheet.create({
    conitaner:{
        flexDirection:"row",
    },
    childConitaner:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        borderColor:"#fff",
         borderRightWidth:2,
        borderBottomWidth:2,
        height:100,
    },
    childConitaner1:{
       
    }

})