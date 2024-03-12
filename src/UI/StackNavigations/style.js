/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { fontRef, heightRef, widthRef } from "../../Config/screenSizes";

export const styles = StyleSheet.create({

    main:{
        flex: 1,
        backgroundColor: '#2f4f4f',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Stack:{
        fontSize: 40 * fontRef,
        fontWeight: 'bold',
        color: 'yellow'
    },
    startButton:{
     padding: 14,
     width: 150 * widthRef,
     backgroundColor:'#FFF',
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: 12,
     marginTop: 30 * heightRef
    },
    let:{
        fontSize: 18,
        color: '#2f4f4f',
        fontWeight:'500'
    }

});