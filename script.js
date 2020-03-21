var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  /*var dots = document.getElementsByClassName("dot");*/
  //console.log(slides);
  /*console.log(dots);*/
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  /*for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";  
  /*dots[slideIndex-1].className += " active";*/
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

var moduleContent = {id:[],title:[],imageLocn:[],content:[]};

var myModal , modalContent , modalHeader , closeSpan;
var modHeading , modalBody , bodyImg , modalFooter;
var mo , span;

window.onload = function(){  
  //ACADEMICS
  var t = "CONTENT CONTENT content CONTENT CONTENT ONTENT CONTENT content CONTENT CONTENTONTENT CONT";
  t = t + t + t + t + t + t + t + t + t+ t + t + t + t;
  moduleContent['id'].push("class10");
  moduleContent['title'].push("Class 10 Performance");
  moduleContent['imageLocn'].push("docs/c10.jpg");
  moduleContent['content'].push(t);

  moduleContent['id'].push("class12");
  moduleContent['title'].push("Class 12 Performance");
  moduleContent['imageLocn'].push("docs/m12.png");

  moduleContent['id'].push("classBE");
  moduleContent['title'].push("BE Degree Performance");
  moduleContent['imageLocn'].push("docs/beMarksheet.png");
  
  
  //CERTIFICATIONS
  moduleContent['id'].push("dsaaipNPTEL");
  moduleContent['title'].push("Data Structures And Algorithms in Python");
  moduleContent['imageLocn'].push("docs/2.jpg");

  moduleContent['id'].push("picppNPTEL");
  moduleContent['title'].push("Programming In C++");
  moduleContent['imageLocn'].push("docs/2.jpg");

  moduleContent['id'].push("mlbiCoursera");
  moduleContent['title'].push("Machine Learning By IBM");
  moduleContent['imageLocn'].push("docs/courseraML.png");


  //PROJECTS
  moduleContent['id'].push("qimp");
  moduleContent['title'].push("Queue Implementation");
  moduleContent['imageLocn'].push("docs/c10.jpg");

  moduleContent['id'].push("regFAC");
  moduleContent['title'].push("Regex To Finite Automata Converter");
  moduleContent['imageLocn'].push("docs/c10.jpg");


  //CODING PLATFORMS
  moduleContent['id'].push("cfR");
  moduleContent['title'].push("CodeForces Rating");
  moduleContent['imageLocn'].push("docs/c10.jpg");

  moduleContent['id'].push("ccR");
  moduleContent['title'].push("Codechef Rating");
  moduleContent['imageLocn'].push("docs/codechefRanking.png");

  moduleContent['id'].push("hrR");
  moduleContent['title'].push("HackerRank Rating");
  moduleContent['imageLocn'].push("docs/hackerRank.png");
  
  console.log(moduleContent);

  myModal = document.createElement("div");
  myModal.setAttribute("id","myModal");
  myModal.setAttribute("class","modal");

  modalContent = document.createElement("div");
  modalContent.setAttribute("class","modal-content");

  modalHeader = document.createElement("div");
  modalHeader.setAttribute("class","modal-header");

  closeSpan = document.createElement("span");
  closeSpan.setAttribute("class","close");
  closeSpan.innerHTML = "&times;";

  modHeading = document.createElement("h2");
  modHeading.setAttribute("id","modHeading");

  modalHeader.appendChild(closeSpan);
  modalHeader.appendChild(modHeading);

  modalContent.appendChild(modalHeader);

  modalBody = document.createElement("div");
   modalBody.setAttribute("id","modalbody");
  modalBody.setAttribute("class","modal-body");
  bodyImg = document.createElement("img");
  bodyImg.setAttribute("id","modalImg");
  bodyImg.setAttribute("width","250px");
  bodyImg.setAttribute("height","250px");
  var para = document.createElement("p");
  para.setAttribute("id","modalBodyP");
  modalBody.appendChild(bodyImg);
  modalBody.appendChild(para);
  modalContent.appendChild(modalBody);

  myModal.appendChild(modalContent);

  document.body.appendChild(myModal);  

  mo = document.getElementById("myModal");
  span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    mo.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == mo) {
      mo.style.display = "none";
    }
  }

}

function modalAppear(id){
  var index = moduleContent['id'].indexOf(id);

  document.getElementById("modalImg").setAttribute("src",moduleContent['imageLocn'][index]);
  document.getElementById("modalBodyP").innerHTML = moduleContent['content'][index];
  document.getElementById("modHeading").innerHTML = (moduleContent['title'][index]);
  
  mo.style.display = "block";
}
