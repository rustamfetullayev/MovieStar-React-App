import React, { useCallback } from 'react';
import './Register.css';
import MainTheme from '../../containers/Theme/MainTheme/MainTheme';
import base from '../../containers/Base/Base';

const Register = ({ history }) => {
    const handleRegister = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await base.auth().createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        }
        catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <React.Fragment>
            <MainTheme title='Sign up' subtitle='To our website' />

            <section id="signup">
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="col-md-12 d-flex justify-content-center">
                            <form onSubmit={handleRegister}>

                                <div className="form-group">
                                    <div className="col-md-12 d-flex justify-content-center">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-12 d-flex justify-content-center">
                                        <input type="email" name="email" placeholder="Enter your email..." required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12 d-flex justify-content-center">
                                        <label>Password</label>
                                    </div>
                                    <div className="col-md-12 d-flex justify-content-center">
                                        <input type="password" name="password" placeholder="Enter your password..." required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12 d-flex justify-content-center">
                                        <input className="submit" type="submit" value="Register" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Register;