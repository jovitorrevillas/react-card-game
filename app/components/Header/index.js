import React from 'react';
import { FormattedMessage } from 'react-intl';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import messages from './messages';

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          <FormattedMessage {...messages.home} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
