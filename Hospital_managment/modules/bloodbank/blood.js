window.onload = function () {

  //Object literal implementation
  var Cryoprecipitate = {
    BPlus: 8,
    BMinus: 10,
    APlus: 14,
    AMinus: 0,
    OPlus: 5,
    OMinus: 1,
  }; 
  
  //appending values onto DOM
  document.getElementById("v1").innerHTML = Cryoprecipitate.BPlus;
  document.getElementById("v2").innerHTML = Cryoprecipitate.BMinus;
  document.getElementById("v3").innerHTML = Cryoprecipitate.APlus;
  document.getElementById("v4").innerHTML = Cryoprecipitate.AMinus;
  document.getElementById("v5").innerHTML = Cryoprecipitate.OPlus;
  document.getElementById("v6").innerHTML = Cryoprecipitate.OMinus; 
  
  //constructor pattern implementation
  function FrozenPlasma(bp, bm, ap, am, op, om, abp, abm) {
    this.BPlus = bp;
    this.BMinus = bm;
    this.APlus = ap;
    this.AMinus = am;
    this.OPlus = op;
    this.OMinus = om;
    this.ABPlus = abp;
    this.ABMinus = abm;
  }
  
  var FP = new FrozenPlasma(92, 7, 46, 3, 111, 7, 77, 6); 
  
  //appending values onto DOM
  document.getElementById("v7").innerHTML = FP.BPlus;
  document.getElementById("v8").innerHTML = FP.BMinus;
  document.getElementById("v9").innerHTML = FP.APlus;
  document.getElementById("v10").innerHTML = FP.AMinus;
  document.getElementById("v11").innerHTML = FP.OPlus;
  document.getElementById("v12").innerHTML = FP.OMinus;
};


function bloodAvailability(event) {
  event.preventDefault();
  location.assign("../bloodbank/availability.html");
}