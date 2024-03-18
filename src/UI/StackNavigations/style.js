/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { fontRef, heightRef, widthRef } from "../../Config/screenSizes";
import { AppColors } from "../../Assets/AppColors";

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
    },
    backText:{
        fontSize: 14 * fontRef,
        color: '#483d8b',
        fontWeight:'500'
    },
    Back:{
        marginTop: 50 * heightRef,
        padding: 14,
        width: 80 * widthRef,
        backgroundColor: AppColors.secondaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginBottom: 30 * heightRef,
       },

});