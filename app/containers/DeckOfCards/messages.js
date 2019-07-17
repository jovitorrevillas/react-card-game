/*
 * DeckOfCards Messages
 *
 * This contains all the text for the DeckOfCards container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.DeckOfCards';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the DeckOfCards container!',
  },
  newGame: {
    id: `${scope}.newGame`,
    defaultMessage: 'Start a new game?',
  },
  Higher: {
    id: `${scope.Higher}`,
    defaultMessage: 'Higher',
  },
  Lower: {
    id: `${scope}.Lower`,
    defaultMessage: 'Lower',
  },
  InputBalanceLeft: {
    id: `${scope}.InputBalanceLeft`,
    defaultMessage: 'Balance: {balance}',
  },
  ResultWin: {
    id: `${scope}.ResultWin`,
    defaultMessage: 'You won!',
  },
  ResultLose: {
    id: `${scope}.ResultLose`,
    defaultMessage: 'You lost...',
  },
  ResultDraw: {
    id: `${scope}.ResultDraw`,
    defaultMessage: 'It was a draw.',
  },
  ResultBalance: {
    id: `${scope}.ResultBalance`,
    defaultMessage: 'Your new balance is now: {balance}',
  },
  NewTable: {
    id: `${scope}.NewTable`,
    defaultMessage: 'Change Card',
  },
  RetainTable: {
    id: `${scope}.RetainTable`,
    defaultMessage: 'Retain Card',
  },
  HistoryText: {
    id: `${scope}.HistoryText`,
    defaultMessage: '{result} {amount} for choosing {method}',
  },
  TooltipNewGame: {
    id: `${scope}.TooltipNewGame`,
    defaultMessage:
      'Shuffle the deck, clear history and balance will be back to 5000',
  },
});
