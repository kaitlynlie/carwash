// '1:34:55.051 PM'
export const localePreciseTime = () => {
  const date = new Date();
  return date
    .toLocaleTimeString()
    .split(" ")
    .map((v, idx) =>
      idx === 0 ? `${v}${date.toISOString().slice(-5, -1)}` : v
    )
    .join(" ");
};

/**
 * By adding a "debug" key in Application localStorage, we can enable debug message in UI or console.log.|
 */
export const isDebugMsgEnabled = (tag: string): boolean => {
  return (
    typeof localStorage !== "undefined" &&
    (localStorage.getItem("debug") || "").split("|").includes(tag)
  );
};

export const debugLog = (tag: string, ...params: any[]) => {
  if (isDebugMsgEnabled(tag)) {
    const t = localePreciseTime();
    console.log(`[${t} - ${tag}]`, ...params);
  }
};
