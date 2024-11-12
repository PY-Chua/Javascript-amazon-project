export function formatCurrency(priceCents) {
    return (Math.round(priceCents) / 100).toFixed(2)
}

// each file can only have 1 default export
// default export use no curly bracket when importing 
// e.g import formatCurrency from './utils/money.js';
// export default formatCurrency;