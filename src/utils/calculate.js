import axios from "axios";

const generalTaxes = 1.65; // apply on all platforms in usd, and xbox/steam regardless if it's on pesos or usd
const nintendoTaxes = 1.43; // price displayed in pesos in the nintendo eshop already has IVA applied

export const calculate = async ({ price, platform, currency }) => {
  const roundResult = (value) => {
    return Math.round((value + Number.EPSILON) * 100) / 100; // limit decimals to 2
  };

  price = parseFloat(price);

  if (currency === 20) {
    const response = await axios(
      "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
    );
    const usdValue = parseFloat(response.data[0].casa.venta); // dolar oficial

    return roundResult(price * usdValue * generalTaxes);
  }

  if (platform === 10) {
    return roundResult(price * nintendoTaxes);
  }

  return roundResult(price * generalTaxes);
};

// 10 = nintendo
// 20 = xbox, steam
// 30 = playstation

// currency = 20 = usd
