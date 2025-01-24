import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import { TrainerProvider } from './components/TrainerContext/TrainerContextProvider';
import { useActiveTrainer } from './components/TrainerContext/TrainerContextProvider';
import { Navigate } from 'react-router-dom';

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
