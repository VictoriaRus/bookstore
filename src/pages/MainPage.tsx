import React from 'react';
import Section from "../containers/Section";
import Container from "../containers/Container";
import Title from "../components/Title";
import Subscribe from "../components/Subscribe/Subscribe";


const MainPage = () => {
    return (
        <>
            <Section>
                <Container>
                    <Title>New Releases Books</Title>

                </Container>
            </Section>
            <Section>
                <Container>
                    <Subscribe/>
                </Container>
            </Section>
        </>

    );
}

export default MainPage;