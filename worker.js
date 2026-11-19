// Serves the static export in ./out. Sends plain http to https, retired pages to the home page,
// and makes trailing-slash redirects permanent (assets return 307).
// shortcut: run_worker_first makes every request a Worker call (free plan: 100k/day); move redirects to Redirect Rules if traffic grows.
const RETIRED = /^\/(work|about|craft|notes|colophon|contact|_design)(\/.*)?$/;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    if (RETIRED.test(url.pathname)) return Response.redirect(`${url.origin}/`, 301);

    const res = await env.ASSETS.fetch(request);
    if (res.status === 307) return new Response(null, { status: 301, headers: { location: res.headers.get('location') } });
    if (url.pathname === '/opengraph-image') {
      const png = new Response(res.body, res);
      png.headers.set('content-type', 'image/png');
      return png;
    }
    return res;
  },
};
