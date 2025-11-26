/**
 * Strapi API Helper Functions
 * 
 * This module provides utility functions for fetching data from the Strapi CMS.
 * It handles API requests, error handling, and data formatting.
 */

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://strapi-production-dbea.up.railway.app/api';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

// Type for Strapi query parameters
type StrapiQueryParams = Record<string, string | number | boolean | object | Array<string | number | boolean | object>>;

/**
 * Generic fetch function for Strapi API
 */
async function fetchAPI(
  path: string,
  options: RequestInit = {},
  urlParamsObject: StrapiQueryParams = {}
) {
  // Merge default and user options
  const mergedOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(STRAPI_API_TOKEN && { Authorization: `Bearer ${STRAPI_API_TOKEN}` }),
    },
    ...options,
  };

  // Build request URL with proper query parameter encoding
  let queryString = '';
  if (Object.keys(urlParamsObject).length > 0) {
    // Convert nested objects to query string format
    const params = new URLSearchParams();
    Object.entries(urlParamsObject).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        params.append(key, JSON.stringify(value));
      } else {
        params.append(key, String(value));
      }
    });
    queryString = params.toString();
  }
  
  const requestUrl = queryString 
    ? `${STRAPI_API_URL}${path}?${queryString}`
    : `${STRAPI_API_URL}${path}`;

  try {
    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      console.error(`Strapi API error: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch from Strapi: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    throw error;
  }
}

/**
 * Fetch the home page content
 */
export async function getHomePage() {
  try {
    const data = await fetchAPI('/pages?filters[slug][$eq]=home&populate=*');
    return data.data?.[0];
  } catch (error) {
    console.error('Error fetching home page:', error);
    // Return null gracefully - fallback content will be used
    return null;
  }
}

/**
 * Fetch all use cases (People, Athletes, Pets) - now using sections
 */
export async function getUseCases() {
  try {
    const data = await fetchAPI('/sections?populate=subsections&sort=title:asc');
    return data.data || [];
  } catch (error) {
    console.error('Error fetching use cases:', error);
    // Return empty array - fallback content will be used
    return [];
  }
}

/**
 * Fetch a single use case by slug (section)
 */
export async function getUseCaseBySlug(slug: string) {
  try {
    const data = await fetchAPI(`/sections?filters[slug][$eq]=${slug}&populate=subsections`);
    return data.data?.[0] || null;
  } catch (error) {
    console.error(`Error fetching use case ${slug}:`, error);
    // Return null gracefully
    return null;
  }
}

/**
 * Fetch a single sub-category by slug (subsection)
 */
export async function getSubCategoryBySlug(slug: string) {
  try {
    const data = await fetchAPI(`/subsections?filters[slug][$eq]=${slug}&populate=*`);
    return data.data?.[0] || null;
  } catch (error) {
    console.error(`Error fetching sub-category ${slug}:`, error);
    // Return null gracefully
    return null;
  }
}

/**
 * Fetch all features
 */
export async function getFeatures() {
  try {
    const data = await fetchAPI('/features', {}, {
      populate: '*',
      sort: 'order:asc',
    });
    return data.data;
  } catch (error) {
    console.error('Error fetching features:', error);
    return [];
  }
}

/**
 * Fetch features for a specific category
 */
export async function getFeaturesByCategory(categoryId: number) {
  try {
    const data = await fetchAPI('/features', {}, {
      filters: {
        category: {
          id: {
            $eq: categoryId,
          },
        },
      },
      populate: '*',
      sort: 'order:asc',
    });
    return data.data;
  } catch (error) {
    console.error(`Error fetching features for category ${categoryId}:`, error);
    return [];
  }
}

// Type definitions for better TypeScript support
export interface StrapiImage {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    url: string;
  };
}

export interface StrapiData<T> {
  id: number;
  attributes: T;
}

export interface HomePageData {
  hero_title: string;
  hero_subtitle: string;
  canva_embed_url?: string;
  challenge_title: string;
  challenge_subtitle?: string;
  solution_title: string;
  solution_subtitle?: string;
  how_it_works_title: string;
}

export interface FeatureData {
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface UseCaseData {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  content?: string;
  subsections?: SubCategoryData[];
}

export interface SubCategoryData {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description?: string;
  content?: string;
}
