import React,{Component} from 'react'
import {View,
    Image,
    Button,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList} from 'react-native';
export default class MyProductComponent extends Component{
    constructor(){
        super();
        this.state ={
        
            List:[],
        }
    }
     componentWillMount=()=>{
            fetch("http://176.116.113.158/ajia_code/data/product/list.php")
            .then((response)=>{ return response.json()})
            .then((response)=>{
                var nowList = response.data
                for(var i = 0; o<nowList.length;i++){
                    nowList[i].key = i
                }

                this.setState({List:response.data})
                   console.log(response)
            })
            console.log(1)
    }
    showSile=(ndex)=>{
        this.state.List[index].sold_count
    }
  
    showTitle=(info)=>{
        return <TouchableOpacity onPress={()=>this.showSile(info.index)}
        style={{flexDirection:"row",alignItems:"center"}}>
            <Image style={{width:50,height:50,borderRaduis:25}}
            source={{uri:"http://176.116.113.158/ajia_code/"+info.item.pic}}></Image>
            <Text>{info.item.title}</Text>
        </TouchableOpacity>
    }
    render(){
       
        return   <FlatList
                data={this.state.List}
                renderItem={this.showTitle}
                >
                </FlatList>
          
         
    }
}

const styles = StyleSheet.create({
    twoList:{
        width:50, 
        alignItems:"center"
        
    }
})

