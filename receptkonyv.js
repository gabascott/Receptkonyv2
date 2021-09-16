var receptek = [];

$(function () {
  $.ajax({
    url: "etelek.json",
    success: function (result) {
      console.log(result);
      receptek = result.receptkonyv;
      console.log(receptek);

      megjelenit();
    },
  });
});

function megjelenit() {

    console.log(receptek);

  //$("article").append(receptek[0]["nev"]);

  $("article").append("<table>");
  var txt =
    "<tr id='fejlec'><th>Név</th><th>Elkészítési idő</th><th>Kép</th><th>Leírás</th><th>Hozzávalok</th></tr>";
  //$("article table").append("<tr><th>Név</th>Elkészítési idő<th>Kép</th>Leírás<th>Hozzávalok</th></tr>");

  for (var i = 0; i < receptek.length; i++) {
    txt += "<tr id='" + i + "'>";

    for (var etel in receptek[i]) {
      txt += "<td>" + receptek[i][etel] + "</td>";
    }
    txt += "</tr>";
  }
  $("article table").append(txt);
  $("article table tr").hover(hatter);
  $("tr").on("click", kattintott);
}

function hatter(){
  //console.log($(this).attr("id"));
  $(this).toggleClass("bgChange");
}

function kattintott(){
  //$("#kep").append("<img src = '" + receptek[0] + "' alt''>");
  if ($(this).attr("id") !== "fejlec") {
    sorID = Number($(this).attr("id"));
    $("#kep img").attr("src", receptek[sorID].kep);
    $("#kep img").attr("alt", receptek[sorID].nev);

    $("#kep p").append(receptek[sorID].nev);
  }
}
