//Main React import
import React, { useState } from 'react';
import { useTheme } from 'react-native-paper';
//Our Styles for Project
import { Form, Body, Line } from './styles/wrapper';
import { BigButton, RoundedButton } from './styles/buttons';
import { SubTitle, Title, CheckText } from './styles/text';
import { NewInput } from './styles/input';
import { Value } from 'react-native-reanimated';



//PASSWORD CHECK 
/*
Büyük küçük, özel
if(password.length >= 8 && (password.search(/[0-9]/) > -1) && password.search(/[A-Z]/) > -1 && password.search(/[a-z]/) > -1 && password.search(/[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) > -1))
*/

const ForgotPasswordScreen = ({ navigation }) => {

    //using the theme colors
    const { colors } = useTheme();

    //hook function to set data, we check if given input is valid and storing e-mail
    const [data, setData] = useState({
        isValid:null,
        email: ""
    });

    //function check validity and set it
    const checkValidity = (mailInput) => {

        //trimming input
        var trimmedInput = mailInput.trim();
        //
        if (trimmedInput.length >=8 && trimmedInput.includes("@") && trimmedInput.split("@")[1].includes(".")) {
            setData({
                isValid:true,
                email: (trimmedInput.replace(/ /g,"")),
            })

        }

        else if (trimmedInput.length === 0 || trimmedInput === null) {

            setData({
                isValid:null,
            })

        }

        else{
            setData({
                isValid:false,
            })

        }

    }


    return (

        <Body>
            <Title>Reset Password</Title>
            <SubTitle>Enter your mail and we will send you a rescue mail immediately.</SubTitle>
            <Form>
                <NewInput
                    label="E-mail Adress"
                    color="blue"
                    topRadius="15"
                    botRadius="15"
                    botMargin="5px"
                    mode="flat"
                    onChangeText={(input) => checkValidity(input)}
                    onEndEditing={(e) => checkValidity(e.nativeEvent.text)}
                    value={data.email}
                    theme={{
                        colors: {
                            text: colors.darker,
                            primary: colors.blue,
                            placeholder: colors.gray,
                            background: colors.lighterGray
                        },
                    }}
                    left={
                        <NewInput.Icon name="email" color={colors.gray} size={33} />
                    }

                    right={{
                        ...(data.isValid != null ? {
                            ...(data.isValid == true) ? (
                                <NewInput.Icon name="check-circle" color={colors.green} />
                            ) : (
                                    <NewInput.Icon name="alert-circle" color={colors.red} />
                                )

                        } : ""),

                    }

                    }

                />

                <BigButton
                    margins={[250, 40, 0, 0]}
                    bgColor="blue"
                    text="Send Reset Mail"
                    onPress={""} //TODO: will be added later on 
                    textColor="white"
                    mode="contained"
                />

                <BigButton
                    margins={[0, 0, 0, 0]}
                    color="white"
                    onPress={() => navigation.navigate("Login")}
                    text="Login"
                    textColor="black"
                    mode="contained"

                />



            </Form>
        </Body>


    )




}

export default ForgotPasswordScreen;