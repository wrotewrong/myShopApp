export const API_URL =
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:8000/api';

export const IMGS_URL =
  process.env.NODE_ENV === 'production'
    ? '/images'
    : 'http://localhost:8000/images';

export const PRODUCT_MIN_ORDER = 1;
export const PRODUCT_MAX_ORDER = 10;
