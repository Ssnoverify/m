
$(document).ready(function() {
  function genRandomL(seed) {
    var equivalent;

    if (seed == null || seed == undefined || seed == '') {
      return genRandomL(Math.trunc(Math.random() * 4));
    } else {
      switch (seed) {
        case 0:
          equivalent = (seed * Math.LN10).toFixed(20);
          return equivalent;
        case 1:
          equivalent = (seed * Math.LN2).toFixed(20);
          return equivalent;
        case 2:
          equivalent = (seed * Math.PI).toFixed(20);
          return equivalent;
        case 3:
          equivalent = (seed * Math.E).toFixed(20);
          return equivalent;
        default:
          console.log(seed);
          return genRandomL(Math.trunc(Math.random() * 4));
      }
    }
  }

  let itemsToAlter = [".xamp", ".typology"];

  for (var i = 0; i < itemsToAlter.length; i++) {
    $(itemsToAlter[i]).prop('id', genRandomL());
    console.log("Elemento Insertado en DOM " + $(itemsToAlter[i]).prop("id"));
  }
});



