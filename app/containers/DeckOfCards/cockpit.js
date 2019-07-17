/**
 *
 * Cockpit Button
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { shuffleDeck } from './actions';
import { COCKPIT_STYLES } from './constants';
import makeSelectDeckOfCards, { makeSelectBalance } from './selectors';
import messages from './messages';

export function Cockpit({ classes, clickBet, loading, remaining, balance }) {
  const [chosenMethod, setChosenMethod] = useState('');
  const onClickHigher = () => setChosenMethod('higher');
  const onClickLower = () => setChosenMethod('lower');

  const [betAmount, setBetAmount] = useState('');
  const onChangeBetAmount = evt =>
    /^[0-9]{0,5}$/.test(evt.target.value) && setBetAmount(evt.target.value);

  const onClearAll = () => {
    setChosenMethod('');
    setBetAmount('');
  };

  return (
    <div style={{ display: 'flex', flexFlow: 'column' }}>
      <div style={{ display: 'flex', flexFlow: 'row' }}>
        <div>
          <Button
            disabled={chosenMethod === 'higher'}
            onClick={() => onClickHigher()}
          >
            <FormattedMessage {...messages.Higher} />
          </Button>
        </div>

        <div>
          <Button
            disabled={chosenMethod === 'lower'}
            onClick={() => onClickLower()}
          >
            <FormattedMessage {...messages.Lower} />
          </Button>
        </div>
      </div>

      <TextField
        id="standard-with-placeholder"
        label="Amount to Bet"
        placeholder="100"
        value={betAmount}
        onChange={e => onChangeBetAmount(e)}
        helperText={
          <FormattedMessage
            {...messages.InputBalanceLeft}
            values={{
              balance: balance - betAmount,
            }}
          />
        }
        className={classes.TextField}
        margin="normal"
      />

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button onClick={() => onClearAll()}>Clear</Button>
        <Button
          disabled={
            !(betAmount && chosenMethod) ||
            loading ||
            betAmount > balance ||
            !remaining
          }
          onClick={() => clickBet(betAmount, chosenMethod)}
        >
          Bet
        </Button>
      </div>
    </div>
  );
}

Cockpit.propTypes = {
  classes: PropTypes.object.isRequired,
  onShuffleDeck: PropTypes.func.isRequired,
  clickBet: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  remaining: PropTypes.number,
  balance: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  balance: makeSelectBalance(),
  deckOfCards: makeSelectDeckOfCards(),
});

function mapDispatchToProps(dispatch) {
  return {
    onShuffleDeck: () => dispatch(shuffleDeck()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const styled = withStyles(COCKPIT_STYLES)(Cockpit);
export default compose(withConnect)(styled);
