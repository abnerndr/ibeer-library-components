export const BINS = {
  amex: /^3[47]\d{13}$/,
  diners: /^3(0[0-5]|[68]\d)\d{11}$/,
  visa: /^4\d{12}(\d{3})?$/,
  master: /^(5[1-5]\d{4}|677189)\d{10}$/,
  elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})$/,
  hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/
};

export interface CreditCardProps {
  number: string;
  holder: string;
  validate: string;
  code: string;
  width?: string | number;
};
