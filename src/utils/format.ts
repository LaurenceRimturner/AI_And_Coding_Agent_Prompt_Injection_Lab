/** Formats a 0-5 rating for display, where 0 means "not rated". */
export function formatRating(rating: number): string {
  return rating > 0 ? `${rating} of 5` : "not rated";
}
