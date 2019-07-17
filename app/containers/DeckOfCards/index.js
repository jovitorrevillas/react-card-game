/**
 *
 * DeckOfCards
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Button, Paper, Tooltip } from '@material-ui/core';

import { shuffleDeck, placeBet, toggleModal, drawCardToTable } from './actions';
import {
  makeSelectDeckOfCards,
  makeSelectStoredCard,
  makeSelectHand,
  makeSelectShowModal,
  makeSelectLoading,
  makeSelectResult,
  makeSelectBalance,
  makeSelectRemaining,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import DisplayCard from './displayCard';
import Cockpit from './cockpit';
import Modal from './resultModal';
import History from './history';

export function DeckOfCards({
  deckOfCards,
  storedCard,
  handCard,
  showModal,
  isLoading,
  onShuffleDeck,
  onPlaceBet,
  onDrawCardToTable,
  onToggleModal,
  showResult,
  balance,
  remaining,
}) {
  useInjectReducer({ key: 'deckOfCards', reducer });
  useInjectSaga({ key: 'deckOfCards', saga });

  const onClickBet = (betAmount, chosenMethod) => {
    onPlaceBet(betAmount, chosenMethod);
  };

  return (
    <>
      <Paper
        style={{
          display: 'flex',
          flexFlow: 'row',
          justifyContent: 'space-between',
          height: 'calc(100vh - 64px)',
        }}
      >
        <div>
          <Modal
            show={showModal}
            onClickClose={onDrawCardToTable}
            retain={onToggleModal}
            loading={isLoading}
            hand={handCard}
            result={showResult}
            balance={balance}
            remaining={remaining}
            onNewTable={onShuffleDeck}
          />
          <Tooltip title={<FormattedMessage {...messages.TooltipNewGame} />}>
            <Button onClick={() => onShuffleDeck()}>
              <FormattedMessage {...messages.newGame} />
            </Button>
          </Tooltip>
          {deckOfCards.deckId && storedCard && (
            <div style={{ display: 'flex', flexFlow: 'row', margin: '3em 0' }}>
              <DisplayCard card={storedCard} withGutter />
              <Cockpit
                loading={isLoading}
                clickBet={(betAmount, chosenMethod) =>
                  onClickBet(betAmount, chosenMethod)
                }
                remaining={remaining}
              />
            </div>
          )}
        </div>
        <History />
      </Paper>
    </>
  );
}

DeckOfCards.propTypes = {
  props: PropTypes.object,
  showModal: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onShuffleDeck: PropTypes.func.isRequired,
  onPlaceBet: PropTypes.func.isRequired,
  onDrawCardToTable: PropTypes.func.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  deckOfCards: PropTypes.object,
  storedCard: PropTypes.object,
  handCard: PropTypes.object,
  showResult: PropTypes.string,
  balance: PropTypes.number,
  remaining: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  deckOfCards: makeSelectDeckOfCards(),
  storedCard: makeSelectStoredCard(),
  handCard: makeSelectHand(),
  showResult: makeSelectResult(),
  showModal: makeSelectShowModal(),
  isLoading: makeSelectLoading(),
  balance: makeSelectBalance(),
  remaining: makeSelectRemaining(),
});

function mapDispatchToProps(dispatch) {
  return {
    onShuffleDeck: () => dispatch(shuffleDeck()),
    onPlaceBet: (betAmount, chosenMethod) =>
      dispatch(placeBet(betAmount, chosenMethod)),
    onDrawCardToTable: () => dispatch(drawCardToTable()),
    onToggleModal: () => dispatch(toggleModal()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(DeckOfCards);
