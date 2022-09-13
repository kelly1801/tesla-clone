import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { sectionInfo } from "../carInfo";

function Home() {

  const sectionComponent = sectionInfo.map(section => <Section 
    title={section.title}
    description={section.description}
    image={section.image}
    leftButton={section.leftButton}
    rightButton={section.rightButton}
    />)
  
  return (
    <Container>

{sectionComponent}
  
    </Container>
  );
}

export default Home;

const Container = styled.div`
  heigth: 100vh;
`;
