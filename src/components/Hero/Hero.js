import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello Techies! <br />
          I am Bandi Eswar Adithya
        </SectionTitle>
        <SectionText>
        Welcome to my portfolio! As a Computer Science engineering<br/>
        student with a passion for software engineering, I'm excited<br/> 
        to share with you some of the projects I have worked on and<br/>
        the skills I have developed. 
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;