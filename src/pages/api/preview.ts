import type { APIRoute } from 'astro';
import { newtClient } from '../../lib/newt';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const _id = url.searchParams.get('_id');
  const modelName = url.searchParams.get('model');
  const secret = url.searchParams.get('secret');

  if (!_id || !modelName || !secret) {
    return new Response('Invalid parameters', { status: 400 });
  }

  if (secret !== import.meta.env.NEWT_PREVIEW_SECRET) {
    return new Response('Invalid secret', { status: 401 });
  }

  try {
    const content = await newtClient.getContent({
      appUid: import.meta.env.NEWT_APP_UID,
      modelUid: modelName,
      contentId: _id,
      draft: true,
    });

    return new Response(JSON.stringify(content), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    return new Response('Error fetching content', { status: 500 });
  }
}
