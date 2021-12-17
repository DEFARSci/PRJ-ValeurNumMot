import React,{useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useNavigate } from 'react-router-dom';


export default function ValeurMot() {
    let navigate = useNavigate();

    const [valeurInput, setValeurInput] = useState({
        motInput: "",
    });

    const [valeurTabsInput, setValeurTabsInput] = useState({
        UserInput: [],
    });

    const [valeurLettre, setValeurLettre] = useState({
        TabsLettres: []
    });

    let somme = 0;

    const valeurMotInputCheck = (value) => 
    {
        setValeurInput({
            motInput: value,
        });
    }

    
    const totalSommeMot = () =>
    {
        var sommeLettre = valeurLettre.TabsLettres
       for(let z=0; z<sommeLettre.length;z++)
        {
            somme += sommeLettre[z];
        }
        return somme;
    }

    const conversion = () =>
    {
        const monInput = valeurInput.motInput;
        const tabsInput = valeurTabsInput.UserInput;
        const ArrayLettres = valeurLettre.TabsLettres;
       
        if(monInput === "")
        {
            alert("Veuillez saisir un mot");
        }else
        {
            if((monInput >= 'A' && monInput <= 'Z') || (monInput >= 'a' && monInput <= 'z'))
            {
                // ********************parcourir la longueur du mot et stocker caractere dans un tableau********************
                ArrayLettres.length = 0;
                console.log(ArrayLettres)
                for(let i=0; i<monInput.length; i++)
                {
                    var caractere = monInput[i];

                    // ********************mettre le caractere en majuscule********************
                    var carMaj = caractere.toUpperCase();
                    tabsInput.push(carMaj);
                }

                // ********************Creer un tableau associatif contenant les lettres et ses valeurs*****************************
                const lettres = {"A":1,"B":2,"C":3,"D":4,"E":5,"F":6,"G":7,"H":8,"I":9,"J":10,"K":11,"L":12,"M":13,"N":14,"O":15,"P":16,"Q":17,"R":18,"S":19,"T":20,"U":21,"V":22,"W":23,"X":24,"Y":25,"Z":26};

                // ********************Parcourir chaque caractere, recuperer ses valeurs et ranger dans un tableau********************
                tabsInput.forEach(function(item, index){
                ArrayLettres.push(lettres[item]);
               
                });

                // ********************Calcul valeur du mot********************
                totalSommeMot();
                tabsInput.length = 0
                navigate("/");
                
            }else{
                alert(monInput+" n'est pas un mot valide!!!");
            }
        }
    }
      
    return (
        <View style={styles.container}>
        <KeyboardAvoidingView
            keyboardVerticalOffset={50}
            style={styles.containerView}
        >
            <Text style={styles.title}>Valeur d'un mot</Text>

            <View style={styles.containerInput}>
                <TextInput
                    onChangeText={valeurMotInputCheck}
                    style={styles.input}
                    placeholder="Votre mot..."
                    keyboardType="ascii-capable"
                />
                
            </View>
            <View style={styles.containerViewMot}>
                <TouchableOpacity onPress={conversion}>
                    <View style={styles.btnMot}>
                        <Text style={styles.textMot}>Conversion</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.TextMot}> Mot: {totalSommeMot()} </Text>
            </View>
        </KeyboardAvoidingView>

    </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
            flex:1,
            margin: 20
        },

        title: {
            fontSize: 22,
            marginBottom: 100,
            marginTop: 80,

        },

        containerView: {
            marginTop: 40,
            flex: 1,
            alignItems: 'center',
            padding: 10
        },
        containerInput: {
            flexDirection: 'row',
            paddingHorizontal: 12,
            borderRadius: 10,
            backgroundColor: 'white',
            alignItems: 'center',
            borderBottomColor: 1.5,
            borderBottomWidth: 1,
        },
        input:{
            marginLeft: 5,
            flex: 1,
            height: 50,
        },
        containerViewMot: {
            marginTop: 50,
            justifyContent: 'center',
            alignItems: 'center'
        },
        btnMot: {
            width: 300,
            height: 50,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#244DB7'
        },
        textMot: {
            color: '#fff',
            alignItems: 'center'
        },
        containerText: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        TextMot: {
            marginTop: 50,
            color: 'green',
            fontSize: 15,
            fontWeight: '500'
        }



    })
