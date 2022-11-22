import React, {useCallback, useMemo, useState} from 'react';
import Section from "../components/common-components/Section";
import Container from "../components/common-components/Container";
import Title from "../components/common-components/Title";
import Input from "../components/common-components/Input";
import Button from "../components/common-components/Button";
import {registration} from "../services/authServices/authServices";

const initialRegistrationForm = {username: '', email: '', password: ''};

const SignUpPage = () => {
    const [registrationForm, setRegistrationForm] = useState(initialRegistrationForm);
    const [isRegistered, setIsRegistered] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onRegistrationFormChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setRegistrationForm(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }, []);

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
        },
        [registrationForm]);

    const isButtonDisabled = useMemo(() => {
        const formValues = Object.values(registrationForm);
        return !(formValues.filter(item => !!item).length === formValues.length)
    }, [registrationForm]);

    return (
        <>
            <Section>
                <Container>
                    <Title>Sign Up</Title>
                    <>{
                        isRegistered ? <div>Please check email to verify your account!</div> : (
                            <>
                                Form to Registration
                            </>
                        )
                    }
                    </>
                    {!isLoading ?
                        (<div>
                            {errorMessage && <p>{errorMessage}</p>}
                            <div>
                                <label>
                                    name
                                    <Input value={registrationForm.username} placeholder="Your name"
                                           onChange={onRegistrationFormChange}
                                           fieldName="username"/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    email
                                    <Input value={registrationForm.email} placeholder="Your email"
                                           onChange={onRegistrationFormChange}
                                           fieldName="email"/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    password
                                    <Input value={registrationForm.password} placeholder="Your password"
                                           onChange={onRegistrationFormChange} fieldName="password"/>
                                </label>
                            </div>
                            <Button disabled={isButtonDisabled} type="button" text="Sign Up"
                                    onClick={onRegistrationFormSubmit}/>
                        </div>) : <div>Loading...</div>}
                </Container>
            </Section>
        </>
    );
}

export default SignUpPage;