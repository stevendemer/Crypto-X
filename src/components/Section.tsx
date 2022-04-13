import React from 'react'
import classnames from 'classnames';

interface IProps {
    title: string;
    subtitle: string;
    bg?: string;
};

const Section = (props: IProps) => {

    const classStr = classnames(
        "relative font-pop top-0 right-0 left-0 text-black w-full h-[400px] border-slate-800 border-8",
        props.bg
    );

  return (
    <>
        <div className={classStr}>
            <h2 className="text-4xl py-10 flex items-baseline justify-center ">{props.title}</h2>
            <h4 className="text-2xl py-10 flex justify-center">{props.subtitle}</h4>
        </div>
    </>
  );
}

export default Section;