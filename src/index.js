import "./styles.css";

let poly;
let map;
let weatherState = false;
let widthState = false;
let overallState = true;

function widthView() {
  widthState = true;
  weatherState = false;
  overallState = false;
  initMap();
}

function weatherView() {
  widthState = false;
  weatherState = true;
  overallState = false;
  initMap();
}
function overallView() {
  widthState = false;
  weatherState = false;
  overallState = true;
  initMap();
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("roundButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let darkRed = "#830000"
let red = "#D81B60"
let yellow = "#ffff00"
let green = "#00FF00"
let darkGreen = "#008e00"
let black = "#000000"


let blue = "#0000FF"
let darkBlue = "#00FF00"

function initMap() {
  const greenLarge = (path) => new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: "#00FF00",
    strokeOpacity: 0.6,
    strokeWeight: 8,
  });
  const goodPath = (path) => new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: green,
    strokeOpacity: 0.6,
    strokeWeight: 8,
  });
  const mediumPath = (path) => new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: yellow,
    strokeOpacity: 0.6,
    strokeWeight: 8,
  });
  const badPath = (path) => new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: red,
    strokeOpacity: 0.6,
    strokeWeight: 8,
  });

  const icyPath = (path) => new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: blue,
    strokeOpacity: 0.6,
    strokeWeight: 8,
  });

  const easyPath = (path) => new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: black,
    strokeOpacity: 0.6,
    strokeWeight: 8,
  });

  const crossingLine = (path) => new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: black,
    strokeOpacity: 0.6,
    strokeWeight: 4,
  });


  const greenSmall = (path) => new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: "#00FF00",
    strokeOpacity: 0.6,
    strokeWeight: 8,
  });
  const redLarge = (path) => new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 0.6,
    strokeWeight: 8,
  });
  const redSmall = (path) => new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: red,
    strokeOpacity: 0.6,
    strokeWeight: 8,
  });
  const blueLarge = (path) => new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: "#0000FF",
    strokeOpacity: 0.6,
    strokeWeight: 8,
  });
  const blueSmall = (path) => new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: "#0000FF",
    strokeOpacity: 0.6,
    strokeWeight: 4,
  });

  
  const lineSymbol = {
    path: "M 0,-1 0,1",
    strokeOpacity: 1,
    scale: 6,
  };

  const dashedLine = (path) => new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: red,
    strokeOpacity: 0,
    icons: [
      {
        icon: lineSymbol,
        offset: "0",
        repeat: "33px", 
      },
    ],
  });

  const crossingSymbol = {
    path: "M 0,-1 0,1",
    strokeOpacity: 1,
    scale: 4,
  };

  const dashedCrossingLine = (path) => new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: black,
    strokeOpacity: 0,
    icons: [
      {
        icon: lineSymbol,
        offset: "0",
        repeat: "33px", 
      },
    ],
  });


  if(widthState) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 59.19784991594983, lng: 17.625969717727433},
        zoom: 20,
    });

    const storGatanOne = [
        { lat: 59.19787885160205, lng: 17.62597658245043},
        { lat: 59.19803157094155, lng: 17.62582427418358 },
        { lat: 59.198247990231195, lng: 17.62564166374447},
    ];
    const storPathOne = redSmall(storGatanOne)
    storPathOne.setMap(map);
    
    const storGatanTwo = [
        { lat: 59.19786660135808, lng: 17.62592554721965},
        { lat: 59.19801727905739, lng: 17.625766859544324},
        {lat: 59.19820062310861, lng: 17.625623322956432}
    ];
    const storPathTwo = redSmall(storGatanTwo)
    storPathTwo.setMap(map);

    const ensammaJovisGatan  = [
        { lat: 59.19787885160205, lng: 17.62597658245043},
    { lat: 59.19794418210296, lng: 17.626332943601934},
    { lat: 59.19812548212194, lng: 17.62713090075465},
    ];
    
    const ensammaJovisGatanBrantPath = redSmall(ensammaJovisGatan);
    ensammaJovisGatanBrantPath.setMap(map);

    const enaJovisGatanBrant  = [
        { lat: 59.19776455015189, lng: 17.625493470336952},
        { lat: 59.19759423624195, lng: 17.62466064441557 },
    ];
    
    const enaJGatanBrantPath = dashedLine(enaJovisGatanBrant);
    enaJGatanBrantPath.setMap(map);

    const andraJovisGatanBrant  = [
        { lat: 59.1977363953064, lng: 17.625528338108467 },
        { lat: 59.197562647496284, lng: 17.62468880666437 },
    ];
    
    const andraJGatanBrantPath = dashedLine(andraJovisGatanBrant);
    andraJGatanBrantPath.setMap(map);


    const andraJovisGatanGrön  = [
        { lat: 59.1977363953064, lng: 17.625528338108467 },
        { lat: 59.19783803393355, lng: 17.625958832650063 },
    ];
    
    const andraJovisGatanGrönPath = redSmall(andraJovisGatanGrön);
    andraJovisGatanGrönPath.setMap(map);
        
    const enaJovisGatanGrön  = [
        { lat: 59.19776455015189, lng: 17.625493470336952 },
        { lat: 59.19786660135808, lng: 17.62592554721965 },
    ];
    
    const enaJovisGatanGrönPath = redSmall(enaJovisGatanGrön);
    enaJovisGatanGrönPath.setMap(map);

    const storGatan = [
        { lat: 59.19784163935403, lng: 17.625976266993277},
        { lat: 59.19738014266605, lng: 17.62633836521055},
    ];
    
    const storGatanPath = greenLarge(storGatan);
    storGatanPath.setMap(map);
    
  }


  // If user wanna see weather status for sidewalk
  if(weatherState) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 59.19784991594983, lng: 17.625969717727433},
        zoom: 20,
    });

    const storGatanOne = [
        { lat: 59.19787885160205, lng: 17.62597658245043},
        { lat: 59.19803157094155, lng: 17.62582427418358 },
        { lat: 59.198247990231195, lng: 17.62564166374447},
    ];
    const storPathOne = icyPath(storGatanOne)
    storPathOne.setMap(map);
    
    const storGatanTwo = [
        { lat: 59.19786660135808, lng: 17.62592554721965},
        { lat: 59.19801727905739, lng: 17.625766859544324},
        {lat: 59.19820062310861, lng: 17.625623322956432}
    ];
    const storPathTwo = icyPath(storGatanTwo)
    storPathTwo.setMap(map);

    const ensammaJovisGatan  = [
        { lat: 59.19787885160205, lng: 17.62597658245043},
    { lat: 59.19794418210296, lng: 17.626332943601934},
    { lat: 59.19812548212194, lng: 17.62713090075465},
    ];
    
    const ensammaJovisGatanBrantPath = easyPath(ensammaJovisGatan);
    ensammaJovisGatanBrantPath.setMap(map);

    const enaJovisGatanBrant  = [
        { lat: 59.19776455015189, lng: 17.625493470336952},
        { lat: 59.19759423624195, lng: 17.62466064441557 },
    ];
    
    const enaJGatanBrantPath = easyPath(enaJovisGatanBrant);
    enaJGatanBrantPath.setMap(map);

    const andraJovisGatanBrant  = [
        { lat: 59.1977363953064, lng: 17.625528338108467 },
        { lat: 59.197562647496284, lng: 17.62468880666437 },
    ];
    
    const andraJGatanBrantPath = easyPath(andraJovisGatanBrant);
    andraJGatanBrantPath.setMap(map);


    const andraJovisGatanGrön  = [
        { lat: 59.1977363953064, lng: 17.625528338108467 },
        { lat: 59.19783803393355, lng: 17.625958832650063 },
    ];
    
    const andraJovisGatanGrönPath = icyPath(andraJovisGatanGrön);
    andraJovisGatanGrönPath.setMap(map);
        
    const enaJovisGatanGrön  = [
        { lat: 59.19776455015189, lng: 17.625493470336952 },
        { lat: 59.19786660135808, lng: 17.62592554721965 },
    ];
    
    const enaJovisGatanGrönPath = icyPath(enaJovisGatanGrön);
    enaJovisGatanGrönPath.setMap(map);

    const storGatan = [
        { lat: 59.19784163935403, lng: 17.625976266993277},
        { lat: 59.19738014266605, lng: 17.62633836521055},
    ];
    
    const storGatanPath = easyPath(storGatan);
    storGatanPath.setMap(map);
  }

  if(overallState) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 59.19784991594983, lng: 17.625969717727433},
        zoom: 20,
    });

    const storGatanOne = [
        { lat: 59.19787885160205, lng: 17.62597658245043},
        { lat: 59.19803157094155, lng: 17.62582427418358 },
        { lat: 59.198247990231195, lng: 17.62564166374447},
    ];
    const storPathOne = badPath(storGatanOne)
    storPathOne.setMap(map);
    
    const storGatanTwo = [
        { lat: 59.19786660135808, lng: 17.62592554721965},
        { lat: 59.19801727905739, lng: 17.625766859544324},
        {lat: 59.19820062310861, lng: 17.625623322956432}
    ];
    const storPathTwo = badPath(storGatanTwo)
    storPathTwo.setMap(map);

    const ensammaJovisGatan  = [
        { lat: 59.19787885160205, lng: 17.62597658245043},
    { lat: 59.19794418210296, lng: 17.626332943601934},
    { lat: 59.19812548212194, lng: 17.62713090075465},
    ];
    
    const ensammaJovisGatanBrantPath = mediumPath(ensammaJovisGatan);
    ensammaJovisGatanBrantPath.setMap(map);

    const enaJovisGatanBrant  = [
        { lat: 59.19776455015189, lng: 17.625493470336952},
        { lat: 59.19759423624195, lng: 17.62466064441557 },
    ];
    
    const enaJGatanBrantPath = mediumPath(enaJovisGatanBrant);
    enaJGatanBrantPath.setMap(map);

    const andraJovisGatanBrant  = [
        { lat: 59.1977363953064, lng: 17.625528338108467 },
        { lat: 59.197562647496284, lng: 17.62468880666437 },
    ];
    
    const andraJGatanBrantPath = mediumPath(andraJovisGatanBrant);
    andraJGatanBrantPath.setMap(map);


    const andraJovisGatanGrön  = [
        { lat: 59.1977363953064, lng: 17.625528338108467 },
        { lat: 59.19783803393355, lng: 17.625958832650063 },
    ];
    
    const andraJovisGatanGrönPath = badPath(andraJovisGatanGrön);
    andraJovisGatanGrönPath.setMap(map);
        
    const enaJovisGatanGrön  = [
        { lat: 59.19776455015189, lng: 17.625493470336952 },
        { lat: 59.19786660135808, lng: 17.62592554721965 },
    ];
    
    const enaJovisGatanGrönPath = badPath(enaJovisGatanGrön);
    enaJovisGatanGrönPath.setMap(map);

    const storGatan = [
        { lat: 59.19784163935403, lng: 17.625976266993277},
        { lat: 59.19738014266605, lng: 17.62633836521055},
    ];
    
    const storGatanPath = goodPath(storGatan);
    storGatanPath.setMap(map);
  }

  

}

  

export { initMap, weatherView, overallView, widthView };