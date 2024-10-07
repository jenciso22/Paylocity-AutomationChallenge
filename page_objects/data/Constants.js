import dotenv from 'dotenv'

dotenv.config()


export const URLS = {
    LOGIN_URL: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login'
}

export const CREDENTIALS = {
    STANDARD_USER: {
        EMAIL: process.env.STANDARD_USER_EMAIL,
        PASSWORD: process.env.STANDARD_USER_PASSWORD
    }
}

export const INVALIDCREDENTIALS = {
    INVALID_USER: {
        EMAIL: process.env.INVALID_USER_EMAIL,
        PASSWORD: process.env.INVALID_USER_PASSWORD,
        INVALIDEMAIL: process.env.INVALIDEMAIL_USER_EMAIL,
        INVALIDPASSWORD: process.env.INVALIDPASSWORD_USER_PASSWORD  
    }
}


/*
export const firstName = 'Jose'
export const lastName = 'Enciso'
export const dependents = '2'*/