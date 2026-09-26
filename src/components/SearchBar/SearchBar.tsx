import type { Meilisearch } from 'meilisearch';
import type * as MeilisearchModule from 'meilisearch';
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { siteConfig } from '../../config';
import Dialog from '../Dialog/Dialog';
import Search from '../icons/Search';
import type { HomepageYear } from './autocomplete';
import './SearchBar.css';
import type * as SearchModalModule from './SearchModal';
type LoadedSearch = {
  searchClient: Meilisearch;
  SearchModal: typeof SearchModalModule.default;
};
type SearchModules = [typeof MeilisearchModule, typeof SearchModalModule];
interface SearchBarProps {
  section?: string;
  years?: HomepageYear[];
}
const SearchBar = ({ section, years }: SearchBarProps) => {
  const [open, setOpen] = useState(false);
  const [filterBySection, setFilterBySection] = useState(true);
  const searchResourcesPromiseRef = useRef<Promise<SearchModules> | null>(null);
  const searchTriggerRef = useRef<HTMLButtonElement | null>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const returnDialogRef = useRef<HTMLElement | null>(null);
  const handleOpenSearch = useCallback(
    (event?: React.MouseEvent<HTMLButtonElement>) => {
      if (open) {
        return;
      }
      const focusTarget = event?.currentTarget ?? document.activeElement;
      returnFocusRef.current = focusTarget instanceof HTMLElement ? focusTarget : null;
      returnDialogRef.current =
        focusTarget instanceof HTMLElement
          ? focusTarget.closest<HTMLElement>('[role="dialog"][aria-modal="true"]')
          : null;
      setOpen(true);
    },
    [open]
  );
  const handleNavigate = useCallback(() => {
    returnFocusRef.current = null;
    returnDialogRef.current = null;
    window.dispatchEvent(new Event('resumos:search-navigate'));
    setOpen(false);
  }, []);
  const handleCloseSearch = useCallback(() => setOpen(false), []);
  useLayoutEffect(() => {
    if (open || !returnFocusRef.current) return;
    const focusTarget = returnFocusRef.current;
    const dialog = returnDialogRef.current;
    returnFocusRef.current = null;
    returnDialogRef.current = null;
    if (
      document.activeElement !== document.body &&
      document.activeElement !== document.documentElement
    ) {
      return;
    }
    const isDocumentRoot =
      focusTarget === document.body || focusTarget === document.documentElement;
    if (focusTarget.isConnected && !isDocumentRoot) {
      const withinVisibleDialog =
        dialog?.isConnected &&
        !dialog.hidden &&
        dialog.getAttribute('aria-hidden') !== 'true' &&
        dialog.contains(focusTarget) &&
        dialog.getClientRects().length > 0 &&
        getComputedStyle(dialog).visibility === 'visible';
      const drawer = focusTarget.closest<HTMLElement>('#course-sidebar');
      const withinVisibleDrawer =
        drawer?.isConnected &&
        !drawer.hidden &&
        !drawer.inert &&
        drawer.getAttribute('aria-hidden') !== 'true' &&
        drawer.getClientRects().length > 0 &&
        getComputedStyle(drawer).visibility === 'visible' &&
        getComputedStyle(drawer).overflowY === 'auto';
      // Native focus reveals nested modal/sidebar controls; page openers must not scroll.
      if (!drawer || withinVisibleDrawer) {
        focusTarget.focus({ preventScroll: !withinVisibleDialog && !withinVisibleDrawer });
        if (document.activeElement === focusTarget) return;
      }
    }
    if (dialog?.isConnected && !dialog.hidden && dialog.getAttribute('aria-hidden') !== 'true') {
      dialog.focus({ preventScroll: true });
      if (document.activeElement === dialog) return;
    }
    searchTriggerRef.current?.focus({ preventScroll: true });
  }, [open]);
  const handleToggleFilterBySection = useCallback(() => {
    setFilterBySection((value) => !value);
  }, []);
  const { host, apiKey, indexName } = siteConfig.search;
  const [searchResources, setSearchResources] = useState<LoadedSearch | null>(null);
  useEffect(() => {
    if (!open || searchResources) {
      return;
    }
    let cancelled = false;
    const searchResourcesPromise =
      searchResourcesPromiseRef.current ??
      (searchResourcesPromiseRef.current = Promise.all([
        import('meilisearch'),
        import('./SearchModal'),
      ]));
    void searchResourcesPromise
      .then(([{ Meilisearch }, { default: SearchModal }]) => {
        if (cancelled) {
          return;
        }
        setSearchResources({
          searchClient: new Meilisearch({ host, apiKey }),
          SearchModal,
        });
      })
      .catch(() => {
        if (searchResourcesPromiseRef.current === searchResourcesPromise)
          searchResourcesPromiseRef.current = null;
        if (!cancelled) handleCloseSearch();
      });
    return () => {
      cancelled = true;
    };
  }, [open, searchResources, host, apiKey, handleCloseSearch]);
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && !event.altKey && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        const nextFilterBySection = !event.shiftKey;
        if (!open) {
          setFilterBySection(nextFilterBySection);
          handleOpenSearch();
        } else if (filterBySection !== nextFilterBySection) {
          setFilterBySection(nextFilterBySection);
        } else {
          handleCloseSearch();
        }
      }
      if (
        event.key === 'Escape' &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey &&
        !event.shiftKey &&
        open
      ) {
        event.preventDefault();
        handleCloseSearch();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [filterBySection, handleCloseSearch, handleOpenSearch, open]);
  const searchClient = searchResources?.searchClient;
  const SearchModal = searchResources?.SearchModal;
  return (
    <>
      <button
        ref={searchTriggerRef}
        className='search-button'
        aria-label='Search'
        onClick={handleOpenSearch}
      >
        <Search className='search-button--icon' />
        <span className='search-button--label'>Search</span>
        <span className='search-button--keybinds'>
          <kbd>CTRL</kbd>
          <kbd>K</kbd>
        </span>
      </button>
      <Dialog open={open} onClose={handleCloseSearch} label='Search'>
        {searchClient && SearchModal ? (
          <SearchModal
            searchClient={searchClient}
            indexName={indexName}
            onClose={handleCloseSearch}
            onNavigate={handleNavigate}
            section={section}
            years={years}
            filterBySection={filterBySection}
            handleToggleFilterBySection={handleToggleFilterBySection}
          />
        ) : (
          <header className='search-header'>
            <span className='search-form' role='status'>
              Loading search…
            </span>
            <button className='search-close' onClick={handleCloseSearch} aria-label='Close search'>
              Close
            </button>
          </header>
        )}
      </Dialog>
    </>
  );
};
export default SearchBar;
