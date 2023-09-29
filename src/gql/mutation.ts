import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login(
    $username: String!
    $password: String!
    $rememberMe: Boolean!
  ) {
    login(username: $username, password: $password, rememberMe: $rememberMe) {
      __typename
      ... on CurrentUser {
        id
        identifier
        channels {
          id
          token
          code
          permissions
        }
      }
      ... on InvalidCredentialsError {
        errorCode
        message
        authenticationError
      }
      ... on NotVerifiedError {
        errorCode
        message
      }
      ... on NativeAuthStrategyError {
        errorCode
        message
      }
    }
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation {
    logout {
      success
    }
  }
`;

export const VERIFY_CUTOMER_MUTATION = gql`
  mutation VerifyCustomerAccount($token: String!) {
    verifyCustomerAccount(token: $token) {
      __typename
      ... on CurrentUser {
        id
        identifier
        channels {
          id
          token
          code
          permissions
        }
      }
      ... on VerificationTokenInvalidError {
        errorCode
        message
      }
      ... on VerificationTokenExpiredError {
        errorCode
        message
      }
      ... on MissingPasswordError {
        errorCode
        message
      }
      ... on PasswordValidationError {
        errorCode
        message
      }
      ... on PasswordAlreadySetError {
        errorCode
        message
      }
      ... on NativeAuthStrategyError {
        errorCode
        message
      }
    }
  }
`;

export const AUTHENTICATE = gql`
  mutation Authenticate($username: String!, $password: String!) {
    authenticate(
      input: { native: { username: $username, password: $password } }
      rememberMe: true
    ) {
      __typename
      ... on CurrentUser {
        id
        identifier
        channels {
          id
          token
          code
          permissions
        }
      }
      ... on InvalidCredentialsError {
        errorCode
        message
        authenticationError
      }
      ... on NotVerifiedError {
        errorCode
        message
      }
    }
  }
`;
