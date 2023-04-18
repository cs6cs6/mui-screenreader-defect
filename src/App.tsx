import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {LinkDropdownMultiple} from "./LinkDropdownMultiple";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="body" gutterBottom>
         When using a Link {' '}
        <LinkDropdownMultiple />
            {' '} more text after
        </Typography>
          <p/>
        <Typography>
            The screenreader text is wrong. Here is a transcript of an unopened menu: "When using a link Choose an option more text after"
            <br/>
            It should read: "When using a link Choose an option <b>Pop up Button</b> more text after"
            <br/>
            When the button is opened via an enter key the first time, the transcript is: "Choose an option pop up button Choose an option with 0 items Choose an option menu with 0 items."
            <br/>
            Close and reopen the menu with the esc followed by enter key. Then the transcript is: "Choose an option. Menu with 0 items."
            <br/>
            Unpredictably, it will correct itself and start correctly saying, "Choose an option. Menu with 2 items." Once it becomes correct, you have to refresh the page to make it go back to 0 again. 
        </Typography>
      </Box>
    </Container>
  );
}
