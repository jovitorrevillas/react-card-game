/**
 *
 * DisplayCard Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Img from 'components/Img';

import { DISPLAY_CARD_STYLES } from './constants';

export function DisplayCard({
  card,
  classes,
  forHistory,
  result,
  withGutter,
  ...props
}) {
  const newClassName = classNames({
    [classes.CardMediaWithGutter]: withGutter,
    [classes.CardMedia]: true,
    [classes.CardMediaSmall]: forHistory,
    [classes.CardMediaLost]: result === 'Lost',
    [classes.CardMediaWon]: result === 'Won',
    [classes.CardMediaDraw]: result === 'Drew',
  });

  return (
    card && (
      <Img
        {...props}
        className={newClassName}
        src={card.image}
        alt={`${card.value} of ${card.suit}`}
      />
    )
  );
}

DisplayCard.propTypes = {
  card: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  withGutter: PropTypes.bool,
  props: PropTypes.object,
};

const styledComponent = withStyles(DISPLAY_CARD_STYLES)(DisplayCard);
export default styledComponent;
