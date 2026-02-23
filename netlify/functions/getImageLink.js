// netlify/functions/getImageLink.js
export async function handler(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ url: "https://imgur.com/gallery/page-7-erzg6NM" }),
    };
}
