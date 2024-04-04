'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/lib/store';
import StyledComponentsRegistry from '@/registry'

interface ProviderProps{
    children: ReactNode
}

// prosty provider w stworzony aby moc korzystać z redux oraz styled-components
export function Providers({ children }: ProviderProps) {
  return (
    <StyledComponentsRegistry>
      <Provider store={store}>
          {children}
        </Provider>
    </StyledComponentsRegistry>
  );
}