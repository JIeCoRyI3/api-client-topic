import { useState } from 'react';
import API from './api/apiClient';
import './App.css';
import Endpoint from './Endpoint';

function App() {
  const [post, setPost] = useState();
  const [addedPost, setAddedPost] = useState();
  const [deletedPost, setDeletedPost] = useState();
  const [updatedPost, setUpdatedPost] = useState();
  const [comments, setComments] = useState();
  const [users, setUsers] = useState();

  const getPost = () => {
      API.getPost(1).then(body => {
        setPost(JSON.stringify(body));
      })
  }

  const postPost = () => {
    const data = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    API.postPost(data).then(body => {
      setAddedPost(JSON.stringify(body));
    })
  }

  const deletePost = () => {
    API.getPost(1).then(body => {
      setDeletedPost(JSON.stringify(body));
    })
  } 

  const updatePost = () => {
    const data = {
      title: 'foo2',
    };

    API.updatePost(1, data).then(body => {
      setUpdatedPost(JSON.stringify(body));
    })
  } 

  const getComments = () => {
    API.getComments().then(body => {
      setComments(JSON.stringify(body));
    })
  } 

  const getUsers = () => {
    API.getUsers().then(body => {
      setUsers(JSON.stringify(body));
    })
  } 

  return (
    <div className="App">
        <div className="dashboard">
            <h1>Check endpoints</h1>
            <Endpoint onClick={getPost} data={post} endpoint={"GET /posts/1"}/>
            <Endpoint onClick={postPost} data={addedPost} endpoint={"POST /posts/1"}/>
            <Endpoint onClick={deletePost} data={deletedPost} endpoint={"DELETE /posts/1"}/>
            <Endpoint onClick={updatePost} data={updatedPost} endpoint={"PATCH /posts/1"}/>
            <Endpoint onClick={getComments} data={comments} endpoint={"GET /comments/"}/>
            <Endpoint onClick={getUsers} data={users} endpoint={"GET /users/"}/>
        </div>
    </div>
  );
}

export default App;
