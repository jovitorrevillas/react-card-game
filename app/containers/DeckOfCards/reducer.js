/*
 *
 * DeckOfCards reducer
 *
 */
import produce from 'immer';
import {
  UPDATE_DECK,
  UPDATE_STORED_CARD,
  UPDATE_HAND,
  UPDATE_REMAINING,
  ADD_TO_HISTORY,
  TOGGLE_LOADING,
  UPDATE_RESULT,
  UPDATE_BALANCE,
  TOGGLE_MODAL,
} from './constants';

export const initialState = {
  deckId: null,
  remaining: null,
  storedCard: {},
  hand: {},
  history: [],
  loading: false,
  result: null,
  balance: 5000,
  showModal: false,
};

/* eslint-disable default-case, no-param-reassign */
const deckOfCardsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_DECK:
        draft.deckId = action.deck;
        draft.hand = {};
        draft.storedCard = {};
        draft.history = [];
        draft.balance = 5000;
        break;

      case UPDATE_STORED_CARD:
        draft.storedCard = action.storedCard;
        draft.showModal = false;
        break;

      case UPDATE_HAND:
        draft.hand = action.hand;
        break;

      case UPDATE_REMAINING:
        draft.remaining = action.remaining;
        break;

      case ADD_TO_HISTORY:
        draft.history = [action.object];
        draft.history = draft.history.concat(state.history);
        break;

      case TOGGLE_LOADING:
        draft.loading = !state.loading;
        break;

      case UPDATE_RESULT:
        draft.result = action.result;
        break;

      case UPDATE_BALANCE:
        draft.balance = state.balance + Number(action.calculate);
        break;

      case TOGGLE_MODAL:
        draft.showModal = !state.showModal;
        break;
    }
  });

export default deckOfCardsReducer;
