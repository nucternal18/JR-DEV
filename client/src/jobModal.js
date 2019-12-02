// @ts-nocheck
import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const jobModal = ({ job, open, handleClose }) => {
    
    if (!job) {
        return <div> No Jobs available</div>
    }

        return (
            <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby='alert-dialog-slide-title'
                aria-describedby='alert-dialog-slide-description'
            >
                <DialogTitle id='alert-dialog-slide-title'>
                        {job.title} | {job.company}
                        <img className="detail-logo" src={job.company_logo} alt="Company logo"/>
                </DialogTitle>
                <DialogContent>
                        <DialogContentText
                            dangerouslySetInnerHTML={{__html: job.description}}
                            id='alert-dialog-slide-description' />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color='primary'>
                    Close
                </Button>
                <Button color='primary'>
                    <a href={job.url} target="_blank" rel="noopener noreferrer">Apply</a>
                </Button>
                </DialogActions>
            </Dialog>
            </div>
        );
}

export default jobModal;