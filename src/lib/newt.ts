import { createClient } from 'newt-client-js'

export interface Article {
  title: string
  slug: string
  meta: {
    title: string
    description: string
  }
  body: string
  coverImage: {
    src: string
    width: number
    height: number
    altText: string
  }
  tags: Array<{
    name: string
    slug: string
  }>
}
export interface Tag {
  name: string
  slug: string
}
export interface Navigation {
  nav_text: string
  header_logo: {
    src: string;
    width: number;
    height: number;
    altText: string;
  };
  header_nav: {
    header_nav: Array<
    { data: { link_text: string; link_url: string; } }
    >
  }
}

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn',
})
