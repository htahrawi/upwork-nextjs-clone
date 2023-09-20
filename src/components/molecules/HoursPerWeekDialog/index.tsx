import SidebarControlProfile from '@/components/atoms/SidebarControlProfile'
import { Button,Dialog,DialogActions,Input,InputAdornment,OutlinedInput } from '@mui/material'
import React,{ useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { StyledDialogContent,dialogStyle,question_icon_style } from './style'
import { StyledAlignFlex,StyledBetweenAlignFlex,StyledBetweenFlex } from '@/style/common';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
const HoursPerWeekDialog = () => {
    const [open,setOpen] = useState(false);
    const openToggle = () => {
        setOpen(!open);
    }

    return (
        <div>
            <h1>HoursPerWeekDialog</h1>
            <SidebarControlProfile
                text="Hours per week"
                editIcon
                onEditClicked={() => openToggle()}>
                <p>More than 30 hrs/week</p>
                <span>Open to contract to hire</span>
            </SidebarControlProfile>
            <Dialog open={open} PaperProps={{ style: dialogStyle }} >
                <StyledBetweenAlignFlex >
                    <h2>Change Hourly Rate</h2>
                    <CloseIcon fontSize='small' onClick={openToggle} />
                </StyledBetweenAlignFlex>
                <StyledDialogContent>
                    <article>
                        <p>Please note that your new Full Stack Developer hourly rate will only apply to new contracts.</p>
                        <p>
                            The Upwork Service Fee is 20% when begin a contract with a new client.<br />
                            Once you bil over $500 with your client, the fee will be 10%.
                        </p>
                        <p>
                            Your Profile rate: <strong>$25.00/hr</strong>
                        </p>
                    </article>
                    <StyledBetweenAlignFlex>
                        <div>
                            <h3>Hourly Rate</h3>
                            <p>Total amount the client will see</p>
                        </div>
                        <div >
                            <OutlinedInput
                                type='number'
                                className='rate__input'
                                autoFocus
                                inputProps={{ className: 'rate__input' }}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AttachMoneyIcon style={{ color: '#000' }} />
                                    </InputAdornment>
                                }
                                defaultValue={"25.00"}
                            />
                            <span>/hr</span>
                        </div>
                    </StyledBetweenAlignFlex>
                    <hr />
                    <StyledBetweenAlignFlex>
                        <h3>20% Upwork Service Fee</h3>
                        <div >
                            <OutlinedInput
                                type='number'
                                className='rate__input fee__input'
                                autoFocus
                                inputProps={{ className: 'rate__input' }}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AttachMoneyIcon style={{ color: '#000' }} />
                                    </InputAdornment>
                                }
                                defaultValue={"-5.00"}
                                disabled
                            />
                            <span>/hr</span>
                        </div>
                    </StyledBetweenAlignFlex>
                    <hr />
                    <StyledBetweenAlignFlex>
                        <div>
                            <h3>You&rsquo;ll Receive</h3>
                            <StyledAlignFlex>
                                <p>
                                    The estimated amount you&rsquo;ll receive after service fees
                                </p>
                                <QuestionMarkRoundedIcon style={question_icon_style} />
                            </StyledAlignFlex>
                        </div>
                        <div >
                            <OutlinedInput
                                type='number'
                                className='rate__input'
                                autoFocus={false}
                                inputProps={{ className: 'rate__input' }}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AttachMoneyIcon style={{ color: '#000' }} />
                                    </InputAdornment>
                                }
                                defaultValue={"25.00"}
                            />
                            <span>/hr</span>
                        </div>
                    </StyledBetweenAlignFlex>
                    <DialogActions >
                        <StyledAlignFlex as={'div'} gap='10px' padding='10px 0 '>
                            <Button onClick={() => openToggle()} variant='contained'>Close</Button>
                            <Button onClick={() => {}} variant='contained'>Save</Button>
                        </StyledAlignFlex>
                    </DialogActions>
                </StyledDialogContent>
            </Dialog>
        </div>
    )
}

export default HoursPerWeekDialog