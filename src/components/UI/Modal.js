import React from 'react';
import classes from './Modal.module.css';
import ReactDom from 'react-dom';

const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const Overlay=props=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal=props=>{
    return <React.Fragment>
        {ReactDom.createPortal(<Backdrop onClose={props.onClose}></Backdrop>,document.getElementById('overlays'))}
        {ReactDom.createPortal(<Overlay>{props.children}</Overlay>,document.getElementById('overlays'))}
    </React.Fragment>
}
export default Modal;