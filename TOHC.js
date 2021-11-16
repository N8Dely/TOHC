//Dark Mode by Matthew Marquise//

function darkmode() {
  const wasDarkmode = localStorage.getItem('darkmode') === 'true';
  localStorage.setItem('darkmode', !wasDarkmode);
  const element = document.body;
  element.classList.toggle('dark-mode', !wasDarkmode);
}

function onload() {
  document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
  onload = "onlaod()"
}
//Dark Mode by Matthew Marquise//

//Drop down navigation w3schools//

function dropnavfunc() {
  document.getElementById("tohc-drop-nav").classList.toggle("open");
}
window.onclick = function (event) {
  if (!event.target.matches('.navdrop')) {
    var navdrops = document.getElementsByClassName("drop-links");
    var i;
    for (i = 0; i < navdrops.length; i++) {
      var openNavigation = navdrops[i];
      if (openNavigation.classList.contains('open')) {
        openNavigation.classList.remove('open');
      }
    }
  }
}
  //Drop down navigation w3schools//
