// Export environment variables defined in ".env" file

export const APP_NAME = process.env.REACT_APP_NAME;
export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const AUTHOR_NAME = process.env.REACT_APP_AUTHOR;
export const DEFAULT_LOCALE = process.env.REACT_APP_LANG;
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';