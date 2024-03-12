/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { widthRef, heightRef, fontRef } from "../../../Config/screenSizes";

export const styles = StyleSheet.create({

    main:{
        flex: 1,
        backgroundColor: '#800000',
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
    Back:{
        padding: 14,
        width: 80 * widthRef,
        backgroundColor:'#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginBottom: 30 * heightRef
       },
       let:{
           fontSize: 18,
           color: '#483d8b',
           fontWeight:'500'
       },
       backText:{
           fontSize: 14 * fontRef,
           color: '#483d8b',
           fontWeight:'500'
       }

});