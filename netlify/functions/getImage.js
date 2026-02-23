// netlify/functions/getImage.js
exports.handler = async function(event, context) {
  // encrypted URL (Base64)
  const encrypted = "aHR0cHM6Ly9pbWd1ci5jb20vZ2FsbGVyeS9wYWdlLTctZXJ6ZzZOTQ==";
  
  // decode
  const decoded = Buffer.from(encrypted, 'base64').toString('utf-8');
  
  return {
    statusCode: 200,
    body: JSON.stringify({ url: decoded })
  };
};
