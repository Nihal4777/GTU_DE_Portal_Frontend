import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
export default function About() {
  return (
    <>
       <Container className='p-4 text-center'>
        <img src="/gtu_about.jpg" alt="Image" />
        <p style={{'text-align':'justify'}} className='m-1 py-2'>
        Being one of the Innovative and largest University of India, GujaratTechnological University (GTU) - Ahmedabad, Gujarat, tries to cope up withall latest trends in Design & Innovation, Entrepreneurship and Technologicaladvancement.Gujarat Technological University is always striving for shaping a better future for its students by putting astonishing efforts to make its education system excellent enough so that students and ultimately whole society would benefit. In the light of above facts, GTU has established a Centre for Industrial Design (OPEN DESIGN SCHOOL) to lead and manage the design-oriented learning processes to promote Project Based Learning (PBL) in other words Experiential Learning in Gujarat state. This would be a pioneering step towards achieving “Make in India”, “Start- up India”, “Skill India” and “Digital India” initiatives of Honourable Prime Minister, Mr. Narendra Modi to put India in position of developed country.
        </p>
       </Container>
    </>
  )
}
