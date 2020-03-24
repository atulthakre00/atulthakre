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
  var t;
  t = "Received Merit Certificate from School Bharti Krishna Vidya Vihar for Meritorious performance in class 10. The Borad Exams of CBSE class 10 were conducted on March 2016";
  moduleContent['id'].push("class10");
  moduleContent['title'].push("Class 10 Performance");
  moduleContent['imageLocn'].push("docs/c10.jpg");
  moduleContent['content'].push(t);

  t = "Received Merit Certificate from Dr.Ambedkar Science College for Meritorious performance in class 12th. The Borad Exams of Maharashtra State Board class 12 were conducted on March 2018";
  moduleContent['id'].push("class12");
  moduleContent['title'].push("Class 12 Performance");
  moduleContent['imageLocn'].push("docs/m12.png");
  moduleContent['content'].push(t);

  t = "Presently Persuing BE 4 Year Degree from Shri Ramdeobaba College Of Engineering And Management Nagpur. My graduation date will be June 2022. Presently I am studying in 4th Semester with CGPA of 9.97 which is average grade point of 3 semesters";
  moduleContent['id'].push("classBE");
  moduleContent['title'].push("BE Degree Performance");
  moduleContent['imageLocn'].push("docs/beMarksheet.png");
  moduleContent['content'].push(t);
  
  
  //CERTIFICATIONS
  t = "Received 89% score with position in top 5% percentile in All India Exam on Data Structures And Algorithms In Python Conducted By IIT Madras. The exam was conducted on 29th September 2019 spanning a duration of 3 hrs. Separate Programming Exam was also Conducted.";
  moduleContent['id'].push("dsaaipNPTEL");
  moduleContent['title'].push("Data Structures And Algorithms in Python");
  moduleContent['imageLocn'].push("docs/2.jpg");
  moduleContent['content'].push(t);

  t = "Pursuing Programming in C++ course provided by IIT Kharagpur";
  moduleContent['id'].push("picppNPTEL");
  moduleContent['title'].push("Programming In C++");
  moduleContent['imageLocn'].push("docs/"); // image to be uploaded
  moduleContent['content'].push(t);

  t = "Successfully Completed Machine Learning Using Python course By IBM on Coursera spanning for about 6 weeks. Regular Quizzes and Programming Machine Learning Assignments were part of it. Final project for creating Best Classifier for data was part of Exam.";
  moduleContent['id'].push("mlbiCoursera");
  moduleContent['title'].push("Machine Learning By IBM");
  moduleContent['imageLocn'].push("docs/courseraML.png");
  moduleContent['content'].push(t);


  //PROJECTS
  t = "It is application of Circular Queue to create Traffic Signal Simulation. It was built using the knowledge of Data Structures and Algorithms particularly Circular Queue, Python tkinter, photoshop graphics. It was a well built GUI which consisted of 4 signals with usual red , green , yellow signals. The internal working was using insertion , deletion operations on circular queue.<br/><br/><a href='https://github.com/atulthakre00/traffic-light-simulation-using-circular-queue' target='_blank'>Repository : github.com/atulthakre00/traffic-light-simulation-using-circular-queue</a>";
  moduleContent['id'].push("qimp");
  moduleContent['title'].push("Queue Implementation");
  moduleContent['imageLocn'].push("docs/qimp.png");
  moduleContent['content'].push(t);

  t = "Given Regular Expression as input the program converts it into NFA (Non Deterministic Finite Automata) with Epsilon , NFA without Epsilon and DFA (Deterministic Finite Automata). It is a Web App created using HTML, CSS and Javascript. Knowledge of data structures and algorithms was used for internal implementation. Graphs and Graph Traversal Algorithm BFS (Bread First Search) are used.<br/><br/><a href='https://github.com/atulthakre00/regular-expression-to-finite-automata-converter' target='_blank'>Repository : github.com/atulthakre00/regular-expression-to-finite-automata-converter</a>";
  moduleContent['id'].push("regFAC");
  moduleContent['title'].push("Regex To Finite Automata Converter");
  moduleContent['imageLocn'].push("docs/"); // image to be uploaded
  moduleContent['content'].push(t);


/*  //CODING PLATFORMS
  t = "";
  moduleContent['id'].push("cfR");
  moduleContent['title'].push("CodeForces Rating");
  moduleContent['imageLocn'].push("docs/c10.jpg");
  moduleContent['content'].push(t);
  t = "";
  moduleContent['id'].push("ccR");
  moduleContent['title'].push("Codechef Rating");
  moduleContent['imageLocn'].push("docs/codechefRanking.png");
  moduleContent['content'].push(t);
  t = "";
  moduleContent['id'].push("hrR");
  moduleContent['title'].push("HackerRank Rating");
  moduleContent['imageLocn'].push("docs/hackerRank.png");
  moduleContent['content'].push(t);*/

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
  bodyImg.setAttribute("width","350px");
  bodyImg.setAttribute("height","200px");
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
