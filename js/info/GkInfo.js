import React,{ Component } from 'react';

import{
	View,
	StyleSheet
} from 'react-native';

export default class GkInfo extends Component{


	render(){
		return(
			<View style={styles.container}></View>

		);
	}

}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor : 'green'
	}
});