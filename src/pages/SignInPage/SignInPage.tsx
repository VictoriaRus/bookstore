import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import SecondaryTitle from "../../components/common-components/SecondaryTitle/SecondaryTitle";
import Container from "../../components/common-components/Container/Container";
import Input from "../../components/common-components/Input/Input";
import Button from "../../components/common-components/Button/Button";
import { authActionCreators } from "../../redux/actions/authActionCreators/authActionCreators";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
    errorAuthSelector,
    isAuthSelector,
    isLoadingAuthSelector
} from "../../redux/selectors/authSelector/authSelector";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Label } from "../../components/common-components/Lable/Lable";
import {MOBILE_WIDTH, REGULAR, TABLET_WIDTH} from "../../mock-data/constants";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 544px;
  border: 1px solid #E7E7E7;
  @media ( max-width: ${ MOBILE_WIDTH } ) {
    width: 100%;
    border: none;
  }
`;

const Section = styled.div`
  padding: 72px 0;
  min-height: calc(100vh - 204px);
  @media ( max-width: ${ TABLET_WIDTH } ) {
    padding: 48px 0;
  }
  @media ( max-width: ${ MOBILE_WIDTH } ) {
    padding: 36px 0;
    min-height: auto;
  }
`;

export const Form = styled.div`
  padding: 26px 32px 40px;
  @media ( max-width:  ${ MOBILE_WIDTH } ) {
    padding: 26px 0 20px;
  }
`;

export const Item = styled.div`
  margin-bottom: 16px;
`;

export const HeadForm = styled.div`
  border-bottom: 1px solid #E7E7E7;
`;

export const WrapForm = styled.div`
  padding: 26px 32px 0;
  display: flex;
  align-items: center;
  text-align: center;
  @media ( max-width:  ${ MOBILE_WIDTH } ) {
    padding: 0;
  }
`;

export const FormLink = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #A8A8A8;
  width: 50%;
  margin-bottom: 20px;
`;

export const FormLinkActive = styled(FormLink)`
  color: #313037;
  position: relative;

  &::after {
    content: '';
    height: 1px;
    width: 100%;
    background-color: #313037;;
    display: block;
    position: absolute;
    bottom: -21px;
    left: 0;
  }
`;

export const MyLink = styled(Link)`
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #A8A8A8;
  width: 50%;
  margin-bottom: 20px;
`;

export const Error = styled.div`
  padding: 20px;
  background-color: #F4EEFD;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #313037;
`;

const initialLoginForm = {email: "", password: ""};

const SignInPage = () => {
    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState("Email can`t be empty");
    const [passwordError, setPasswordError] = useState("Password can`t be empty");
    const [formValid, setFormValid] = useState(false);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const errorMessage = useAppSelector(errorAuthSelector);
    const isLoading = useAppSelector(isLoadingAuthSelector);
    const isAuth = useAppSelector(isAuthSelector);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);

    useEffect(() => {
        isAuth && navigate("/account", {replace: true});
    }, [isAuth, navigate]);

    const onLoginFormChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm(prevState => ({...prevState, [e.target.name]: e.target.value}));

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

    }, []);

    const onLoginFormSubmit = useCallback(
        () => dispatch(authActionCreators.getLogin({
            email: loginForm.email,
            password: loginForm.password
        })), [dispatch, loginForm.email, loginForm.password]);

    const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case "email":
                setEmailDirty(true);
                break;
            case "password":
                setPasswordDirty(true);
                break;
        }
    }

    return (
        <Section>
            <Container>
                { !isLoading ?
                    (<Wrapper>
                        <HeadForm>
                            <WrapForm>
                                <FormLinkActive>SIGN IN</FormLinkActive>
                                <MyLink to="/sign-up">SIGN UP</MyLink>
                            </WrapForm>
                        </HeadForm>
                        <Form>
                            { errorMessage && <Error>{ errorMessage }</Error> }
                            <Item>
                                { (emailDirty && emailError) && <Error>{ emailError }</Error> }
                                <Label htmlFor='email'>Email</Label>
                                <Input width='480' value={ loginForm.email }
                                       placeholder='Your email' onBlur={ e => blurHandler(e) }
                                       onChange={ onLoginFormChange }
                                       fieldName='email' id='email'/>
                            </Item>
                            <Item>
                                { (passwordDirty && passwordError) && <Error>{ passwordError }</Error> }
                                <Label htmlFor='password'>Password</Label>
                                <Input width='480' value={ loginForm.password } placeholder='Your password'
                                       onBlur={ e => blurHandler(e) }
                                       onChange={ onLoginFormChange } fieldName='password' id='password'/>
                            </Item>
                            <SecondaryTitle>Forgot password ?</SecondaryTitle>
                            <Button width='480' disabled={ !formValid } type="button" text="Sign In"
                                    onClick={ onLoginFormSubmit } mobileWidth='478'/>
                        </Form>
                    </Wrapper>) : <div>Loading...</div>}
            </Container>
        </Section>
    );
}

export default SignInPage;