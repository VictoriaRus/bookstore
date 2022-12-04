import React, { useCallback, useState } from "react";
import Section from "../../components/common-components/Section/Section";
import Title from "../../components/common-components/Title/Title";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { dataAuthSelector } from "../../redux/selectors/authSelector/authSelector";
import Button from "../../components/common-components/Button/Button";
import { authActionCreators } from "../../redux/actions/authActionCreators/authActionCreators";
import Input from "../../components/common-components/Input/Input";
import { Label } from "../../components/common-components/Lable/Lable";
import styled from "styled-components";
import Container from "../../components/common-components/Container/Container";
import { useNavigate } from "react-router";

const Account = styled.div`
  padding-bottom: 72px;
  position: relative;

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: #E7E7E7;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media ( max-width: 415px ) {
    padding-bottom: 56px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 0;
  }

  @media ( max-width: 768px ) {
    display: block;
  }
`;

const ItemRow = styled.div`
  max-width: 544px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 544px;
  margin-top: 48px;
  margin-left: auto;
  @media ( max-width: 768px ) {
    width: 100%;
  }
  @media ( max-width: 415px ) {
    display: block;
  }
`;

const ButtonWhite = styled(Button)`
  background-color: white;
  color: #313037;
  border: 1px solid #E7E7E7;

  &:active {
    background-color: rgba(73, 73, 74, 0.05);
  }

  &:hover {
    background-color: rgba(73, 73, 74, 0.05);
  }

  &:disabled {
    background-color: #A8A8A8;
  }

  @media ( max-width: 415px ) {
    margin-top: 24px;
  }
`;

const AccountPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { username, email } = useAppSelector(dataAuthSelector);

    const [accountForm, setAccountForm] = useState({
        name: username,
        email: email,
        password: "",
        newPassword: "",
    });

    const Redirect = useCallback(() => {
        navigate(`/main`);
    }, [navigate]);

    const onAccountFormChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setAccountForm(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }, []);

    const onLogout = useCallback(() => {
        dispatch(authActionCreators.logout());
    }, [dispatch]);

    return (
        <Section>
            <Container>
                <Title>Account</Title>
                <Account>
                    <Title fontSize="24" mobileFontSize="24" lineHeight="32" mobileLineHeight="32" marginBottom="20"
                           mobileMarginBottom="20">profile</Title>
                    <Row>
                        <ItemRow>
                            <Label htmlFor="name">Name</Label>
                            <Input value={ accountForm.name } onChange={ onAccountFormChange } fieldName="name" id="name"/>
                        </ItemRow>
                        <ItemRow>
                            <Label htmlFor="email">Email</Label>
                            <Input value={ accountForm.email } onChange={ onAccountFormChange } fieldName="email"
                                   id="email"/>
                        </ItemRow>
                    </Row>
                    <Title fontSize="24" mobileFontSize="24" lineHeight="32" mobileLineHeight="32" marginBottom="20"
                           mobileMarginBottom="20">password</Title>
                    <Row>
                        <div>
                            <ItemRow>
                                <Label htmlFor="password">Password</Label>
                                <Input value={accountForm.password} onChange={onAccountFormChange} fieldName="password"
                                       id="password"/>
                            </ItemRow>
                            <ItemRow>
                                <Label htmlFor="newPassword">New password</Label>
                                <Input value={ accountForm.newPassword } onChange={ onAccountFormChange }
                                       fieldName="newPassword" id="newPassword"/>
                            </ItemRow>
                        </div>
                        <ItemRow>
                            <Label htmlFor="confirmPassword">Confirm new password</Label>
                            <Input value={ accountForm.newPassword } onChange={ onAccountFormChange } fieldName="email"
                                   id="confirmPassword"/>
                        </ItemRow>
                    </Row>
                </Account>
                <ButtonBox>
                    <Button width="256" text="Logout" onClick={ onLogout }/>
                    <ButtonWhite width="256" text="Cancel" onClick={ Redirect }/>
                </ButtonBox>
            </Container>
        </Section>
    );
}

export default AccountPage;