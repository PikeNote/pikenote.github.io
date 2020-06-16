function openTab(tabNumber) {
  var i;
  var x = document.getElementsByClassName("tab__inside");
  
  /*Add or Remove Active class to buttons*/
  $('.tab__button').removeClass('tab_button-active');
  $('.tab__button').click(function() {
    $(this).addClass('tab_button-active');
  })

  /*Add active or remove class to tab contents*/
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("tab__inside-active");
 
  }
  document.getElementById(tabNumber).classList.add("tab__inside-active");

}

