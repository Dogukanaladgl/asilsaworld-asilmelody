import {
  fallbackDeliveryPosts,
  type DeliveryPost,
} from "@/lib/deliveries";

type InstagramMedia = {
  id: string;
  caption?: string;
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  timestamp?: string;
};

type InstagramMediaResponse = {
  data?: InstagramMedia[];
  error?: { message?: string };
};

const FIELDS =
  "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp";
const LIMIT = 6;
const REVALIDATE_SECONDS = 60 * 60; // 1 hour

function pickImage(item: InstagramMedia) {
  if (item.media_type === "VIDEO" || item.media_type === "REELS") {
    return item.thumbnail_url || item.media_url;
  }
  return item.media_url || item.thumbnail_url;
}

function toDeliveryPost(item: InstagramMedia): DeliveryPost | null {
  const image = pickImage(item);
  if (!image) return null;
  const caption = item.caption?.trim();
  return {
    id: item.id,
    image,
    alt: caption
      ? caption.slice(0, 120)
      : "Asil's a World Instagram gönderisi",
    href: item.permalink,
  };
}

/**
 * Live Instagram posts via Instagram Graph API.
 *
 * Setup (Business / Creator account):
 * 1. Meta Developer → App → Instagram product
 * 2. Generate a long-lived access token
 * 3. Set INSTAGRAM_ACCESS_TOKEN in `.env.local`
 * 4. Optional: INSTAGRAM_USER_ID (defaults to `/me`)
 *
 * Docs: https://developers.facebook.com/docs/instagram-platform/
 */
export async function getDeliveryPosts(): Promise<DeliveryPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN?.trim();
  if (!token) return fallbackDeliveryPosts;

  const userId = process.env.INSTAGRAM_USER_ID?.trim();
  const path = userId ? `${userId}/media` : "me/media";
  const url = new URL(`https://graph.instagram.com/${path}`);
  url.searchParams.set("fields", FIELDS);
  url.searchParams.set("limit", String(LIMIT));
  url.searchParams.set("access_token", token);

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    const json = (await res.json()) as InstagramMediaResponse;

    if (!res.ok || json.error) {
      console.error(
        "[instagram]",
        json.error?.message ?? `HTTP ${res.status}`,
      );
      return fallbackDeliveryPosts;
    }

    const posts = (json.data ?? [])
      .map(toDeliveryPost)
      .filter((p): p is DeliveryPost => p != null)
      .slice(0, LIMIT);

    return posts.length > 0 ? posts : fallbackDeliveryPosts;
  } catch (err) {
    console.error("[instagram] fetch failed", err);
    return fallbackDeliveryPosts;
  }
}
