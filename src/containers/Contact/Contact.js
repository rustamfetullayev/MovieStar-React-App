import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center pb-5 pt-5">
                            <div className="inner">
                                <p>Need help? Contact our support team on</p>
                                <h4>055-822-48-15</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;