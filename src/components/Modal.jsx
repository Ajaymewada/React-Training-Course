import classes from "./Modal.module.css"
function Modal({ children, onModalhide }) {
    return(
        <>
            <div className={classes.backdrop} onClick={onModalhide}></div>
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    )
}

export default Modal