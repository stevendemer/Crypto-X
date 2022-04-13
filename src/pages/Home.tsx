import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';

interface IProps {

};

const sections = [
    {
        title: "First section",
        subtitle: "The sub of the first section"
    },
    {
        title: "Second section",
        subtitle: "The sub of the second section"
    }
];

const Home = (props: IProps) => {
  return (
    <>
        <Hero />
        {sections.map((sec, idx) => (
            <Section key={idx} title={sec.title} subtitle={sec.subtitle} />
        ))}
    </>
  );
}

export default Home;