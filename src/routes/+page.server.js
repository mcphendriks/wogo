import { error } from '@sveltejs/kit'
import contentfulFetch from '../api/contentful-fetch'


const query = `
  {
      landingPageCollection(limit: 5) {
        items {
          sectionCollection {
            items {
              ... on HeroBanner {
                headline
                bodyText
                buttonText
                backgroundAsset {
                  url
                  title
                }
              }
              ... on Carrousel {
                carrouselCollection(limit: 5) {
                  items {
                    ... on CardComponent {
                      title
                      cardNumber
                      price
                      description
                      locationDescription
                      buttonText
                      icon {
                        title
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }  
`;

  export async function load() {
    const response = await contentfulFetch(query)
  
    if (!response.ok) {
      throw error(response.status, {
        message: response.statusText,
      })
    }
    const { data } = await response.json()
    const { items } = data.landingPageCollection

    return {
       landingPage: items 
    };
  }