import { config } from 'dotenv';

// Initialize dotenv
config();

const envVariables = {
    port: process.env.PORT || 5000,
    env: process.env.NODE_ENV || 'development'
}

export default envVariables;