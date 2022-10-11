/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
      following {
        items {
          id
          owner
          followingId
          createdAt
          updatedAt
          userFollowingId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserByOwner = /* GraphQL */ `
  query GetUserByOwner(
    $owner: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserByUsername = /* GraphQL */ `
  query GetUserByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollowing = /* GraphQL */ `
  query GetFollowing($id: ID!) {
    getFollowing(id: $id) {
      id
      owner
      user {
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
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      followingId
      createdAt
      updatedAt
      userFollowingId
    }
  }
`;
export const listFollowings = /* GraphQL */ `
  query ListFollowings(
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        user {
          id
          owner
          username
          name
          avatar
          bio
          createdAt
          updatedAt
        }
        followingId
        createdAt
        updatedAt
        userFollowingId
      }
      nextToken
    }
  }
`;
export const listFollowingByFollowingId = /* GraphQL */ `
  query ListFollowingByFollowingId(
    $followingId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowingByFollowingId(
      followingId: $followingId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        user {
          id
          owner
          username
          name
          avatar
          bio
          createdAt
          updatedAt
        }
        followingId
        createdAt
        updatedAt
        userFollowingId
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
        following {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPostLike = /* GraphQL */ `
  query GetPostLike($id: ID!) {
    getPostLike(id: $id) {
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
export const listPostLikes = /* GraphQL */ `
  query ListPostLikes(
    $filter: ModelPostLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        postId
        post {
          id
          owner
          body
          postTime
          createdAt
          updatedAt
          userPostsId
        }
        createdAt
        updatedAt
        userPostLikesId
        postLikesId
      }
      nextToken
    }
  }
`;
export const listPostLikesByPostId = /* GraphQL */ `
  query ListPostLikesByPostId(
    $postId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostLikesByPostId(
      postId: $postId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        postId
        post {
          id
          owner
          body
          postTime
          createdAt
          updatedAt
          userPostsId
        }
        createdAt
        updatedAt
        userPostLikesId
        postLikesId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
        following {
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
      likes {
        items {
          id
          owner
          commentId
          createdAt
          updatedAt
          commentLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userCommentsId
      postCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        post {
          id
          owner
          body
          postTime
          createdAt
          updatedAt
          userPostsId
        }
        postId
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userCommentsId
        postCommentsId
      }
      nextToken
    }
  }
`;
export const listCommentsByPostId = /* GraphQL */ `
  query ListCommentsByPostId(
    $postId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentsByPostId(
      postId: $postId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        post {
          id
          owner
          body
          postTime
          createdAt
          updatedAt
          userPostsId
        }
        postId
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userCommentsId
        postCommentsId
      }
      nextToken
    }
  }
`;
export const getCommentLike = /* GraphQL */ `
  query GetCommentLike($id: ID!) {
    getCommentLike(id: $id) {
      id
      owner
      commentId
      comment {
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
        post {
          id
          owner
          body
          postTime
          createdAt
          updatedAt
          userPostsId
        }
        postId
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userCommentsId
        postCommentsId
      }
      createdAt
      updatedAt
      commentLikesId
    }
  }
`;
export const listCommentLikes = /* GraphQL */ `
  query ListCommentLikes(
    $filter: ModelCommentLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        commentId
        comment {
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
        createdAt
        updatedAt
        commentLikesId
      }
      nextToken
    }
  }
`;
export const listCommentLikesByCommentId = /* GraphQL */ `
  query ListCommentLikesByCommentId(
    $commentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentLikesByCommentId(
      commentId: $commentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        commentId
        comment {
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
        createdAt
        updatedAt
        commentLikesId
      }
      nextToken
    }
  }
`;
