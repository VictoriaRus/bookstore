import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Section from "../components/common-components/Section";
import Container from "../components/common-components/Container";
import Title from "../components/common-components/Title";
import Input from "../components/common-components/Input";
import Button from "../components/common-components/Button";
import {authActionCreators} from "../redux/actions/authActionCreators/authActionCreators";
import {useAppDispatch, useAppSelector} from "../redux/hooks/hooks";
import {
    dataAuthSelector,
    errorAuthSelector,
    isAuthSelector,
    isLoadingAuthSelector
} from "../redux/selectors/authSelector/authSelector";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

const initialLoginForm = {email: '', password: ''};

const SignInPage = () => {
    const [loginForm, setLoginForm] = useState(initialLoginForm);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const errorMessage = useAppSelector(errorAuthSelector);
    const isLoading = useAppSelector(isLoadingAuthSelector);
    const data = useAppSelector(dataAuthSelector);
    const isAuth = useAppSelector(isAuthSelector);

    //console.log({data});

    useEffect(() => {
        isAuth && navigate('/account', {replace: true});
    }, [isAuth, navigate]);

    const onLoginFormChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }, []);

    const onLoginFormSubmit = useCallback(
        () => dispatch(authActionCreators.getLogin({
            email: loginForm.email,
            password: loginForm.password
        })), [dispatch, loginForm.email, loginForm.password]);

    const isButtonDisabled = useMemo(() => {
        const formValues = Object.values(loginForm);
        return !(formValues.filter(item => !!item).length === formValues.length)
    }, [loginForm]);

    return (
        <>
            <Section>
                <Container>
                    <Title>Sign In</Title>
                    {!isLoading ?
                        (<div>
                            {errorMessage && <p>{errorMessage}</p>}
                            <div>
                                <label>
                                    email
                                    <Input value={loginForm.email} placeholder="Your email" onChange={onLoginFormChange}
                                           fieldName="email"/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    password
                                    <Input value={loginForm.password} placeholder="Your password"
                                           onChange={onLoginFormChange} fieldName="password"/>
                                </label>
                            </div>
                            <Button disabled={isButtonDisabled} type="button" text="Sign In"
                                    onClick={onLoginFormSubmit}/>
                            <Link to="/sign-up">Registration now</Link>
                        </div>) : <div>Loading...</div>}
                </Container>
            </Section>
        </>
    );
}

export default SignInPage;