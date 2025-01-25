fetch('https://restcountries.com/v3.1/name/ukraine').then((result) => {
  console.log(result.json());
});
