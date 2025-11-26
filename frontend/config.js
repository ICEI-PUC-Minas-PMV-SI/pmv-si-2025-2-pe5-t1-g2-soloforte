const API_BASE_URL=process.env.API_BASE_URL || 'http://localhost:5000/api/products';

const CONFIG = {
    REQUEST_TIMEOUT: 30000,

    ALERT_DURATION: 5000,

    REDIRECT_DELAY: 1500,

    CURRENCY: {
        locale: 'pt-BR',
        currency: 'BRL',
        style: 'currency'
    },

    DATE_FORMAT: {
        locale: 'pt-BR',
        options: {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }
    }
};
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}