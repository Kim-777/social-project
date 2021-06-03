import React, { useState, useEffect, useRef } from 'react'
import { Form, Button, Message, Segment, Divider } from 'semantic-ui-react';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import { HeaderMessage, FooterMessage } from '../components/Common/WelcomeMessage';
import { loginUser } from '../utils/authUser'
import cookie from 'js-cookie';



const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { email, password } = user;
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [formLoading, setFormLoading] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(true);

    const handleChange = (e) => {
        const {name, value } = e.target;

        setUser(prev => ({
            ...prev,
            [name]: value,
        }))
    };

    useEffect(() => {
        const isUser = Object.values({email, password}).every(item => Boolean(item));
        isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
    }, [user]);

    useEffect(()=> {
        document.title = 'Welcome Back';
        const userEmail = cookie.get('userEmail');
        if(userEmail) setUser(prev => ({
            ...prev,
            email: userEmail,
        }))
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await loginUser(user, setErrorMsg, setFormLoading);
    }

    return (
        <>
            <HeaderMessage />
            <Form
                loading={formLoading}
                error={errorMsg !== null}
                onSubmit={handleSubmit}
            >
                <Message
                    error
                    header="Oops!"
                    content={errorMsg}
                    onDismiss={() => setErrorMsg(null)}
                />
                <Segment>
                    <Form.Input
                        label="Email"
                        placeholder="이메일"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        fluid
                        icon="envelope"
                        iconPosition="left"
                        type="email"
                        required
                    />

                    <Form.Input
                        label="Password"
                        placeholder="비밀번호"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        fluid
                        icon={{
                            name: "eye",
                            circular: true,
                            link: true,
                            onClick:()=>setShowPassword(!showPassword)
                        }}
                        iconPosition="left"
                        type={showPassword? 'text' : 'password'}
                        required
                    />
                    <Divider hidden />
                    <Button 
                        icon="signup"
                        content="로그인하기" 
                        type="submit" 
                        color="instagram" 
                        disabled={submitDisabled} 
                    />                    
                </Segment>
            </Form>
            <FooterMessage />
        </>
    )
}

export default Login;