// Fixed exchange rates (approximate, for offline use)
const rates = {
    USD: { USD: 1, INR: 83.1, EUR: 0.92, GBP: 0.79, JPY: 157.2, CAD: 1.37, AUD: 1.51, CHF: 0.89, CNY: 7.25 },
    INR: { INR: 1, USD: 0.012, EUR: 0.011, GBP: 0.0095, JPY: 1.89, CAD: 0.0165, AUD: 0.018, CHF: 0.011, CNY: 0.087 },
    EUR: { EUR: 1, USD: 1.09, INR: 90.2, GBP: 0.86, JPY: 170.8, CAD: 1.49, AUD: 1.64, CHF: 0.97, CNY: 7.91 },
    GBP: { GBP: 1, USD: 1.26, INR: 104.8, EUR: 1.17, JPY: 199.2, CAD: 1.73, AUD: 1.90, CHF: 1.13, CNY: 9.2 },
    JPY: { JPY: 1, USD: 0.0064, INR: 0.53, EUR: 0.0059, GBP: 0.0050, CAD: 0.0087, AUD: 0.0095, CHF: 0.0057, CNY: 0.046 },
    CAD: { CAD: 1, USD: 0.73, INR: 60.3, EUR: 0.67, GBP: 0.58, JPY: 114.4, AUD: 1.10, CHF: 0.65, CNY: 5.3 },
    AUD: { AUD: 1, USD: 0.66, INR: 55.1, EUR: 0.61, GBP: 0.53, JPY: 104.3, CAD: 0.91, CHF: 0.59, CNY: 4.85 },
    CHF: { CHF: 1, USD: 1.12, INR: 91.2, EUR: 1.03, GBP: 0.88, JPY: 175.2, CAD: 1.54, AUD: 1.68, CNY: 8.2 },
    CNY: { CNY: 1, USD: 0.14, INR: 11.5, EUR: 0.13, GBP: 0.11, JPY: 21.1, CAD: 0.19, AUD: 0.21, CHF: 0.12 }
  };
  
  function convert() {
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("fromCurrency").value;
    const to = document.getElementById("toCurrency").value;
  
    if (isNaN(amount)) {
      document.getElementById("result").textContent = "Please enter a valid amount.";
      return;
    }
  
    const rate = rates[from][to];
    const converted = amount * rate;
  
    document.getElementById("result").textContent =
      `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
  }
  
  