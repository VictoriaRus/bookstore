import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { accountActivation } from "../../services/authServices/authServices";
import { Link } from "react-router-dom";
import Button from "../../components/common-components/Button/Button";
import Section from "../../components/common-components/Section/Section";
import Container from "../../components/common-components/Container/Container";
import styled from "styled-components";
import Title from "../../components/common-components/Title/Title";

const Wrap = styled.div`
  margin: 0 auto;
  max-width: 544px;
  border: 1px solid #E7E7E7;
  padding: 32px;
  @media ( max-width: 415px ) {
    width: 100%;
    border: none;
    padding: 0;
  }
`;

const ActivationPage = () => {
    const {uid, token} = useParams();
    const [isActivated, setIsActivated] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (uid && token) {
            const activateAccount = async () => {
                try {
                    setIsLoading(true);
                    const response = await accountActivation({uid, token});

                    if (response) {
                        setIsActivated(true);
                    }
                } catch (e: any) {
                    setErrorMessage(e?.response?.data?.detail as string);
                } finally {
                    setIsLoading(false);
                }
            };
            activateAccount();
        }

    }, [uid, token]);

    return (
        <div>
            {
                isActivated ? (
                    <Section>
                        <Container>
                            <Wrap>
                                <Title fontSize="24" mobileFontSize="24" marginBottom="40" mobileLineHeight="24" mobileMarginBottom="24">
                                    Your account is successfully activated!
                                </Title>
                                <Link to="/sign-in">
                                    <Button text="Go to the login page"/>
                                </Link>
                            </Wrap>
                        </Container>
                    </Section>
                ) : (
                    <>
                        {
                            !isLoading ? (
                                <>
                                    <div>Activation Page</div>
                                    { errorMessage && <p>{ errorMessage }</p> }
                                </>
                            ) : <div>Loading...</div>
                        }
                    </>
                )
            }
        </div>
    );
};

export default ActivationPage;