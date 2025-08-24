// CORS Configuration
const corsOptions = {
    development: {
        origin: ['http://localhost:3000', 'http://localhost:3001'],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    },
    production: {
        origin: [
            'http://localhost:3000', // For testing
            // Add your production frontend domains here:
            // 'https://your-frontend-app.vercel.app',
            // 'https://your-frontend-app.netlify.app'
        ],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
};

const getCorsOptions = () => {
    const env = process.env.NODE_ENV || 'development';
    return corsOptions[env] || corsOptions.development;
};

module.exports = { getCorsOptions, corsOptions };
