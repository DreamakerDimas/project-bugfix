import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.sass';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {clearErrorSignUpAndLogin} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import Error from '../../components/Error/Error';
import handleSubmit from 'redux-form/lib/handleSubmit';
import {authActionLogin, clearAuth} from "../../actions/actionCreator";

const LoginPage = ({authClear, loginUser, ...restProps}) => {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.loginContainer}>
                <div className={styles.headerSignUpPage}>
                    <Link to='/'>
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo"/>
                    </Link>
                    <div className={styles.linkLoginContainer}>
                        <Link to='/registration' style={{textDecoration: 'none'}}><span>Signup</span></Link>
                    </div>
                </div>
                <div className={styles.loginFormContainer}>
                    <div className={styles.loginFormWrapper}>
                        <div className={styles.loginForm}>
                            {/* {error && <Error data={error.data} status={error.status} clearError={authClear}/>}*/}
                            <h2>LOGIN TO YOUR ACCOUNT</h2> 
                            <LoginForm onSubmit={handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

const mapStateToProps = state => state.auth;

const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clearErrorSignUpAndLogin()),
        loginUser: values => dispatch(authActionLogin(values)),
        authClear: () => dispatch(clearAuth())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);