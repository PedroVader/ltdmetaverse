import React from 'react';

import { Destacado, Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
         Somos tú <u>equipo</u> <br />
         Escalamos tú negocio <br />
         al <u>siguiente nivel</u>
        </SectionTitle>
        <SectionText>
        Nos centramos en la optimización de los motores de búsqueda y el desarrollo web para proporcionar a nuestros clientes las <Destacado> soluciones más viables. </Destacado>
        </SectionText>
        <Button onClick={props.handleClick}>¡Quiero saber más!</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
