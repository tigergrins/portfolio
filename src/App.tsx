import React from 'react';
import styles from './App.module.css';
import {Header} from './components/Header/Header';
import { Hello } from './components/Hello/Hello';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { RemoteWork } from './components/RemoteWork/RemoteWork';
import { Contacts } from './components/Contacts/Contacts';
import {Footer} from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Hello />
      <Skills />
      <Projects />
      <RemoteWork />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
