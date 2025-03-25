export function getRatingSeverity(averageRating: number) {
  if (averageRating <= 2) {
    return 'danger';
  }
  if (averageRating <= 3) {
    return 'warn';
  }
  if (averageRating < 4) {
    return 'info';
  }
  return 'success';
}
