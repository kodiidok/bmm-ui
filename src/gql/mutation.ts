import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
    mutation Login($username: String!, $password: String!, $rememberMe: Boolean!) {
        login(username: $username, password: $password, rememberMe: $rememberMe) {
            ... on CurrentUser {
                id
            }
            __typename
        }
    }
`;