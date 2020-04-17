function getSwData(type, done) {
  var request = new XMLHttpRequest();
  request.open("GET", `https://pokeapi.co/api/v2/${type}`, false);
  request.send(null);

  if (request.status === 200) {
    let res = JSON.parse(request.responseText);
    let array = res.results;
    for (let index = 0; index < array.length; index++) {
      let url = res.results[index].url;
      done(null, url);
      var request2 = new XMLHttpRequest();
      request2.open("GET", url, false);
      request2.send(null);
      let res2 = JSON.parse(request2.responseText);
      console.log(res2.sprites.front_default);
      let $image = document.querySelector("#image" + (index + 1));
      $image.setAttribute("src", res2.sprites.front_default);
      const $name = document.querySelector("#name" + (index + 1));
      $name.textContent = res2.name;
    }
    /*
                const $image=document.querySelector("#image")
                $image.setAttribute('src',res.sprites.front_default)
        
                const $name=document.querySelector("#name")
                $name.textContent=res.name
        */

    /* 
           
           for (let index = 0; index < array.length; index++) {
           done(null,res.results[index].name)
           }
       */
  } else {
    done("Error en la petición", null);
  }
}

getSwData("pokemon", (err, items) => {
  if (err) {
    console.log(err);
  } else {
    console.log(items);
  }
});

console.log("FINAL");
