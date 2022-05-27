import axios from "axios";

const generalTaxes = 1.65; // apply on all platforms in usd, and xbox/steam regardless if it's on pesos or usd
const nintendoTaxes = 1.43; // price displayed in pesos in the nintendo eshop already has IVA applied

export const calculate = async ({ price, platform, currency }) => {
  price = parseFloat(price);

  if (currency === 20) {
    const response = await axios(
      "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
    );
    const usdValue = parseFloat(response.data[0].casa.venta); // dolar oficial

    const finalPrice = price * usdValue * generalTaxes;
    return Math.round((finalPrice + Number.EPSILON) * 100) / 100; // limit decimal to 2
  }

  if (platform === 10) {
    return Math.round((price * nintendoTaxes + Number.EPSILON) * 100) / 100;
  }

  return Math.round((price * generalTaxes + Number.EPSILON) * 100) / 100;
};

// 10 = nintendo
// 20 = xbox, steam
// 30 = playstation
