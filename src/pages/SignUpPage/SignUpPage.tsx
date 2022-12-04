import React, { useCallback, useEffect, useState } from "react";
import Container from "../../components/common-components/Container/Container";
import Input from "../../components/common-components/Input/Input";
import Button from "../../components/common-components/Button/Button";
import { registration } from "../../services/authServices/authServices";
import {
    Error,
    Form,
    FormLinkActive,
    HeadForm,
    Item,
    MyLink,
    WrapForm,
    Wrapper
} from "../SignInPage/SignInPage";
import { Label } from "../../components/common-components/Lable/Lable";
import {MOBILE_WIDTH, REGULAR, TABLET_WIDTH} from "../../mock-data/constants";
import styled from "styled-components";

const Section = styled.div`
  padding: 72px 0;
  min-height: calc(100vh - 204px);
  @media ( max-width: ${ TABLET_WIDTH } ) {
    padding: 48px 0;
  }
  @media ( max-width: ${ MOBILE_WIDTH } ) {
    padding: 36px 0;
  }
`;

const initialRegistrationForm = { username: "", email: "", password: "", confirmPassword: "" };

const SignUpPage = () => {
    const [registrationForm, setRegistrationForm] = useState(initialRegistrationForm);
    const [isRegistered, setIsRegistered] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);

    const [nameError, setNameError] = useState("Name can`t be empty");
    const [emailError, setEmailError] = useState("Email can`t be empty");
    const [passwordError, setPasswordError] = useState("Password can`t be empty");
    const [confirmError, setConfirmError] = useState("Confirm password can`t be empty");
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (nameError || emailError || passwordError || confirmError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError, nameError, confirmError]);

    const onRegistrationFormChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setRegistrationForm(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

        if (e.target.name === "username") {
            if (e.target.value.length < 8) {
                setNameError("Name can`t be less than 8");
                if (!e.target.value) {
                    setNameError("Name can`t be empty");
                }
            } else {
                setNameError("");
            }
        }

        if (e.target.name === "email") {
            if (!REGULAR.test(String(e.target.value).toLowerCase())) {
                setEmailError("Incorrect email");
            } else {
                setEmailError("");
            }
        }

        if (e.target.name === "password") {
            if (e.target.value.length < 8) {
                setPasswordError("Password can`t be less than 8");
                if (!e.target.value) {
                    setPasswordError("Password can`t be empty");
                }
            } else {
                setPasswordError("");
            }
        }

        if (e.target.name === "confirmPassword") {
            if (e.target.value !== registrationForm.password) {
                setConfirmError("Passwords don't match");
            } else {
                setConfirmError("");
            }
        }
    }, [registrationForm.password]);

    const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case "username":
                setNameDirty(true);
                break;
            case "email":
                setEmailDirty(true);
                break;
            case "password":
                setPasswordDirty(true);
                break;
            case "confirmPassword":
                setConfirmPasswordDirty(true);
                break;
        }
    }

    const onRegistrationFormSubmit = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            try {
                setIsLoading(true);
                const response = await registration({
                    username: registrationForm.username,
                    email: registrationForm.email,
                    password: registrationForm.password,
                });

                if (response.data) {
                    setIsRegistered(true);
                    setRegistrationForm(initialRegistrationForm);
                }
            } catch (e: any) {
                const [value] = Object.values(e?.response?.data).flat();
                setErrorMessage(value as string);
            } finally {
                setIsLoading(false);
            }
        }, [registrationForm]);

    return (
        <>
            <Section>
                <Container>
                    {
                        isRegistered ? <div>Please check email to verify your account!</div> : (
                            <>
                                {!isLoading ?
                                    (<Wrapper>
                                        <HeadForm>
                                            <WrapForm>
                                                <MyLink to='/sign-in'>SIGN IN</MyLink>
                                                <FormLinkActive>SIGN UP</FormLinkActive>
                                            </WrapForm>
                                        </HeadForm>
                                        <Form>
                                            { errorMessage && <Error>{ errorMessage }</Error> }
                                            <Item>
                                                { (nameDirty && nameError) && <Error>{ nameError }</Error> }
                                                <Label htmlFor='name'>Name</Label>
                                                <Input width='480' value={registrationForm.username} placeholder='Your name'
                                                       onChange={ onRegistrationFormChange } onBlur={ e => blurHandler(e) }
                                                       fieldName='username' id='name'/>
                                            </Item>
                                            <Item>
                                                { (emailDirty && emailError) && <Error>{ emailError }</Error> }
                                                <Label htmlFor='email'>Email</Label>
                                                <Input width='480' value={ registrationForm.email } placeholder='Your email'
                                                       onChange={ onRegistrationFormChange } onBlur={ e => blurHandler(e) }
                                                       fieldName='email' id='email'/>
                                            </Item>
                                            <Item>
                                                { (passwordDirty && passwordError) && <Error>{ passwordError }</Error> }
                                                <Label htmlFor='password'>Password</Label>
                                                <Input width='480' value={ registrationForm.password } placeholder='Your password'
                                                       onChange={ onRegistrationFormChange } onBlur={ e => blurHandler(e) } fieldName='password' id='password'/>
                                            </Item>
                                            <Item>
                                                { (confirmPasswordDirty && confirmError) && <Error>{ confirmError }</Error> }
                                                <Label htmlFor='confirm'>Confirm password</Label>
                                                <Input value={ registrationForm.confirmPassword } onChange={ onRegistrationFormChange }
                                                       width='480' fieldName='confirmPassword' onBlur={ e => blurHandler(e) } placeholder='Confirm your password' id='confirm'/>
                                            </Item>
                                            <Button width='480' disabled={ !formValid } type='button' text='Sign Up'
                                                    onClick={ onRegistrationFormSubmit }/>
                                        </Form>
                                    </Wrapper>) : <div>Loading...</div>}
                            </>
                        )
                    }
                </Container>
            </Section>
        </>
    );
}

export default SignUpPage;