import React,{Component} from 'react'
import {View,
    Image,
    Button,
    StyleSheet,
    Text,
    FlatList,
    TextInput,
    ScrollView,
ActivityIndicator} from 'react-native';
export default class GameComponent 
extends Component{
    constructor(){
        super()
        this.state={
            numArr:[1,2]
        }
    }
    componentWillMount(){
       
        
     function num(){
          var randoms = []
          while(true){
            var isExisrs = false;
            var random = parseInt(Math.random()*9+1)
            for (var i = 0;i<randoms.length;i++){
                if(random==randoms[i]){
                     isExisrs = true;
                     break;
                }
            }
            if(!isExisrs){
                randoms.push(random);
            }
            if(randoms.length==9){
               return randoms
               
            }
        }
     }
     var nowNumArr =[]
       for(var i =0;i<9;i++){
          nowNumArr+=","+num()
       }
    nowNumArr = nowNumArr.split(",")
    nowNumArr.splice(0,1)
    console.log(nowNumArr)   
var arr1 =[nowNumArr[0],nowNumArr[9],nowNumArr[18],nowNumArr[27],nowNumArr[36],nowNumArr[45],nowNumArr[54],nowNumArr[63],nowNumArr[72]]
var arr2 =[nowNumArr[1],nowNumArr[10],nowNumArr[19],nowNumArr[28],nowNumArr[37],nowNumArr[46],nowNumArr[55],nowNumArr[64],nowNumArr[73]]
var arr3 =[nowNumArr[2],nowNumArr[11],nowNumArr[20],nowNumArr[29],nowNumArr[38],nowNumArr[47],nowNumArr[56],nowNumArr[65],nowNumArr[74]]
var arr4 =[nowNumArr[3],nowNumArr[12],nowNumArr[21],nowNumArr[30],nowNumArr[39],nowNumArr[48],nowNumArr[57],nowNumArr[66],nowNumArr[75]]
var arr5 =[nowNumArr[4],nowNumArr[13],nowNumArr[22],nowNumArr[31],nowNumArr[40],nowNumArr[49],nowNumArr[58],nowNumArr[67],nowNumArr[76]]
var arr6 =[nowNumArr[5],nowNumArr[14],nowNumArr[23],nowNumArr[32],nowNumArr[41],nowNumArr[50],nowNumArr[59],nowNumArr[68],nowNumArr[77]]
var arr7 =[nowNumArr[6],nowNumArr[15],nowNumArr[24],nowNumArr[33],nowNumArr[42],nowNumArr[51],nowNumArr[60],nowNumArr[69],nowNumArr[78]]
var arr8 =[nowNumArr[7],nowNumArr[16],nowNumArr[25],nowNumArr[34],nowNumArr[43],nowNumArr[52],nowNumArr[61],nowNumArr[70],nowNumArr[79]]
var arr9 =[nowNumArr[8],nowNumArr[17],nowNumArr[26],nowNumArr[35],nowNumArr[44],nowNumArr[53],nowNumArr[62],nowNumArr[71],nowNumArr[80]]


function del (arr){
  var newarr =[]; //处理数组中重复数据
  var arr1 = [];
  for(var i=0;i<9;i++){
  if(newarr[arr[i]]==undefined){
    newarr[arr[i]]=1;
    arr1.push(arr[i]) //得到不重复的数据
  }else{
   newarr[arr[i]]=-1;
   arr1.push(0)
  }
}
  return arr1;
}


var nowNumArr = [];
nowNumArr += ","+del(arr1)
nowNumArr += ","+del(arr2)
nowNumArr += ","+del(arr3)
nowNumArr += ","+del(arr4)
nowNumArr += ","+del(arr5)
nowNumArr += ","+del(arr6)
nowNumArr += ","+del(arr7)
nowNumArr += ","+del(arr8)
nowNumArr += ","+del(arr9)
  nowNumArr = nowNumArr.split(",")
    nowNumArr.splice(0,1)
 console.log(nowNumArr)
//     var arr1 =[nowNumArr[0],nowNumArr[9],nowNumArr[18],nowNumArr[27],nowNumArr[36],nowNumArr[45],nowNumArr[54],nowNumArr[63],nowNumArr[72]]
//     var arr2 =[nowNumArr[1],nowNumArr[10],nowNumArr[19],nowNumArr[28],nowNumArr[37],nowNumArr[46],nowNumArr[55],nowNumArr[64],nowNumArr[73]]
//     var arr3 =[nowNumArr[2],nowNumArr[11],nowNumArr[20],nowNumArr[29],nowNumArr[38],nowNumArr[47],nowNumArr[56],nowNumArr[65],nowNumArr[74]]
//     var arr4 =[nowNumArr[3],nowNumArr[12],nowNumArr[21],nowNumArr[30],nowNumArr[39],nowNumArr[48],nowNumArr[57],nowNumArr[66],nowNumArr[75]]
//     var arr5 =[nowNumArr[4],nowNumArr[13],nowNumArr[22],nowNumArr[31],nowNumArr[40],nowNumArr[49],nowNumArr[58],nowNumArr[67],nowNumArr[76]]
//     var arr6 =[nowNumArr[5],nowNumArr[14],nowNumArr[23],nowNumArr[32],nowNumArr[41],nowNumArr[50],nowNumArr[59],nowNumArr[68],nowNumArr[77]]
//     var arr7 =[nowNumArr[6],nowNumArr[15],nowNumArr[24],nowNumArr[33],nowNumArr[42],nowNumArr[51],nowNumArr[60],nowNumArr[69],nowNumArr[78]]
//     var arr8 =[nowNumArr[7],nowNumArr[16],nowNumArr[25],nowNumArr[34],nowNumArr[43],nowNumArr[52],nowNumArr[61],nowNumArr[70],nowNumArr[79]]
//     var arr9 =[nowNumArr[8],nowNumArr[17],nowNumArr[26],nowNumArr[35],nowNumArr[44],nowNumArr[53],nowNumArr[62],nowNumArr[71],nowNumArr[80]]
//     var nowNumArr = [];
//     nowNumArr.push(arr1)
//     nowNumArr.push(arr2)
//     nowNumArr.push(arr3)
//     nowNumArr.push(arr4)
//     nowNumArr.push(arr5)
//     nowNumArr.push(arr6)
//     nowNumArr.push(arr7)
//     nowNumArr.push(arr8)
//     nowNumArr.push(arr9)
//     var nowNumArr = [];
// nowNumArr.push(del(arr1))
// nowNumArr.push(del(arr2))
// nowNumArr.push(del(arr3))
// nowNumArr.push(del(arr4))
// nowNumArr.push(del(arr5))
// nowNumArr.push(del(arr6))
// nowNumArr.push(del(arr7))
// nowNumArr.push(del(arr8))
// nowNumArr.push(del(arr9))
    this.setState({numArr:nowNumArr}) 
}
    showArr=(info)=>{
            return <View >
                 <Text style={{borderColor:"#333",borderWidth:2}}
                 >{info.item}</Text>
            </View>
          
    }
    render(){
        return <ScrollView>
            <FlatList  style={{width:100,flexDirection:"row"}}
            renderItem={this.showArr}
            data={this.state.numArr}
            >
            </FlatList>
        </ScrollView> 
    }
}