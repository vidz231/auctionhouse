export const GET = async (url: string) => {
  const data: any = await (
    await fetch(import.meta.env.VITE_SERVER_URL + url, {
      method: "GET",
    })
  ).json();
  return data;
};

export const POST = async (url: string, body: any) => {
  const data: any = await (
    await fetch(import.meta.env.VITE_SERVER_URL + url, {
      method: "POST",
      body: JSON.stringify(body),
    })
  ).json();
  return data;
};

export const PUT = async (url: string, body: any) => {
  const data: any = await (
    await fetch(import.meta.env.VITE_SERVER_URL + url, {
      method: "PUT",
      body: JSON.stringify(body),
    })
  ).json();
  return data;
};

export const DELETE = async (url: string, body: any) => {
  const data: any = await (
    await fetch(import.meta.env.VITE_SERVER_URL + url, {
      method: "DELETE",
      body: JSON.stringify(body),
    })
  ).json();
  return data;
};
