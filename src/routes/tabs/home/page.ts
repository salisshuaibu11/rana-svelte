export const load = (async ({ fetch }) => {
  const res = await fetch('https://orangevalleycaa.org/api/videos');
  const item = await res.json();
 
  return { item };
});