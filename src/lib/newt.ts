import { createClient } from 'newt-client-js'

export interface Article {
  _sys: {
    createdAt: Date
    updateAt: Date
    raw: {
      firstPublishedAt: Date
      publishedAt: Date
    }
  }
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
  author: {
    fullName: string;
    slug: string;
    biography: string;
    profileImage: {
      _id: string;
      src: string;
      width: number;
      height: number;
      title: string;
    };
  };
}
// コンテンツの基本的な型定義
export interface BaseContent {
  _id: string;
  _sys: {
    createdAt: string;
    updatedAt: string;
    raw: {
      createdAt: string;
      updatedAt: string;
      firstPublishedAt: string;
      publishedAt: string;
    };
    status: 'draft' | 'published';
  };
  title?: string;
  [key: string]: any;
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
  header_nav: Array<
  { data: { link_text: string; link_url: string; } }
  >
}

// Newt CDN APIのクライアント（公開コンテンツのみ取得）
export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn',
})

// Newt APIのクライアント（全コンテンツ取得）
const createNewtClient = (preview = false) => {
  return createClient({
    spaceUid: import.meta.env.NEWT_SPACE_UID,
    token: preview ? import.meta.env.NEWT_API_TOKEN : import.meta.env.NEWT_CDN_API_TOKEN,
    apiType: preview ? 'api' : 'cdn',
  });
};

export const getContent = async (params: {
  appUid: string;
  modelUid: string;
  contentId: string;
  preview?: boolean;
}): Promise<BaseContent> => {
  const { appUid, modelUid, contentId, preview = false } = params;
  const client = createNewtClient(preview);

  try {
    const content = await client.getContent({
      appUid,
      modelUid,
      contentId,
    });
    return content as BaseContent;
  } catch (err) {
    console.error('Error fetching content:', err);
    throw err;
  }
};
