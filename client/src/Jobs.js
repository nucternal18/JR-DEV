// @ts-nocheck
import React, {useState} from 'react';
import { Typography } from '@material-ui/core';

import Job from './Job';
import JobModal from './jobModal';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        flexGrow: 1
    }
});

const Jobs = ({ jobs }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [selectJob, selectedJob] = useState({});
    const [open, setOpen] = React.useState(false);

    //Modal
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    //Pagination
    const numJobs = jobs.length;
    const numPages = Math.ceil(numJobs / 40);

    const jobsOnPage = jobs.slice(activeStep * 50, (activeStep * 50 + 50))

    const classes = useStyles();
    const theme = useTheme();


    // step == 0, show 0 - 49
    // step == 1, show 50 - 99

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    return (
        <div className="jobs">
            <JobModal open={open} job={selectJob} handleClose={handleClose} />
            <Typography variant="h4" component="h1">
                Entry Level Software Jobs
            </Typography>
            <Typography variant="h6" component="h1">
                Found {numJobs} jobs
            </Typography>
            {
                jobsOnPage.map(
                    (job, i) => <Job key={i} job={job} onClick={() => {
                        handleClickOpen();
                        selectedJob(job)
                    }} />
                )
            }

            <div>
                Page {activeStep + 1} of {numPages}
            </div>

            <MobileStepper
                variant="progress"
                steps={numPages}
                position="static"
                activeStep={activeStep}
                className={classes.root}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                    </Button>
                }
            />
        </div>
    )
};

export default Jobs;

