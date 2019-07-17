import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the deckOfCards state domain
 */

const selectDeckOfCardsDomain = state => state.deckOfCards || initialState;

/**
 * Other selectors
 */
export const makeSelectStoredCard = () =>
  createSelector(
    selectDeckOfCardsDomain,
    deckState => deckState.storedCard,
  );

export const makeSelectHand = () =>
  createSelector(
    selectDeckOfCardsDomain,
    deckState => deckState.hand,
  );

export const makeSelectBalance = () =>
  createSelector(
    selectDeckOfCardsDomain,
    deckState => deckState.balance,
  );

export const makeSelectRemaining = () =>
  createSelector(
    selectDeckOfCardsDomain,
    deckState => deckState.remaining,
  );

export const makeSelectHistory = () =>
  createSelector(
    selectDeckOfCardsDomain,
    deckState => deckState.history,
  );

export const makeSelectLoading = () =>
  createSelector(
    selectDeckOfCardsDomain,
    deckState => deckState.loading,
  );

export const makeSelectShowModal = () =>
  createSelector(
    selectDeckOfCardsDomain,
    deckState => deckState.showModal,
  );

export const makeSelectResult = () =>
  createSelector(
    selectDeckOfCardsDomain,
    deckState => deckState.result,
  );

/**
 * Default selector used by DeckOfCards
 */
export const makeSelectDeckOfCards = () =>
  createSelector(
    selectDeckOfCardsDomain,
    deckState => deckState,
  );

export default makeSelectDeckOfCards;
export { selectDeckOfCardsDomain };
