import React,{Component} from 'react'
import {View,
    Image,
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
    TextInput,
ActivityIndicator} from 'react-native';

export default class homeComponent 
extends Component{
	construtor(){
		super();
		this.state={
			isCommon:0
		}
	}
	componentWillMount(){
		Fecth("")
		.then((response)=>{
			return response.join();
		})
		.then((response)=>{

		})
	}
	toCCommon(){
		this.setState({
			isCommon:1
		})
	}
	showItem(){
		return <View>
		<Iamge source={{}}></Iamge>
				<Text>标题</Text>
				<Text>文章</Text>

				<Button
				onPress={this.toCCommon}
				></Button>	
				{
				this.state.isCommon=1 && <TextInput></TextInput>
				}	
			</View>
	}
	render(){
			return <FlatList
			renderItem={this.showItem}
			data={this.state}
			></FlatList>
	}
}

const styles = StyleSheet.create({
    twoList:{
        width:50, 
        alignItems:"center"
        
    }
})



import React,{Component} from 'react'
import {View,
    Image,
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
    TextInput,
ActivityIndicator} from 'react-native';

export default class homeComponent 
extends Component{
	construtor(){
		super();
		this.state={
			isCommon:0
		}
	}
	componentWillMount(){
		Fecth("")
		.then((response)=>{
			return response.join();
		})
		.then((response)=>{

		})
	}
	toCCommon(){
		this.setState({
			isCommon:1
		})
	}
	showItem(){
		return <View>

				<Text>标题</Text>
				<Text>文章</Text>

				<Button
				onPress={this.toCCommon}
				></Button>	
				{
				this.state.isCommon=1 && <TextInput></TextInput>
				}	
			</View>
			<View>
				<Button title="转发"
				onPress={this.toCCommon}
				></Button>	
				<Button title="评论"
				onPress={this.toCCommon}
				></Button>	
				<Button title="点赞"
				onPress={this.toCCommon}
				></Button>	
			</View>
				<FlastList></FlastList>
			</View>

	}
	render(){
			return <FlatList
			renderItem={this.showItem}
			data={this.state}
			></FlatList>
	}
}

const styles = StyleSheet.create({
    twoList:{
        width:50, 
        alignItems:"center"
        
    }
})