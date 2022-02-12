module.exports = {
  apps : [{
    name: 'nextjs',
    script: './server.js',
    watch: false,
    namespace: 'nextjs',
    env: {
      PORT: 4050,
      NODE_ENV: 'development'
    },
    env_pro: {
      PORT: 4100,
      NODE_ENV: 'production'
    }
  }],
};
