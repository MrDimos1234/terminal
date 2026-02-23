import fetch from "node-fetch";

export async function handler(event, context) {
  const imgUrl = "https://i.imgur.com/page-7-erzg6NM.png"; // your Imgur image

  try {
    const response = await fetch(imgUrl);
    const buffer = await response.arrayBuffer();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400"
      },
      body: Buffer.from(buffer).toString("base64"),
      isBase64Encoded: true
    };
  } catch (err) {
    return { statusCode: 500, body: "Image fetch failed" };
  }
}
