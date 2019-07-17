/*
 *
 * DeckOfCards actions
 *
 */

import {
  SHUFFLE_DECK,
  DRAW_CARD_TO_TABLE,
  UPDATE_DECK,
  UPDATE_STORED_CARD,
  UPDATE_HAND,
  ADD_TO_HISTORY,
  PLACE_BET,
  TOGGLE_LOADING,
  UPDATE_RESULT,
  UPDATE_BALANCE,
  TOGGLE_MODAL,
  UPDATE_REMAINING,
} from './constants';

export const shuffleDeck = () => ({
  type: SHUFFLE_DECK,
});

export const drawCardToTable = () => ({
  type: DRAW_CARD_TO_TABLE,
});

export const updateDeck = deck => ({
  type: UPDATE_DECK,
  deck,
});

export const updateRemaining = remaining => ({
  type: UPDATE_REMAINING,
  remaining,
});

export const updateStoredCard = card => ({
  type: UPDATE_STORED_CARD,
  storedCard: card,
});

export const updateHand = hand => ({
  type: UPDATE_HAND,
  hand,
});

export const addToHistory = object => ({
  type: ADD_TO_HISTORY,
  object,
});

export const placeBet = (betAmount, chosenMethod) => ({
  type: PLACE_BET,
  betAmount,
  chosenMethod,
});

export const updateResult = result => ({
  type: UPDATE_RESULT,
  result,
});

export const updateBalance = calculate => ({
  type: UPDATE_BALANCE,
  calculate,
});

export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});
