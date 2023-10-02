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

export const PERFORMERS_BY_TYPE_QUERY = gql`
  query Performers($skip: Int, $take: Int, $type: String) {
    performers(
      # options: { filter: { type: { eq: $type } }, skip: $skip, take: $take }
      options: { type: $type, skip: $skip, take: $take }
    ) {
      id
      name
      type
      createdAt
      updatedAt
      deletedAt
      description
      rating
      featured
      products {
        id
        createdAt
        updatedAt
        languageCode
        name
        slug
        description
        customFields {
          dateTime
          featured
          productType
          venue
        }
      }
    }
  }
`;

export const EVENTS_BY_TYPE_QUERY = gql`
  query Products($skip: Int, $take: Int, $type: String) {
    products(
      options: {
        filter: { productType: { eq: $type } }
        skip: $skip
        take: $take
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

export const FEATURED_ARTISTS_QUERY = gql`
  {
    performers(options: { type: "Artist", featured: true }) {
      id
      name
      type
      createdAt
      updatedAt
      deletedAt
      description
      rating
      featured
      products {
        id
        createdAt
        updatedAt
        languageCode
        name
        slug
        description
        customFields {
          dateTime
          featured
          productType
          venue
        }
      }
    }
  }
`;

export const FEATURED_BANDS_QUERY = gql`
  {
    performers(options: { type: "Band", featured: true }) {
      id
      name
      type
      createdAt
      updatedAt
      deletedAt
      description
      rating
      featured
      products {
        id
        createdAt
        updatedAt
        languageCode
        name
        slug
        description
        customFields {
          dateTime
          featured
          productType
          venue
        }
      }
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

export const ACTIVE_CHANNEL = gql`
  {
    activeChannel {
      code
      token
    }
  }
`;

export const ACTIVE_CUSTOMER = gql`
  {
    activeCustomer {
      id
      firstName
      lastName
      emailAddress
    }
  }
`;

export const ACTIVE_ORDER = gql`
  {
    activeOrder {
      id
    }
  }
`;

export const PERFORMER_BY_ID = gql`
  query Performer($id: ID!) {
    performer(id: $id) {
      id
      name
      type
      createdAt
      updatedAt
      deletedAt
      description
      rating
      featured
      products {
        id
        createdAt
        updatedAt
        languageCode
        name
        slug
        description
        customFields {
          dateTime
          featured
          productType
          venue
        }
      }
    }
  }
`;
