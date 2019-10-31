import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
    render() {
        return (
            <section id="comments">
                <div className="container">
                    <div className="row mt-5 pt-3">

                        <div className="col-md-7 mb-5">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="header">
                                        <h3>COMMENTS</h3>
                                    </div>
                                </div>
                                <div className="col-md-12 all_comments">
                                    <div className="row">
                                        <div className="col-dm-12 mt-3">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <img className="usr_img" src={require('../../assets/images/film-slide.jpg')} alt="" />
                                                </div>
                                                <div className="col-md-10">
                                                    <div className="text">
                                                        <p className="date">February 2, at 2:34pm</p>
                                                        <p className="name">Luke Barrett</p>
                                                        <p className="content">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium
                                                            lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum
                                                            claram, anteposuerit litterarum formas humanitatis per seacula quarta
                                                                decima et quinta decima.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 offset-md-1">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="header">
                                        <h3>Leave a comment</h3>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-5">
                                    <div className="comment_text">
                                        <p>Comment *</p>
                                        <textarea name="" id="" cols="40" rows="7" required></textarea>
                                        <input type="button" value="POST COMMENT" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Comment;