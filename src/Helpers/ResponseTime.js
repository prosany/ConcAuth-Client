function resTime(start, end) {
  let loadedIn = Math.round(end - start);
  switch (true) {
    case loadedIn <= 250:
      return {
        className: "text-green-600",
        res: loadedIn,
      };
    case loadedIn >= 250 && loadedIn <= 600:
      return {
        className: "text-yellow-600",
        res: loadedIn,
      };
    case loadedIn >= 600:
      return {
        className: "text-red-600",
        res: loadedIn,
      };
    default:
      return {
        className: "",
        res: "",
      };
  }
}

export default resTime;
