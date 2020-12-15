export function numberWithCommas(x) {
  return Number(x)
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatUTFDate(d) {
  const date = new Date(d);
  let dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return (d = dd + "/" + mm + "/" + yyyy);
}

export const emailValidator = (email) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) {
    return "Email cannot be empty!.";
  }
  if (!re.test(email)) {
    return "We need a valid email address.";
  }

  return "";
};

export const isValidEmail = (email) => {
  const re = /\S+@\S+\.\S+/;

  return re.test(email);
};

export const typeValidator = (name, type) => {
  if (!name || name.length <= 0) {
    return `${type} cannot be empty!`;
  }

  return "";
};

export const confirmPasswordValidator = (password, confirmPassword) => {
  if (!confirmPassword || confirmPassword.length <= 0) {
    return "Confirm Password cannot be empty.";
  }
  if (password !== confirmPassword) {
    return "Password is not the same as confirm password!";
  }

  return "";
};

export const validatePhoneNumber = (number) => {
  let reg = /^(\+?91|0)?[6789]\d{9}$/;
  return reg.test(number);
};

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
