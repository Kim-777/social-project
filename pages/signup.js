import React, { useState, useEffect, useRef } from "react";
import {
    Form,
    Button,
    Message,
    Segment,
    TextArea,
    Divider,
} from "semantic-ui-react";
import CommonInputs from '../components/Common/CommonInput';
import ImageDropDiv from '../components/Common/ImageDropDiv';
import {
    HeaderMessage,
    FooterMessage,
} from "../components/Common/WelcomeMessage";

export const regexUserName = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;;

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        bio: "",
        facebook: "",
        youtube: "",
        twitter: "",
        instagram: "",
    });

    const { name, email, password, bio } = user;

    const [showSocialLinks, setShowSocialLinks] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [formLoading, setFormLoading] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(true);


    const [username, setUsername] = useState("");
    const [usernameLoading, setUsernameLoading] = useState(false);
    const [usernameAvailable, setUsernameAvailable] = useState(false);

    const [media, setMedia] = useState(null);
    const [mediaPreview, setMediaPreview] = useState(null);
    const [highlighted, setHighlighted] = useState(false);


    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        const isUser = Object.values({name, email, password, bio}).every(item => Boolean(item));
        if(isUser) {
            setSubmitDisabled(false);
        } else {
            setSubmitDisabled(true);
        }
    }, [user])

    const handleChange = (e) => {
        const {name, value, files } = e.target;

        if(name === 'media') {
            setMedia(files[0]);
            setMediaPreview(URL.createObjectURL(files[0]));
        }

        setUser(prev => ({
            ...prev,
            [name]: value,
        }))
    };

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
                    <ImageDropDiv 
                        mediaPreview={mediaPreview}
                        setMediaPreview={setMediaPreview}
                        setMedia={setMedia}
                        inputRef={inputRef}
                        highlighted={highlighted}
                        setHighlighted={setHighlighted}
                        handleChange={handleChange}
                    />
                    <Form.Input
                        label="Name"
                        placeholder="이름"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        fluid
                        icon="user"
                        iconPosition="left"
                        required
                    />

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

                    <Form.Input
                        loading={usernameLoading}
                        error={!usernameAvailable}
                        label="Username"
                        placeholder="유저네임(한글, 영어, 숫자만 입력)"
                        value={username}
                        onChange={e => {
                            setUsername(e.target.value);
                            if(regexUserName.test(e.target.value)) {
                                setUsernameAvailable(true);
                            } else {
                                setUsernameAvailable(false);
                            }
                        }}
                        fluid
                        icon={usernameAvailable?"check":"close"}
                        iconPosition="left"
                        required
                    />

                    <CommonInputs 
                        user={user} 
                        showSocialLinks={showSocialLinks}
                        setShowSocialLinks={setShowSocialLinks}
                        handleChange={handleChange}
                    />

                    <Divider hidden />
                    <Button
                        icon="signup" 
                        content="가입하기" 
                        type="submit" 
                        color="instagram" 
                        disabled={submitDisabled || !usernameAvailable} 
                    />

                </Segment>
            </Form>
            <FooterMessage />
        </>
    );
};

export default Signup;
