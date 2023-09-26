import { gql } from "@apollo/client";

export const ARTIST_QUERY = gql`
  {
    performer(id: 2) {
      id
      name
      type
      createdAt
      updatedAt
      deletedAt
      description
      rating
    }
  }
`;

export const FEATURED_ARTISTS_QUERY = gql`
  {
    performers(
      options: { filter: { featured: { eq: true }, type: { eq: "Artist" } } }
    ) {
      items {
        id
        name
        type
        createdAt
        updatedAt
        deletedAt
        description
        rating
        featured
      }
      totalItems
    }
  }
`;
