/**
 *
 * ResultModal Modal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import messages from './messages';
import DisplayCard from './displayCard';

import { RESULT_MODAL_STYLES } from './constants';

export function ResultModal({
  show,
  onClickClose,
  classes,
  loading,
  hand,
  result,
  balance,
  retain,
  remaining,
  onNewTable,
}) {
  const resultTitle = type => {
    switch (type) {
      case 'win':
        return <FormattedMessage {...messages.ResultWin} />;
      case 'lose':
        return <FormattedMessage {...messages.ResultLose} />;
      default:
        return <FormattedMessage {...messages.ResultDraw} />;
    }
  };

  return (
    <Dialog
      fullWidth
      className={classes.Modal}
      open={show}
      onClose={onClickClose}
      classes={classes.Dialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {loading ? (
        <CircularProgress className={classes.CircularProgress} />
      ) : (
        <>
          <DialogTitle id="alert-dialog-title">
            {resultTitle(result)}
          </DialogTitle>
          <DialogContent style={{ display: 'flex', flexFlow: 'row' }}>
            <DisplayCard card={hand} />
            <DialogContentText
              id="alert-dialog-description"
              style={{ width: '50%', margin: '0 auto' }}
            >
              <FormattedMessage
                {...messages.ResultBalance}
                values={{
                  balance,
                }}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {remaining >= 1 ? (
              <>
                <Button onClick={retain} color="primary">
                  <FormattedMessage {...messages.RetainTable} />
                </Button>
                <Button
                  disabled={remaining < 1}
                  onClick={onClickClose}
                  color="primary"
                  autoFocus
                >
                  <FormattedMessage {...messages.NewTable} />
                </Button>
              </>
            ) : (
              <Button onClick={onNewTable} color="primary">
                <FormattedMessage {...messages.newGame} />
              </Button>
            )}
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}

ResultModal.propTypes = {
  show: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onClickClose: PropTypes.func,
  retain: PropTypes.func,
  classes: PropTypes.object.isRequired,
  onNewTable: PropTypes.func.isRequired,
  hand: PropTypes.object.isRequired,
  result: PropTypes.string,
  balance: PropTypes.number,
  remaining: PropTypes.number,
};

const styledComponent = withStyles(RESULT_MODAL_STYLES)(ResultModal);
export default styledComponent;
