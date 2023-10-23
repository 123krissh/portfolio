const mobile_navbar_btn = document.querySelector(".mobile-navbar-btn");
const navbar_list = document.querySelector(".header");
const toggleNavbar = () => {
  nav_header.classlist.toggle("active");
}
mobile_navbar_btn.addEventListener("click", () => toggleNavbar());


<script>
  var tablinks = document.getElementsByClassName('tab-links');
  var tabcontent = document.getElementsByClassName('tab-content');

  function opentab(tabname){
    for(tablink of tablinks){
      tablink.classlist.remove("active-link");
    }
    for(tabcontent of tabcontent){
      tabcontent.classlist.remove("active-tab");
    }
    event.currentTarget.classlist.add("active-link");
    document.getElementById('tabname').classlist.add("active-tab");
  }
</script>


var a = 10;
console.log(value of a is + " ");
