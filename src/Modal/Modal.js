import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";

const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#000000',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      card: {
        background: "#87644",
      },
    },
    typography: {
      fontSize: 17,
      fontFamily: [
        'Georgia',
      ].join(','),
      button: {
        textTransform: 'none'
      },
    }
  });

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "auto",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button theme={props.t} onClick={handleOpen}>{props.desc}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography theme={theme} id="modal-modal-title" variant="h6" component="h2">
            {props.ti}
          </Typography>
          <Typography theme={theme} id="modal-modal-description" sx={{ mt: 2 }}>
            {props.rD}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}