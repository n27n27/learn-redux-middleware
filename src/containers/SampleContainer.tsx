import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Sample from '../components/Sample'
import { getPost, getUsers } from '../modules/sample';

type sampleContainerProps = {
    getPost: any,
    getUsers: any,
    post: any,
    users: any,
    loadingPost: any,
    loadingUsers: any
}

const SampleContainer = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
}: sampleContainerProps) => {
    useEffect(() => {
        const fn = async () => {
            try {
                await getPost(1);
                await getUsers();
            } catch(e) {
                console.log(e)
            }
        };
        fn();        
        
    },[getPost, getUsers]);

    return(
        <Sample
            post={post}
            users={users}
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
        />
    );
};

export default connect(
    ({ sample, loading }: { sample: any, loading: any }) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: loading['sample/GET_POST'],
        loadingUsers: loading['sample/GET_USERS']
    }),
    {
        getPost,
        getUsers
    }
)(SampleContainer);