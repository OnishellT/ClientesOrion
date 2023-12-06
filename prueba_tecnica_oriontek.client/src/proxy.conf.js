const PROXY_CONFIG = [
  {
    context: [
      "/api"  
    ],
    target: "http://localhost:5170",
    secure: false
  }
];

module.exports = PROXY_CONFIG;
