//         <div id="map"></div>
        
//         <script>
//             function initmap() {
//                 var location = {lat: -25.363, lng: 131.044};
//                 var map = new google.maps.Map(document.getElementById("map"), {
//                     zoom: 4,
//                     center: location
//                 });
//                 var marker = new google.maps.Marker({
//                     position: location,
//                     map: map
//                 })
//                 }
            
//         </script>
        
//           <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7btDHor-Ms7kRZcJnf92KTW2o_lgjLSs&callback=initMap"
//   type="text/javascript"></script>








window.onload=function(){

document.getElementById("menu").addEventListener("click",openMenu);

function openMenu(){
    document.getElementById("dropdown").classList.toggle("active")
};

};