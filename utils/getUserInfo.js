import axios from 'axios';
import baseUrl from './baseUrl';
import cookie from 'js-cookie';

const getUserInfo = async (userToFindId) => {

    try {

        const res = await axios.get(`${baseUrl}/api/chats/user/${userToFindId}`, {
            headers: { Authorization: cookie.get('token')}
        });

        // console.log('getUserInfo res.data', res.data)
        // const {name, profilePicUrl} = res.data;

        return {name: res.data.name, profilePicUrl: res.data.profilePicUrl}

    } catch (error) {
        alert('Error looking for user');
    }

}

export default getUserInfo;