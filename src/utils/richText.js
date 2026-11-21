export const toPlainText = (html = "") => {
  const spaced = html.replace(/<\/(p|li)>/gi, " ");
  const doc = new DOMParser().parseFromString(spaced, "text/html");
  return (doc.body.textContent || "").trim();
};
