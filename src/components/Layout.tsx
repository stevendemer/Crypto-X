import Header from './Header';
import Footer from './Footer';
import React from 'react';

interface IProps {

    children?: React.ReactNode;
};

const Layout = (props: IProps) => {
  return (
    <>
      <Header />
        <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;