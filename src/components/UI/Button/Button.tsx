import { FunctionComponent } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    onClick: Function;
}
 
const Button: FunctionComponent<ButtonProps> = (props: any) => {
    return (
        <button onClick={props.onClick} className={styles.button}>
            {props.children}
        </button>
    );
}
 
export default Button;