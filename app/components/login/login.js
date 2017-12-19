import React,{Component} from 'react'
import {View,
    Image,
    Button,
    StyleSheet,
    Text,
    TextInput,
ActivityIndicator} from 'react-native';
// import login from '../../assets/css/login'
export default class LoginComponent 
extends Component{
    constructor(){
        super();
        this.state={
            userName:"",
            upwd:'',
            count:3,
        }
    }
    handleUsername=(userInput)=>{
        this.setState({userName:userInput})
        console.log(this.state.userName)
    }
    handlePasserword=(pwdInput)=>{
            this.setState({upwd:pwdInput})
    }
    // ,{
    //         method:'post',
    //         header:{
    //             'Accept':'application/json',
    //             'Content-Type':'application/json'
    //         },body:JSON.stringify({
    //             firstParam:"value"
    //         })
    //     }
    isLogin=()=>{
        fetch('http://176.116.113.158/ajia_code/data/user/login.php?uname='+this.state.userName+'&upwd='+this.state.upwd)
            .then((response)=>{ return response.json()})
            .then(
                (response)=>{
              if(response.code==401){
                    alert("请输入用户名")
              }
              else if(response.code==500){
                    alert("网络出错")
              }else if(response.code==201){
                    alert("用户名或密码错误，请重试")
              }else if(response.code==200){
                    this.setState({count:0})
                        var timer = setInterval(()=>{
                            var nowCount = this.state.count;
                                nowCount++;
                                this.setState({count:nowCount})
                                if(nowCount>3){
                             this.props.navigation.navigate('main')
                                clearInterval(timer)
                               }
                            },1000)
              }
            })
           
           
    }
    render(){
        return<View>
            <View style={{alignItems:"center"}}>
            <Image
            style={styles.Image}
            source={ require("../../imgs/1.jpg")}>
            </Image>
            </View>
            <TextInput
            onChangeText = {this.handleUsername}
            placeholder = "请输入账号"
            ></TextInput>
            <TextInput
            secureTextEntry = {true}
            onChangeText = {this.handlePasserword}
            placeholder = "请输入密码"
            ></TextInput>
            <Button onPress={this.isLogin}
            title={"登录"}
            ></Button>
                { this.state.count < 3
                        && <View style={{alignItems:"center"}}>
                            <ActivityIndicator>
                            </ActivityIndicator>
                            <Text style={{color:"#ff0000"}}>
                                    正在登陆
                            </Text>
                        </View>
                    }
        </View>
    }
}

const styles = StyleSheet.create({
    Image:{
        width:100,
        height:100,
        borderRadius:50
    }
})