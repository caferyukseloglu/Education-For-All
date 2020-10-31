//Main React import
import React, { useState } from 'react';
import { useTheme } from 'react-native-paper';
//Our Styles for Project
import { Form, Body, Line } from './styles/wrapper';
import { BigButton, RoundedButton } from './styles/buttons';
import { SubTitle, Title, CheckText } from './styles/text';
import { NewInput } from './styles/input';


const ForgotPasswordScreen = ({ navigation }) => {

    const { colors } = useTheme();

    const [isValid, setValidity] = useState(null);

    const checkValidity = (mailInput) => {

        if (mailInput.trim().length >= 4) {

            setValidity(true);

        }

        else if (mailInput.trim().length < 4) {

            setValidity(false);
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
                        ...(isValid != null ? {
                            ...(isValid == true) ? (
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