import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearErrorSignUpAndLogin, authActionRegister, clearAuth} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import RegistrationText from '../../components/RegistrationText/RegistrationText';
import handleSubmit from 'redux-form/lib/handleSubmit';

const RegistrationPage = (props) => {
    props.clearError();

    return (
        <div className={styles.signUpPage}>
            <div className={styles.signUpContainer}>
                <div className={styles.headerSignUpPage}>
                    <Link to='/'>
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo"/>
                    </Link>
                    <div className={styles.linkLoginContainer}>
                        <Link to='/login' style={{textDecoration: 'none'}}><span>Login</span></Link>
                    </div>
                </div>
                {/* {error && <Error data={error.data} status={error.status} clearError={authClear}/>} */}
                <div className={styles.headerFormContainer}>
                    <h2>
                        CREATE AN ACCOUNT
                    </h2>
                    <h4>
                        We always keep your name and email address private.
                    </h4>
                </div>
                <RegistrationForm onSubmit={handleSubmit}/>
            </div>
            <RegistrationText />
        </div>
    )
};

const mapStateToProps = state => state.auth;

const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clearErrorSignUpAndLogin()),
        loginUser: values => dispatch(authActionRegister(values)),
        authClear: () => dispatch(clearAuth())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);