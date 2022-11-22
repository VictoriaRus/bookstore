import React, {useEffect} from 'react';
import Section from "../components/common-components/Section";
import Container from "../components/common-components/Container";
import Title from "../components/common-components/Title";
import {useNavigate} from "react-router";
import {useAppSelector} from "../redux/hooks/hooks";
import {dataAuthSelector, isAuthSelector} from "../redux/selectors/authSelector/authSelector";

const AccountPage = () => {
    const navigate = useNavigate();
    const isAuth = useAppSelector(isAuthSelector);
    const {username, email} = useAppSelector(dataAuthSelector);
/*
    useEffect(() => {
        if (!isAuth) {
            navigate('/sign-in', {replace: true});
        }
    }, [isAuth, navigate]);*/

    return (
        <>
            <Section>
                <Container>
                    <Title>Account page</Title>
                    <div>{username}</div>
                    <div>{email}</div>
                </Container>
            </Section>
        </>
    );
}

export default AccountPage;