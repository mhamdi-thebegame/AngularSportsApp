module.exports = {
  apps: [
    {
      name: 'AngularSportsApp', // Name of your application
      script: 'npm',            // Use npm as the script runner
      args: 'start',            // Run `npm start`
      cwd: '/root/code/AngularSportsApp', // Working directory
      interpreter: '/root/.nvm/versions/node/v20.18.2/bin/node', // Path to Node.js binary
      env: {
        NODE_ENV: 'development', // Environment variables
      },
      autorestart: true,         // Automatically restart on failure
      watch: false,              // Disable file watching
      max_memory_restart: '1G',  // Restart if memory exceeds 1GB
    },
  ],
};
