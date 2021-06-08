import React, { useEffect, useState, useRef } from "react";
import io from 'socket.io-client';
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import CreatePost from "../components/Post/CreatePost";
import CardPost from "../components/Post/CardPost";
import { Segment } from "semantic-ui-react";
import { parseCookies } from "nookies";
import { NoPosts } from "../components/Layout/NoData";
import { PostDeleteToastr } from '../components/Layout/Toastr';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PlaceHolderPosts, EndMessage } from '../components/Layout/PlaceHolderGroup';
import cookie from 'js-cookie';
import getUserInfo from '../utils/getUserInfo';
import MessageNotificationModal from '../components/Home/MessageNotificationModal';
import newMsgSound from '../utils/newMsgSound';


function Index({ user, postsData, errorLoading }) {
    const [posts, setPosts] = useState(postsData || []);
    const [showToastr, setShowToastr] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const [pageNumber, setPageNumber] = useState(2);
    // console.log({user, userFollowStats});

    const socket = useRef();

    const [newMessageReceived, setNewMessageReceived] = useState(null);
    const [newMessageModal, setNewMessageModal] = useState(false);

    useEffect(() => {

        if(!socket.current) {
            socket.current = io(baseUrl);
        }

        if(socket.current) {
            socket.current.emit("join", {userId: user._id});

            socket.current.on('newMsgReceived', async ({newMsg}) => {

                const { name, profilePicUrl } = await getUserInfo(newMsg.sender);
                // console.log('name', name);
                // console.log('profilePicUrl', profilePicUrl);
                // console.log('user.newMessagePopup', user.newMessagePopup)

                if(user.newMessagePopup) {
                    setNewMessageReceived({...newMsg, senderName: name, senderProfilePic: profilePicUrl});
                    setNewMessageModal(true);
                }

                newMsgSound(name);
            })
        }

        document.title = `Welcome, ${user.name.split(" ")[0]}`;

        return () => {
            if(socket.current) {
                socket.current.emit('disconnect');
                socket.current.off();
            }
        }
    }, []);

    useEffect(() => {
        showToastr && setTimeout(() => {
            setShowToastr(false)
        }, 3000)
    }, [showToastr])

    // useEffect(() => {
    //     console.log('postsData', postsData)
    // }, [postsData])

    const fetchDataOnScroll = async () => {
        try {
            const res = await axios.get(`${baseUrl}/api/posts`, {
                headers: {Authorization: cookie.get('token')},
                params: { pageNumber }
            });

            if(res.data.length === 0) setHasMore(false);

            setPosts(prev => [...prev, ...res.data]);
            setPageNumber(prev => prev + 1);
        } catch (error) {
            console.log(`Error fetching Posts`)
        } 
    };



    return (
        <>
            {showToastr && <PostDeleteToastr />}

            {newMessageModal && newMessageReceived !== null && (
                <MessageNotificationModal 
                    socket={socket} 
                    setNewMessageModal={setNewMessageModal}
                    newMessageModal={newMessageModal}
                    newMessageReceived={newMessageReceived}
                    user={user}
                />
            )} 
            <Segment>
                <CreatePost user={user} setPosts={setPosts} />
                {posts.length === 0 || errorLoading ? <NoPosts /> : (
                    <InfiniteScroll
                        hasMore={hasMore}
                        next={fetchDataOnScroll}
                        loader={<PlaceHolderPosts />}
                        endMessage={<EndMessage />}
                        dataLength={posts.length}
                    >
                        {posts.map((post) => (
                            <CardPost
                                key={post._id}
                                post={post}
                                user={user}
                                setPosts={setPosts}
                                setShowToastr={setShowToastr}
                            />
                        ))}
                    </InfiniteScroll>
                )}

            </Segment>
        </>
    );
}

Index.getInitialProps = async (ctx) => {
    try {
        const { token } = parseCookies(ctx);

        const res = await axios.get(`${baseUrl}/api/posts`, {
            headers: { Authorization: token },
            params: { pageNumber: 1}
        });

        // console.log(res.data);

        return { postsData: res.data };
    } catch (error) {
        return { errorLoading: true };
    }
};

export default Index;
