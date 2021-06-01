import React from 'react';
import { Form, Button, Message, Segment, TextArea, Divider } from 'semantic-ui-react';

function CommonInputs(
    { user:{bio, facebook, instagram, youtube, twitter}, 
    handleChange,
    showSocialLinks,
    setShowSocialLinks,
    }
) {
    return (
        <>
            <Form.Field
                required
                control={TextArea}
                name="bio"
                value={bio}
                onChange={handleChange}
                placeholder="bio"
            />

            <Button 
                content="소셜 추가하기" 
                color="linkedin" 
                icon="at"
                type="button"
                onClick={() => {
                    setShowSocialLinks(!showSocialLinks)
                }}    
            />

            {showSocialLinks && <>
                <Divider />
                <Form.Input 
                    icon="facebook f"
                    iconPosition="left"
                    name="facebook"
                    value={facebook}
                    onChange={handleChange}
                />  
                <Form.Input 
                    icon="twitter"
                    iconPosition="left"
                    name="twitter"
                    value={twitter}
                    onChange={handleChange}
                />
                <Form.Input 
                    icon="instagram"
                    iconPosition="left"
                    name="instagram"
                    value={instagram}
                    onChange={handleChange}
                />
                <Form.Input 
                    icon="youtube"
                    iconPosition="left"
                    name="youtube"
                    value={youtube}
                    onChange={handleChange}
                />
                
                <Message 
                    icon="attention" 
                    info 
                    size="small"
                    header="소셜 미디어를 링크 걸기"
                />
            </>
            }
        </>
    )
}

export default CommonInputs;