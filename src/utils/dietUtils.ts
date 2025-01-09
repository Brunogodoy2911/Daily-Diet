export function getDietType(dietPercentage: string): "PRIMARY" | "SECONDARY" {
  return parseFloat(dietPercentage.replace(",", ".")) >= 50
    ? "PRIMARY"
    : "SECONDARY";
}
