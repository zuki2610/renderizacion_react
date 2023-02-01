import React from 'react';
import '../index.css';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';



const Home = () => {
return (
    <>
    <Menu isLogin={false}/>
     <div className="home App bg-dark p-5">
    <div className="marvel">
    <Header titulo="Donde encontrarás los mejores juguetes y accesorios de Marvel Comics para ti"/>
    </div>
    <Footer /> 
    </div>
    </>
)

}
export default Home;