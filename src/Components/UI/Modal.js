import { Fragment } from 'react';
import  ReactDOM  from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose}></div>
};

const ModalOverlay = props => {
    return <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>
};

//App.js itu dirender ke html yang id nya root, nah ini kita mau nari backdrop sama overlay di id overlay yg kita bikin
//di index.html pake portal
const portalElement = document.getElementById('overlays')

//reactdom itu ngerender parameter pertama ke tempat yg di parameter kedua
const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}

    </Fragment>
}

export default Modal;