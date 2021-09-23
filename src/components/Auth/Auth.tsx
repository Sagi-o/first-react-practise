import { FunctionComponent, useReducer, useContext } from "react";
import AuthContext from "../../context/auth/auth-context";
import classes from './Auth.module.css';

interface AuthProps {
}

interface AuthState {
    email: {
        value: string;
        isValid: boolean;
    },
    password: {
        value: string;
        isValid: boolean;
    }
}

const defaultAuthState: AuthState = {
    email: {
        value: '',
        isValid: false,
    },
    password: {
        value: '',
        isValid: false,
    }
}

interface AuthAction {
    type: ActionTypes;
    value: string;
}

enum ActionTypes {
    EMAIL_INPUT = 'EMAIL_INPUT',
    PASSWORD_INPUT = 'PASSWORD_INPUT',
}

const Auth: FunctionComponent<AuthProps> = () => {

    const authContext = useContext(AuthContext);

    const authReducer = (state: AuthState, action: AuthAction) => {
        switch (action.type) {
            case ActionTypes.EMAIL_INPUT: {
                return {
                    ...state,
                    email: {
                        value: action.value,
                        isValid: action.value.includes('@'),
                    }
                };
            }
            case ActionTypes.PASSWORD_INPUT: {
                return {
                    ...state,
                    password: {
                        value: action.value,
                        isValid: action.value.length >= 6,
                    }
                };
            }
            default: {
                return defaultAuthState;
            }
        }
    }

    const [authState, dispatchAuth] = useReducer(authReducer, defaultAuthState);

    const inputChangedHandler = (e: any) => {
        dispatchAuth({ type: e.target.name, value: e.target.value });
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <span>Is logged in: {authContext.isLoggedIn.toString()}</span>
            <div className={classes['auth__email']}>
                <label>Email</label>
                <input name="EMAIL_INPUT" value={authState.email.value} type="text" onChange={inputChangedHandler} />
            </div>
            <div className={classes['auth__password']}>
                <label>Password</label>
                <input name="PASSWORD_INPUT" value={authState.password.value} type="password" onChange={inputChangedHandler} />
            </div>
        </form>
    );
}

export default Auth;