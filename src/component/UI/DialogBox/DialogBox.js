import React from 'react';

import { Dialog, ThemeProvider, createTheme } from '@mui/material';

import { getThemeVariablesValue } from 'utilities/globalFunctions/globalFunctions';

function DialogBox(props) {

  const { width, open, onClose } = props;

  const dialogTheme = createTheme({
    components: {
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: getThemeVariablesValue('--secondaryBackground'),
            borderRadius: '15px'
          }
        }
      }
    }
  });

  const dialogAttributes = {
    fullWidth: true,
    maxWidth: width,
    open,
    onClose
  };

  return (
    <ThemeProvider theme={dialogTheme}>
      <Dialog {...dialogAttributes}>
        {props.children}
      </Dialog>
    </ThemeProvider>
  );
}

export default DialogBox;