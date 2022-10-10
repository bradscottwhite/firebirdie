/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      owner
      username
      name
      avatar
      bio
      posts {
        items {
          id
          owner
          body
          postTime
          createdAt
          updatedAt
          userPostsId
        }
        nextToken
      }
      comments {
        items {
          id
          owner
          body
          postTime
          postId
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
        }
        nextToken
      }
      postLikes {
        items {
          id
          owner
          postId
          createdAt
          updatedAt
          userPostLikesId
          postLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      owner
      username
      name
      avatar
      bio
      posts {
        items {
          id
          owner
          body
          postTime
          createdAt
          updatedAt
          userPostsId
        }
        nextToken
      }
      comments {
        items {
          id
          owner
          body
          postTime
          postId
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
        }
        nextToken
      }
      postLikes {
        items {
          id
          owner
          postId
          createdAt
          updatedAt
          userPostLikesId
          postLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      owner
      username
      name
      avatar
      bio
      posts {
        items {
          id
          owner
          body
          postTime
          createdAt
          updatedAt
          userPostsId
        }
        nextToken
      }
      comments {
        items {
          id
          owner
          body
          postTime
          postId
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
        }
        nextToken
      }
      postLikes {
        items {
          id
          owner
          postId
          createdAt
          updatedAt
          userPostLikesId
          postLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
      id
      owner
      body
      postTime
      author {
        id
        owner
        username
        name
        avatar
        bio
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        postLikes {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          owner
          body
          postTime
          postId
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
        }
        nextToken
      }
      likes {
        items {
          id
          owner
          postId
          createdAt
          updatedAt
          userPostLikesId
          postLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
      id
      owner
      body
      postTime
      author {
        id
        owner
        username
        name
        avatar
        bio
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        postLikes {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          owner
          body
          postTime
          postId
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
        }
        nextToken
      }
      likes {
        items {
          id
          owner
          postId
          createdAt
          updatedAt
          userPostLikesId
          postLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
      id
      owner
      body
      postTime
      author {
        id
        owner
        username
        name
        avatar
        bio
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        postLikes {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          owner
          body
          postTime
          postId
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
        }
        nextToken
      }
      likes {
        items {
          id
          owner
          postId
          createdAt
          updatedAt
          userPostLikesId
          postLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
export const onCreatePostLike = /* GraphQL */ `
  subscription OnCreatePostLike($owner: String) {
    onCreatePostLike(owner: $owner) {
      id
      owner
      postId
      post {
        id
        owner
        body
        postTime
        author {
          id
          owner
          username
          name
          avatar
          bio
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      createdAt
      updatedAt
      userPostLikesId
      postLikesId
    }
  }
`;
export const onUpdatePostLike = /* GraphQL */ `
  subscription OnUpdatePostLike($owner: String) {
    onUpdatePostLike(owner: $owner) {
      id
      owner
      postId
      post {
        id
        owner
        body
        postTime
        author {
          id
          owner
          username
          name
          avatar
          bio
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      createdAt
      updatedAt
      userPostLikesId
      postLikesId
    }
  }
`;
export const onDeletePostLike = /* GraphQL */ `
  subscription OnDeletePostLike($owner: String) {
    onDeletePostLike(owner: $owner) {
      id
      owner
      postId
      post {
        id
        owner
        body
        postTime
        author {
          id
          owner
          username
          name
          avatar
          bio
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      createdAt
      updatedAt
      userPostLikesId
      postLikesId
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
      id
      owner
      body
      postTime
      author {
        id
        owner
        username
        name
        avatar
        bio
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        postLikes {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        owner
        body
        postTime
        author {
          id
          owner
          username
          name
          avatar
          bio
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      postId
      createdAt
      updatedAt
      userCommentsId
      postCommentsId
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
      id
      owner
      body
      postTime
      author {
        id
        owner
        username
        name
        avatar
        bio
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        postLikes {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        owner
        body
        postTime
        author {
          id
          owner
          username
          name
          avatar
          bio
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      postId
      createdAt
      updatedAt
      userCommentsId
      postCommentsId
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
      id
      owner
      body
      postTime
      author {
        id
        owner
        username
        name
        avatar
        bio
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        postLikes {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        owner
        body
        postTime
        author {
          id
          owner
          username
          name
          avatar
          bio
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      postId
      createdAt
      updatedAt
      userCommentsId
      postCommentsId
    }
  }
`;
