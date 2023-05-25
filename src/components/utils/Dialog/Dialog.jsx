import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { grey } from '@mui/material/colors';

const DialogComponent = ({title,content,handleCancelDelete,handleAccessDelete,visible}) => {
  return (
    <div>
      <Dialog
        open={visible}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ fontSize:30,color:grey[800]}}>
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ fontSize:20,color:grey[800]}}>
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ fontSize:20,color:grey[800]}} onClick={handleCancelDelete}>HỦY</Button>
          <Button sx={{ fontSize:20,color:grey[800]}} onClick={handleAccessDelete} autoFocus>
            XÓA
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogComponent