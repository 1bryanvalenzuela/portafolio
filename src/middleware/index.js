export function onRequest(context, next) {
  const { request, cookies } = context;

  const language = cookies.get("language");
  let path = new URL(request.url).pathname;

  if (!language) {
    if (request.url.includes("/en/")) {
      cookies.set("language", "en", { path: "/" });
    } else {
      cookies.set("language", "es", { path: "/" });
    }
  } else if (language.value === "es" && path.startsWith("/en/")) {
    path = path.slice(3);
    return context.redirect(`${path}`);
  } else if (language.value === "en" && !path.startsWith("/en/")) {
    path = `/en${path}`;
    return context.redirect(`${path}`);
  }

  return next();
}
