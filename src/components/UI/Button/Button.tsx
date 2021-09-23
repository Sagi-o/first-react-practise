import { FunctionComponent, MouseEventHandler } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    onClick: MouseEventHandler
}
 
const Button: FunctionComponent<ButtonProps> = (props) => {
    return (
        <button onClick={props.onClick} className={styles.button}>
            {props.children}
        </button>
    );
}
 
export default Button;