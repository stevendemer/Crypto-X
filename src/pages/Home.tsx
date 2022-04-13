import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';

interface IProps {

};

const sections = [
    {
        title: "First section",
        subtitle: "The sub of the first section",
        bg: "bg-red-500"
    },
    {
        title: "Second section",
        subtitle: "The sub of the second section",
        bg: "bg-cyan-600"
    },
    {
        title: "Third section",
        subtitle: "The sub of the third section",
        bg: "bg-green-600"
    },
    {
        title: "Fourth section",
        subtitle: "The sub of the fourth section",
        bg: "bg-purple-500"
    }
];

const Home = (props: IProps) => {
  return (
    <>
        <Hero />
        {sections.map((sec, idx) => (
            <Section key={idx} title={sec.title} subtitle={sec.subtitle} bg={sec.bg} />
        ))}
    </>
  );
}

export default Home;