import { createContext, useState, useContext } from 'react';

const ActiveTrainerContext = createContext(null);
const SetActiveTrainerContext = createContext(null);

export function TrainerProvider({ children }) {
  const [activeTrainer, setActiveTrainer] = useState(null);

  return (
    <ActiveTrainerContext.Provider value={activeTrainer}>
      <SetActiveTrainerContext.Provider value={setActiveTrainer}>
        {children}
      </SetActiveTrainerContext.Provider>
    </ActiveTrainerContext.Provider>
  );
}

export function useSetActiveTrainer() {
  return useContext(SetActiveTrainerContext);
}

export function useActiveTrainer() {
  return useContext(ActiveTrainerContext);
}
