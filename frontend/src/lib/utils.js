export function formatMessageTime(date) {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
//Formats it to a time string like "14:30" (i.e., 2:30 PM in 24-hour format).