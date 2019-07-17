import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  addToHistory,
  updateDeck,
  updateHand,
  updateStoredCard,
  drawCardToTable,
  toggleLoading,
  toggleModal,
  updateResult,
  updateBalance,
  updateRemaining,
} from './actions';
import { SHUFFLE_DECK, DRAW_CARD_TO_TABLE, PLACE_BET } from './constants';
import {
  makeSelectDeckOfCards,
  makeSelectHand,
  makeSelectStoredCard,
} from './selectors';
/**
 * Shuffle your deck of cards
 */
export function* doGetDeckOfCard() {
  const reqURL =
    'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

  try {
    const deckObject = yield call(request, reqURL);
    yield put(updateDeck(deckObject.deck_id));

    /**
     * Place card to table
     */
    yield put(drawCardToTable());
  } catch (err) {
    //
  }
}

/**
 * Draw from your deck of cards
 */
export function* doDrawCard() {
  const deckOfCards = yield select(makeSelectDeckOfCards());
  const reqURL = `https://deckofcardsapi.com/api/deck/${
    deckOfCards.deckId
  }/draw/?count=1`;

  try {
    const deckObject = yield call(request, reqURL);
    const [firstCard] = deckObject.cards;
    yield put(updateStoredCard(firstCard));

    const { remaining } = deckObject;
    yield put(updateRemaining(remaining));
  } catch (err) {
    //
  }
}

export function* doPlaceBet({ betAmount, chosenMethod }) {
  yield put(toggleModal());
  yield put(toggleLoading());

  const deckOfCards = yield select(makeSelectDeckOfCards());
  const reqURL = `https://deckofcardsapi.com/api/deck/${
    deckOfCards.deckId
  }/draw/?count=1`;

  let deckObject = {};
  try {
    deckObject = yield call(request, reqURL);
    const [firstCard] = deckObject.cards;
    yield put(updateHand(firstCard));

    const { remaining } = deckObject;
    yield put(updateRemaining(remaining));
  } catch (err) {
    //
  }

  if (deckObject.success) {
    const cardInHand = yield select(makeSelectHand());
    const cardInTable = yield select(makeSelectStoredCard());
    const preVal = { ACE: 1, JACK: 11, QUEEN: 12, KING: 13 };
    const handCardValue = preVal[cardInHand.value] || cardInHand.value;
    const tableCardValue = preVal[cardInTable.value] || cardInTable.value;
    let isWinner;

    if (handCardValue === tableCardValue) {
      isWinner = null;
    } else if (chosenMethod === 'higher') {
      isWinner = handCardValue > tableCardValue;
    } else {
      isWinner = tableCardValue > handCardValue;
    }

    let winning = 'Drew';
    if (typeof isWinner === 'boolean') {
      yield put(updateResult(isWinner === true ? 'win' : 'lose'));

      winning = isWinner === true ? 'Won' : 'Lost';
      yield put(updateBalance(`${isWinner ? '+' : '-'}${betAmount}`));
    } else {
      yield put(updateResult(winning));
    }

    yield put(
      addToHistory({
        storedCard: cardInTable,
        hand: cardInHand,
        method: chosenMethod,
        result: winning,
        amount: betAmount,
      }),
    );
  }
  yield put(toggleLoading());
}

// Individual exports for testing
export default function* deckOfCardsSaga() {
  yield takeLatest(SHUFFLE_DECK, doGetDeckOfCard);
  yield takeLatest(DRAW_CARD_TO_TABLE, doDrawCard);
  yield takeLatest(PLACE_BET, doPlaceBet);
  // See example in containers/HomePage/saga.js
}
