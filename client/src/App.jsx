import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import axios from 'axios';
import { TrainerProvider } from './components/TrainerContext/TrainerContextProvider';

export default function App() {
  return (
    <TrainerProvider>
      <div className={styles.wrapper}>
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </TrainerProvider>
  );
}
