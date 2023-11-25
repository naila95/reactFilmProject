export const getData = async () => {
  let res = await fetch(
    import.meta.env.VITE_BASE_URL  );
  let data = await res.json();
  return data;
};
