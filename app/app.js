document
  .querySelector("#addnumbers")
  .addEventListener("click", function(e){
    var leftbox = document.querySelector("#numberOne").value;
    var rightbox = document.querySelector("#numberTwo").value;
    var total = Number(leftbox) + Number(rightbox);
    document.querySelector("#answer").innerHTML = total;

  });

document
  .querySelector("#subtractnumbers")
  .addEventListener("click", function(e){
    var leftbox = document.querySelector("#numberOne").value;
    var rightbox = document.querySelector("#numberTwo").value;
    var total = Number(leftbox) - Number(rightbox);
    document.querySelector("#answer").innerHTML = total;

  });

  document
    .querySelector("#dividenumbers")
    .addEventListener("click", function(e){
      var leftbox = document.querySelector("#numberOne").value;
      var rightbox = document.querySelector("#numberTwo").value;
      var total = Number(leftbox) / Number(rightbox);
      document.querySelector("#answer").innerHTML = total;

    });

    document
      .querySelector("#multiplynumbers")
      .addEventListener("click", function(e){
        var leftbox = document.querySelector("#numberOne").value;
        var rightbox = document.querySelector("#numberTwo").value;
        var total = Number(leftbox) * Number(rightbox);
        document.querySelector("#answer").innerHTML = total;

      });
