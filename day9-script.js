let result =[], temp;
async function fetchData(){
  const res = await fetch('https://restcountries.com/v3.1/all')
              .then(res=>res.json())
              .then(res=>{
                  //console.log(res);
                  //a. Get all the countries from Asia continent /region using Filter function
                  result = res.filter(e=>e.continents[0]==='Asia')
                  console.log("Countries in Asia",result)

                  //b. Get all the countries with a population of less than 2 lakhs using Filter function
                  result = res.filter(e=>e.population<200000)
                  console.log("Population less than 2 lakh countries",result)
                  //c.Print the following details name, capital, flag using forEach function
                  res.forEach( x => {
                     console.log(x.name, x.capital, x.flags);
                  });
                  //d.Print the total population of countries using reduce function
                  result = res.map(x => {return x.population}).reduce((prev,curr) => prev+curr)
                  console.log(result);
                  //e.Print the country which uses US Dollars as currency
                  temp = res.map( e => e.currencies)
                  for(let x in temp){
                    for(let y in temp[x]){
                      if(y == "USD")
                        result.push(res[x].name)
                    }
                  }
                  console.log(result);
              })

}

fetchData();
