import type { GetEnvironmentProps } from '@algolia/autocomplete-core';
import React from 'react';

export function useTouchEvents({
  getEnvironmentProps,
  panelElementRef,
  formElementRef,
  inputRef,
}: {
  getEnvironmentProps: GetEnvironmentProps;
  panelElementRef: React.RefObject<HTMLElement | null>;
  formElementRef: React.RefObject<HTMLElement | null>;
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  React.useEffect(() => {
    const panelElement = panelElementRef.current;
    const formElement = formElementRef.current;
    const inputElement = inputRef.current;

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
  }, [getEnvironmentProps, panelElementRef, formElementRef, inputRef]);
}
