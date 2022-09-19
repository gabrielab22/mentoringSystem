import React, { useState } from 'react';

export default function (props) {
    return (
        <div className="form">
            <div className="form-body">
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input type="email" id="email" className="form__input" placeholder="Email" />
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password" id="password" placeholder="Password" />
                </div>
                <div className="role">
                    <label className="form__label" for="confirmPassword">Role </label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="mentor/student" />
                </div>
                <div className="status">
                    <label className="form__label" for="confirmPassword">Status </label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="none/redovni/izvanredni" />
                </div>
            </div>
            <div class="footer">
                <button type="submit" className="btn btn-primary">Register</button>
            </div>
        </div>
    )
}

