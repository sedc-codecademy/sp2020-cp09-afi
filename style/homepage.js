function siteRedirect() {

    var selectbox = document.getElementById("firstdropdown");
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    window.location.href = selectedValue;
  }