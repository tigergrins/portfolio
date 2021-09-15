import React from 'react';
import {Header} from './components/Header/Header';
import {Hello} from './components/Hello/Hello';
import {Skills} from './components/Skills/Skills';
import {Projects} from './components/Projects/Projects';
import {Contacts} from './components/Contacts/Contacts';
import {Footer} from './components/Footer/Footer';

function App() {
    return (
        <>
            <Header/>
            <Hello/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </>

    );
}

export default App;
