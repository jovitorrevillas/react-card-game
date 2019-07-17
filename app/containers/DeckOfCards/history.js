import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Typography from '@material-ui/core/Typography';

import messages from './messages';
import DisplayCard from './displayCard';
import { makeSelectHistory } from './selectors';

const Wrapper = styled.footer`
  display: flex;
  flex-flow: column;
  height: calc(100vh - 64px);
  padding: 1.5em;
  overflow: auto;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 1em;
  width: 150px;
`;

const Div = styled.div`
  display: flex;
  text-align: center;
  flex-flow: column;
`;

function History({ history }) {
  return (
    <Wrapper>
      {history.map(historyObject => {
        const { storedCard, hand, method, result, amount } = historyObject;
        return (
          <Div>
            <Section>
              <DisplayCard card={storedCard} forHistory />
              <DisplayCard card={hand} forHistory result={result} />
            </Section>
            <Typography style={{ fontSize: '.85em' }}>
              <FormattedMessage
                {...messages.HistoryText}
                values={{
                  result,
                  amount,
                  method,
                }}
              />
            </Typography>
          </Div>
        );
      })}
    </Wrapper>
  );
}

History.propTypes = {
  history: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  history: makeSelectHistory(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(History);
