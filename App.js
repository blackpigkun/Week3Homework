import React, { useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { ButtonGroup, GameplayGroup, Header, ButtonHeader } from './index';
import { CHOICES } from './Const';
import { getRoundOutcome, randomComputerChoice, updateScore } from './utility';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerChoice: [],
            computerChoice: [],
            result: '',
            gamesPlayed: 0,
            win: 0,
            loose: 0,
            tie: 0,
            percentW:0,
            percentL: 0,
            percentT: 0,
        }
        
        //function calculatePercentW() {
        //    this.setState({
        //        percentW = this.state.win / this.state.gamesPlayed * 100,
        //        percentL = this.state.loose / this.state/gamesPlayed * 100,
        //        percentT = this.state.tie / this.state.gamesPlayed * 100,
        //    })
            
        //};
    }
    onPressButton = playerChoice => {
        const found = CHOICES.find(choice => choice.name === playerChoice);
        const computerChoice = randomComputerChoice();
        const result = getRoundOutcome(found.name, computerChoice.name);
        if (result === 'Victory!') {
            this.setState(
                {
                    win: this.state.win + 1,
                }
            )

        }
        else {

            if (result === 'Defeat!') {
                this.setState(
                    {
                        loose: this.state.loose + 1,
                    }
                )
            }
            else {
                this.setState(
                    {
                        tie: this.state.tie + 1,
                    }
                )
            }
        }
        this.setState(
            {
                playerChoice: found,
                computerChoice: computerChoice,
                result,
                gamesPlayed: this.state.gamesPlayed + 1,

            }
        );

        this.setState((prevState) => ({
            percentW: prevState.win / prevState.gamesPlayed*100,
            percentL: prevState.loose / prevState.gamesPlayed*100,
            percentT: prevState.tie / prevState.gamesPlayed*100,
        }));
    };
    
    onPressHeaderBtn = () => {

        Alert.alert('Your Score', 'Total Games Played:' + this.state.gamesPlayed +
            '\n Games Win:' + this.state.win +
            '\n Games Loose:' + this.state.loose+
            '\n Games Tie:' + this.state.tie+
            '\n Percent Win:' + this.state.percentW+'%'+
            '\n Percent Loose:' + this.state.percentL + '%' +
            '\n Percent Tie:' + this.state.percentT+'%' 
        );
    };
    
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.buttonHeaderWrapper}>
                    <ButtonHeader onPressHeaderBtn={this.onPressHeaderBtn}/>
                </View>
                <View style={styles.headerWrapper}>
                    <Header result={this.state.result} />

                </View>
                <View style={styles.gameplayWrapper}>
                    <GameplayGroup playerName="Player" choice={this.state.playerChoice} />
                    <GameplayGroup playerName="Computer" choice={this.state.computerChoice} />
                </View>
                <View style={styles.buttonWrapper}>
                    <ButtonGroup onPressButton={this.onPressButton} /*updateScore={this.updateScore}*//>
                </View>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e9ebee'
    },
    buttonHeaderWrapper: {
        flex: 0.05,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'flex-end',
        marginRight:30,
    },

   
    gameplayWrapper: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',

    },
    buttonWrapper: {
        flex: 0.4,
        alignItems: 'center',
    },
    buttonContainer:
    {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle:
    {
        width: 200,
        margin: 10,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#640D14',
    },
    buttonText:
    {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',

    },
    choicesContainer:
    {
        margin: 10,
        borderWidth: 2,
        paddingTop: 100,
        shadowRadius: 5,
        paddingBottom: 100,
        borderColor: 'grey',
        shadowOpacity: 0.90,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset: { height: 5, width: 5 },
    },
    choiceContainer:
    {
        flex: 1, alignItems: 'center',
    },
    choiceDescription:
    {
        fontSize: 25,
        color: '#250902',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    choiceCardTitle:
    {
        fontSize: 30,
        color: '#250902',
    },
    choiceImage:
    {
        width: 150, height: 150, padding: 10,
    }
})
