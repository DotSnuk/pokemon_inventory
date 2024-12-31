import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import axios from 'axios';

export default function App() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}
