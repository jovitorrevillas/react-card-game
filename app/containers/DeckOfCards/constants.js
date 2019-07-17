/*
 *
 * DeckOfCards constants
 *
 */

export const SHUFFLE_DECK = 'app/DeckOfCards/SHUFFLE_DECK';
export const UPDATE_DECK = 'app/DeckOfCards/UPDATE_DECK';
export const UPDATE_STORED_CARD = 'app/DeckOfCards/UPDATE_STORED_CARD';
export const DRAW_CARD_TO_TABLE = 'app/DeckOfCards/DRAW_CARD_TO_TABLE';
export const UPDATE_HAND = 'app/DeckOfCards/UPDATE_HAND';
export const ADD_TO_HISTORY = 'app/DeckOfCards/UPDATE_HISTORY';
export const PLACE_BET = 'app/DeckOfCards/PLACE_BET';
export const TOGGLE_LOADING = 'app/DeckOfCards/TOGGLE_LOADING';
export const UPDATE_RESULT = 'app/DeckOfCards/UPDATE_RESULT';
export const UPDATE_BALANCE = 'app/DeckOfCards/UPDATE_BALANCE';
export const TOGGLE_MODAL = 'app/DeckOfCards/TOGGLE_MODAL';
export const UPDATE_REMAINING = 'app/DeckOfCards/UPDATE_REMAINING';

export const DISPLAY_CARD_STYLES = {
  CardMedia: {
    width: 226,
    height: 314,
    filter: 'drop-shadow(0px 1px 3px #222)',
  },
  CardMediaWithGutter: {
    margin: '3em 9em',
  },
  CardMediaSmall: {
    height: 100,
    width: 'auto',
    filter: 'none',
  },
  CardMediaLost: {
    filter: 'drop-shadow(0px 1px 3px red)',
  },
  CardMediaWon: {
    filter: 'drop-shadow(0px 1px 3px green)',
  },
  CardMediaDraw: {
    filter: 'drop-shadow(0px 1px 3px yellow)',
  },
};

export const RESULT_MODAL_STYLES = {
  Modal: {
    marginTop: '5em',
  },
  CircularProgress: {
    margin: '5em auto',
  },
};

export const COCKPIT_STYLES = theme => ({
  TextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});
