import React,{useState ,useRef} from 'react';
import {StyleSheet,SafeAreaView,Text,View,Animated} from 'react-native';
import  Constants  from 'expo-constants';
import Actions from './Actions';
import DisplayResult from './DisplayResult';
import Header from './Header';

export default function RockPaper() {
    const [userChoice,setUserChoice] = useState(0);
    const [computerChoice, setComputerChoice] = useState(0);
    const [result,setResult] = useState("");
    const [canPlay,setPlay] = useState(true);

    // for Animation
    const fadeAnimation = useRef(new Animated.Value(1)).current;

    function play(choice) {
        //1 rock
        // 2 paper
        // 3 scissors
        const randomComputerChoice = Math.floor(Math.random() *3) +1;
        let resultString = "";

        if (choice === 1) {
            resultString = randomComputerChoice === 3 ? "Win" : "Lose";

        }
        else if (choice === 2 ) {
            resultString = randomComputerChoice === 1 ? "Win" : "Lose";

        }
        else {
            resultString = randomComputerChoice === 2 ? "Win" : "Lose";

        }
        if (choice === randomComputerChoice) {
        resultString = "DRAW"
        }
        
    
    setUserChoice(choice);
    setComputerChoice(randomComputerChoice);

    setTimeout(() => {
        setResult(resultString);

    }, 300);

    Animated.sequence([
        Animated.timing(fadeAnimation,{
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            
        }),
        Animated.timing(fadeAnimation,{
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        
        }),
    ]).start();
    
    //Disable action when animation running
    setPlay(false);
    setTimeout(() => {
        setPlay(true);
    }, 600);
  };

    return(
        <SafeAreaView style={styles.container}>
        <Header/>
        <View style={styles.content}>
            <View style={styles.result}>
                <Animated.Text
                 style={[styles.resultText, {opacity: fadeAnimation}]} >
                 {result}
                </Animated.Text>
                

            </View>
            <View style={styles.screen}>
                {!result ? (
                    <Text style={styles.readyText}>Let's Play </Text>
                ) : (
                    <DisplayResult>
                        userChoice={userChoice}
                        computerChoice={computerChoice}
                    </DisplayResult>
                )}

            </View>
            <Actions play={play} canPlay={canPlay}/>
        </View>
        </SafeAreaView>
    )
};

 const styles = StyleSheet.create({
    container: {
    flex:1,
    paddingTop: Constants.statusBarHeight,
  
},
    content: {
        flex:1,
        marginBottom: 5,
        backgroundColor: '#ffcc00'
},
    result : {
        height:100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        
  },
    resultText: {
        fontSize: 48,
        fontWeight: 'bold',

    },
    screen: {
        flex:1,
        flexDirection:'row',

    },
    readyText: {
        marginTop:-48,
        alignSelf:'center',
        textAlign:'center',
        width:'100%',
        fontSize:48,
        fontWeight:'bold',


    },

});