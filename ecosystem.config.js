module.exports = {
  apps: [
    {
      name: "sentaly-web",
      script: "./server.js",
      watch: true,
      env: {
        "PORT": 8080,
        "NODE_ENV": "productions",
        "API_URL": "http://api.sentaly.com/"
      }
    }
  ]
}