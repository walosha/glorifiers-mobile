import axios from "axios";
const paystack = axios.create({ baseURL: "https://api.paystack.co" });
paystack.defaults.headers.common["Authorization"] =
  "Bearer sk_test_7a77af93ca3728b1652865978fde134857f26ff3";

export async function getBankList() {
  const {
    data: { data },
  } = await paystack.get("/bank");

  return data.map((el) => ({ name: el.name, code: el.code }));
}

export async function verifyAccount(account_number, bank_code) {
  try {
    const {
      data: { data, status },
    } = await paystack.get(
      `/bank/resolve?account_number=${account_number}&bank_code=${bank_code}`
    );
    return { status, ...data };
  } catch ({ response: { data } }) {
    return data;
  }
}
