import fetch from 'node-fetch';  // only in function, never in front-end

export async function handler(event, context) {
    // Return your hidden Imgur link
    return {
        statusCode: 200,
        body: JSON.stringify({ url: "https://imgur.com/gallery/page-7-erzg6NM" }),
    };
}
