import type { GetEnvironmentProps } from '@algolia/autocomplete-core';
import React from 'react';

export function useTouchEvents({
  getEnvironmentProps,
  panelElement,
  formElement,
  inputElement,
}: {
  getEnvironmentProps: GetEnvironmentProps;
  panelElement: HTMLElement | null;
  formElement: HTMLElement | null;
  inputElement: HTMLInputElement | null;
}) {
  React.useEffect(() => {
    if (!(panelElement && formElement && inputElement)) {
      return undefined;
    }

    const { onTouchStart, onTouchMove } = getEnvironmentProps({
      panelElement,
      formElement,
      inputElement,
    });

    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [getEnvironmentProps, panelElement, formElement, inputElement]);
}
