export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "b07dcfee5dmsha0c6434e8e7f436p1ab336jsn02c9a605263f",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
