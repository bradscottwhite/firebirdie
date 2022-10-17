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
          authorId
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
          authorId
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
      color
      following {
        items {
          id
          owner
          userId
          followId
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
        color
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
        color
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
export const getFollow = /* GraphQL */ `
  query GetFollow($id: ID!) {
    getFollow(id: $id) {
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
        color
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      userId
      followId
      createdAt
      updatedAt
      userFollowingId
    }
  }
`;
export const listFollows = /* GraphQL */ `
  query ListFollows(
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollows(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          color
          createdAt
          updatedAt
        }
        userId
        followId
        createdAt
        updatedAt
        userFollowingId
      }
      nextToken
    }
  }
`;
export const listFollowsByUserId = /* GraphQL */ `
  query ListFollowsByUserId(
    $userId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowsByUserId(
      userId: $userId
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
          color
          createdAt
          updatedAt
        }
        userId
        followId
        createdAt
        updatedAt
        userFollowingId
      }
      nextToken
    }
  }
`;
export const listFollowsByFollowId = /* GraphQL */ `
  query ListFollowsByFollowId(
    $followId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowsByFollowId(
      followId: $followId
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
          color
          createdAt
          updatedAt
        }
        userId
        followId
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
        color
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      authorId
      comments {
        items {
          id
          owner
          body
          postTime
          authorId
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
          color
          createdAt
          updatedAt
        }
        authorId
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
export const listPostsByAuthorId = /* GraphQL */ `
  query ListPostsByAuthorId(
    $authorId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostsByAuthorId(
      authorId: $authorId
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
          color
          createdAt
          updatedAt
        }
        authorId
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
          color
          createdAt
          updatedAt
        }
        authorId
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
          authorId
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
          authorId
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
        color
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      authorId
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
          color
          createdAt
          updatedAt
        }
        authorId
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
          color
          createdAt
          updatedAt
        }
        authorId
        post {
          id
          owner
          body
          postTime
          authorId
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
export const listCommentsByAuthorId = /* GraphQL */ `
  query ListCommentsByAuthorId(
    $authorId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentsByAuthorId(
      authorId: $authorId
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
          color
          createdAt
          updatedAt
        }
        authorId
        post {
          id
          owner
          body
          postTime
          authorId
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
          color
          createdAt
          updatedAt
        }
        authorId
        post {
          id
          owner
          body
          postTime
          authorId
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
          color
          createdAt
          updatedAt
        }
        authorId
        post {
          id
          owner
          body
          postTime
          authorId
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
          authorId
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
          authorId
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
