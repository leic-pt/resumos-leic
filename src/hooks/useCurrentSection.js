import React, { useContext } from 'react';

const currentSectionContext = React.createContext();

export const CurrentSectionProvider = currentSectionContext.Provider;

export const useCurrentSection = () => useContext(currentSectionContext);
