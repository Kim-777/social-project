import React from 'react';
import axios from 'axios';

function Index({ posts }) {
    return (
        <div>
            { posts && posts.length > 0 && posts.map(post => <h1 key={post.id}>{post.title}</h1>)}
        </div>
    )
}


Index.getInitialProps = async ctx => {
    try {
        console.log('getInitialProps');
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // console.log(res.data);

        const { name } = ctx.query;
        console.log(name);

        return { posts: res.data };
        
    } catch (error) {
        console.log('getInitialProps error')
        return {errorLoading: true};
    }

}

export default Index;
