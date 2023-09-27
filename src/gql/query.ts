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

export const FEATURED_BANDS_QUERY = gql`
  {
    performers(
      options: { filter: { featured: { eq: true }, type: { eq: "Band" } } }
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

export const FEATURED_EVENTS_QUERY = gql`
  {
    products(
      options: {
        filter: { productType: { eq: "event" }, featured: { eq: true } }
      }
    ) {
      items {
        id
        name
        slug
        description
        featuredAsset {
          id
          source
          mimeType
        }
        variantList(options: {}) {
          items {
            name
            price
            stockLevel
          }
          totalItems
        }
        facetValues {
          id
          name
        }
        customFields {
          dateTime
          featured
          performers {
            name
          }
          productType
          venue
        }
      }
      totalItems
    }
  }
`;
