import moment from "moment";

export function formatMoney(moneyValue: number) {
  return moneyValue.toLocaleString("en-US", {
    style: "currency",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    currency: "USD",
  });
}

export function formatDate(
  date: Date,
  formatType?: "compact" | "short" | "long" | "time" | "date-time" | "compact-time"
) {
  let format = "DD/MM/YYYY";
  if (formatType) {
    switch (formatType) {
      case "compact":
        format = "DD/MM/YYYY";
        break;
      case "short":
        format = "DD/MM/YY";
        break;
      case "long":
        format = "DD MMMM YYYY";
        break;
      case "time":
        format = "hh:mm";
        break;
      case "date-time":
        format = "DD MMMM YYYY, hh:mm";
        break;
      case "compact-time":
        format = "DD/MM/YYYY hh:mm";
        break;
    }
  }
  return moment(date).format(format);
}
