/**
 * Format a date as a localized date string.
 *
 * Example:
 * Jul 02, 2026
 */
export const formatDate = (date) => {
  if (!date) return "-";

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(date));
};

/**
 * Format a date as a localized date and time.
 *
 * Example:
 * Jul 02, 2026, 10:30 AM
 */
export const formatDateTime = (date) => {
  if (!date) return "-";

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
};

/**
 * Format a date as a relative time.
 *
 * Examples:
 * Just now
 * 5 minutes ago
 * 2 hours ago
 * 3 days ago
 */
export const formatRelativeTime = (date) => {
  if (!date) return "-";

  const now = Date.now();
  const timestamp = new Date(date).getTime();
  const seconds = Math.floor((now - timestamp) / 1000);

  if (seconds < 60) return "Just now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60)
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24)
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;

  const days = Math.floor(hours / 24);
  if (days < 30)
    return `${days} day${days !== 1 ? "s" : ""} ago`;

  return formatDate(date);
};