function validateData() {
  var firstname_valid = false;
  var lastname_valid = false;
  var emailaddress_valid = false;
  var phonenumber_valid = false;
  var studentaddress_valid = false;
//First Name
  document.myform.first_name_name.onblur = function () {
    var firstname = document.getElementById("firstname");
    var span = firstname.getElementsByTagName("span");
    var x = document.createElement("img");
    var y = document.createElement("img");

    var myRE = /[a-zA-Z]{2}/;
    if (this.value.match(myRE)) {
      if (span[0].firstChild.nodeValue == null) {
        span[0].appendChild(document.createTextNode("You need to enter your first name!"));
        firstname_valid = false; 
      } else {
        span[0].firstChild.nodeValue = "Success!";
        y.setAttribute("src", "img/pngfind.com-green-check-mark-png-528806.png");
        y.setAttribute("id", "y")
        y.style.backgroundColor = "transparent";
        y.style.width = "15px";
        y.style.float = "left"
        span[0].appendChild(y);
        span[0].replaceChild(y, span[0].childNodes[1]);


        firstname_valid = true;
      }
    } else {
      if (span[0].firstChild.nodeValue == null) {
        span[0].appendChild(document.createTextNode("You need to enter your first name!"));
        firstname_valid = false; 
      } else {
        span[0].firstChild.nodeValue = "You need to enter your first name!";
        x.setAttribute("src", "img/x-png-35402.png");
        x.setAttribute("id", "x")
        x.style.backgroundColor = "transparent";
        x.style.width = "15px";
        x.style.float = "left"
        span[0].appendChild(x);
        span[0].replaceChild(x, span[0].childNodes[1]);
        firstname_valid = false;
      }
    }
  };

  document.myform.first_name_name.onfocus = function () {
    var firstname = document.getElementById("firstname");
    var span = firstname.getElementsByTagName("span");
    span[0].firstChild.nodeValue = "Must contain only 2 or more letters";


  };
//Last Name
  document.myform.last_name_name.onblur = function () {
    var lastname = document.getElementById("lastname");
    var span = lastname.getElementsByTagName("span");
    var x = document.createElement("img");
    var y = document.createElement("img");

    var myRE = /[a-zA-Z]{2}/;
    if (this.value.match(myRE)) {
      if (span[0].firstChild.nodeValue == null) {
        span[0].appendChild(document.createTextNode("Success!"));
        lastname_valid = true;
      } else {
        span[0].firstChild.nodeValue = "Success!";
        y.setAttribute("src", "img/pngfind.com-green-check-mark-png-528806.png");
        y.setAttribute("id", "y")
        y.style.backgroundColor = "transparent";
        y.style.width = "15px";
        y.style.float = "left"
        span[0].appendChild(y);
        span[0].replaceChild(y, span[0].childNodes[1]);
        lastname_valid = true;
      }
    } else {
      if (span[0].firstChild.nodeValue == null) {
        span[0].appendChild(document.createTextNode("You need to enter your last name!"));
        lastname_valid = false;
      } else {
        span[0].firstChild.nodeValue = " You need to enter your last name!";
        x.setAttribute("src", "img/x-png-35402.png");
        x.setAttribute("id", "x")
        x.style.backgroundColor = "transparent";
        x.style.width = "15px";
        x.style.float = "left"
        span[0].appendChild(x);
        span[0].replaceChild(x, span[0].childNodes[1]);
        lastname_valid = false;
      }
    }
  };

  document.myform.last_name_name.onfocus = function () {
    var lastname = document.getElementById("lastname");
    var span = lastname.getElementsByTagName("span");
    span[0].firstChild.nodeValue = "Must contain only 2 or more letters";
  };
//Email Address
  document.myform.email_address_name.onblur = function () {
    var emailaddress = document.getElementById("emailaddress");
    var span = emailaddress.getElementsByTagName("span");
    var x = document.createElement("img");
    var y = document.createElement("img");

    var myRE = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/;
    if (this.value.match(myRE)) {
      if (span[0].firstChild.nodeValue == null) {
        span[0].appendChild(document.createTextNode("You need to enter your email properly!"));
        emailaddress_valid = false; 
      } else {
        span[0].firstChild.nodeValue = "Success!";
        y.setAttribute("src", "img/pngfind.com-green-check-mark-png-528806.png");
        y.setAttribute("id", "y")
        y.style.backgroundColor = "transparent";
        y.style.width = "15px";
        y.style.float = "left"
        span[0].appendChild(y);
        span[0].replaceChild(y, span[0].childNodes[1]);
        emailaddress_valid = true;
      }
    } else {
      if (span[0].firstChild.nodeValue == null) {
        span[0].appendChild(document.createTextNode("You need to enter your email properly!"));
        emailaddress_valid = false; 
      } else {
        span[0].firstChild.nodeValue = "You need to enter your email properly!";
        x.setAttribute("src", "img/x-png-35402.png");
        x.setAttribute("id", "x")
        x.style.backgroundColor = "transparent";
        x.style.width = "15px";
        x.style.float = "left"
        span[0].appendChild(x);
        span[0].replaceChild(x, span[0].childNodes[1]);
        emailaddress_valid = false;
      }
    }
  };

  document.myform.email_address_name.onfocus = function () {
    var emailaddress = document.getElementById("emailaddress");
    var span = emailaddress.getElementsByTagName("span");
    span[0].firstChild.nodeValue = "You must follow the pattern: blah@blah.com.";
  };

  //Phone Number
  document.myform.phone_number_name.onblur = function () {
    var phonenumber = document.getElementById("phonenumber");
    var span = phonenumber.getElementsByTagName("span");
    var x = document.createElement("img");
    var y = document.createElement("img");

    var myRE =  /^\d\d\d-\d\d\d-\d\d\d\d$/;
    if (this.value.match(myRE)) {
      if (span[0].firstChild.nodeValue == null) {
        span[0].appendChild(document.createTextNode("You need to enter phone like: XXX-XXX-XXXX"));
        phonenumber_valid = false; 
      } else {
        span[0].firstChild.nodeValue = "Success!"; 
        y.setAttribute("src", "img/pngfind.com-green-check-mark-png-528806.png");
        y.setAttribute("id", "y")
        y.style.backgroundColor = "transparent";
        y.style.width = "15px";
        y.style.float = "left"
        span[0].appendChild(y);
        span[0].replaceChild(y, span[0].childNodes[1]);
        phonenumber_valid = true;
      }
    } else {
      if (span[0].firstChild.nodeValue == null) {
        span[0].appendChild(document.createTextNode("You need to enter phone like: XXX-XXX-XXXX!"));
        phonenumber_valid = false; 
      } else {
        span[0].firstChild.nodeValue = "You need to enter phone like: XXX-XXX-XXXX!";
        x.setAttribute("src", "img/x-png-35402.png");
        x.setAttribute("id", "x")
        x.style.backgroundColor = "transparent";
        x.style.width = "15px";
        x.style.float = "left"
        span[0].appendChild(x);
        span[0].replaceChild(x, span[0].childNodes[1]);
        phonenumber_valid = false;
      }
    }
  };

  document.myform.phone_number_name.onfocus = function () {
    var phonenumber = document.getElementById("phonenumber");
    var span = phonenumber.getElementsByTagName("span");
    span[0].firstChild.nodeValue = "Must contain only numbers: XXX-XXX-XXXX";
  };
//Student Address
document.myform.student_address_name.onblur = function () {
  var studentaddress = document.getElementById("studentaddress");
  var span = studentaddress.getElementsByTagName("span");
  var x = document.createElement("img");
  var y = document.createElement("img");

  var myRE =  /(^http|https):\/\/students.cah.ucf.edu\/~/;
  if (this.value.match(myRE)) {
    if (span[0].firstChild.nodeValue == null) {
      span[0].appendChild(document.createTextNode("You need to enter a student address!"));
      studentaddress_valid = false; 
    } else {
      span[0].firstChild.nodeValue = "Success!";
      y.setAttribute("src", "img/pngfind.com-green-check-mark-png-528806.png");
      y.setAttribute("id", "y")
      y.style.backgroundColor = "transparent";
      y.style.width = "15px";
      y.style.float = "left"
      span[0].appendChild(y);
      span[0].replaceChild(y, span[0].childNodes[1]);
      studentaddress_valid = true;
    }
  } else {
    if (span[0].firstChild.nodeValue == null) {
      span[0].appendChild(document.createTextNode("You need to enter a student address!"));
      studentaddress_valid = false; 
    } else {
      span[0].firstChild.nodeValue = "You need to enter a student address!";
      x.setAttribute("src", "img/x-png-35402.png");
        x.setAttribute("id", "x")
        x.style.backgroundColor = "transparent";
        x.style.width = "15px";
        x.style.float = "left"
        span[0].appendChild(x);
        span[0].replaceChild(x, span[0].childNodes[1]);
      studentaddress_valid = false;
    }
  }
};

document.myform.student_address_name.onfocus = function () {
  var studentaddress = document.getElementById("studentaddress");
  var span = studentaddress.getElementsByTagName("span");
  span[0].firstChild.nodeValue = "Must contain http(s):// and the ~ symbol";
};

//submit page
  document.myform.addEventListener("submit", submitfunction, false);
  function submitfunction(event) {
    event.preventDefault();
    processForm(firstname_valid, lastname_valid, emailaddress_valid, phonenumber_valid, studentaddress_valid);
  }
}

function processForm (firstname_valid, lastname_valid, emailaddress_valid, phonenumber_valid, studentaddress_valid){
  if (firstname_valid && lastname_valid && emailaddress_valid && phonenumber_valid && studentaddress_valid)
  {
    var q1_valid=true;
    var q2_valid=true;

  var question1 = document.getElementById("question1")
  var q1 = document.createElement("p");
  question1.setAttribute("class", "questionborder")
  var q1text = document.createTextNode("Q1: How do you make your decisions?");
  q1.setAttribute("id", "QuestionText");
  q1.appendChild(q1text);
  question1.appendChild(q1);

  var label1a = document.createElement('label')
  label1a.setAttribute("id", "Labelq1")
  var description1a = document.createTextNode("Go with my gut");
  q1.appendChild(label1a)
  label1a.appendChild(description1a);

  var q1a = document.createElement('input');
  q1a.type = "radio";
  q1a.id = "q1a";
  q1a.name = "q1"
  q1a.value = "2a";
  label1a.appendChild(q1a)

  var label1b = document.createElement('label')
  label1b.setAttribute("id", "Labelq1")
  var description1b = document.createTextNode('Make one that will have the best result');
  q1.appendChild(label1b)
  label1b.appendChild(description1b);

  var q1b = document.createElement('input');
  q1b.type = "radio";
  q1b.id = "q1b";
  q1b.name = "q1"
  q1b.value = "2b";
  label1b.appendChild(q1b)

//Question 2
  var question2 = document.getElementById("question2")

  var q2 = document.createElement("p");
  var q2text = document.createTextNode("Q2: How would you react if someone bullies your friend?");
  q2.setAttribute("id", "QuestionText");
  question2.setAttribute("class", "questionborder")
  q2.appendChild(q2text);
  question2.appendChild(q2);

  var label2a = document.createElement('label')
  label2a.setAttribute("id", "Labelq2")
    var description2a = document.createTextNode('Comfort my friend');
    q2.appendChild(label2a)
    label2a.appendChild(description2a);

  var q2a = document.createElement('input');
    q2a.type = "radio";
    q2a.id = "q2a";
    q2a.name = "q2"
    q2a.value = "2a";
    label2a.appendChild(q2a)

    var label2b = document.createElement('label')
    label2b.setAttribute("id", "Labelq2")
    var description2b = document.createTextNode('Confront the bully');
    question2.appendChild(label2b)
    label2b.appendChild(description2b);

  var q2b = document.createElement('input');
    q2b.type = "radio";
    q2b.id = "q1b";
    q2b.value = "2b";
    q2b.name = "q2";
    label2b.appendChild(q2b)
  //Submit Button
    var buttondiv = document.getElementById("buttondiv");
    var surveybutton = document.createElement("input");
    surveybutton.setAttribute("type","submit");
    surveybutton.setAttribute("id","surveybutton");
    surveybutton.setAttribute("name","surveybutton")
    var text = document.createTextNode("submit");
    surveybutton.appendChild(text);
    buttondiv.appendChild(surveybutton);

}else {
  var welcomeMessageLoc = document.getElementById('survey');
  var welcomeMessage = document.getElementById("surveyform")
  welcomeMessageLoc.appendChild(welcomeMessage);
  welcomeMessageLoc.replaceChild(welcomeMessage, welcomeMessageLoc.childNodes[0]);
  }
//Generate Badges
    document.surveyform.addEventListener('submit',submitfunction, false);
      function submitfunction(event) {
      event.preventDefault()
      generateBadges(q1_valid, q2_valid);
    }
      function generateBadges(q1_valid, q2_valid){
        if (q1_valid && q2_valid) {
         
          var checkboxes = document.getElementsByName('q1');
          var vals = "";
          for (var i=0, n=checkboxes.length;i<n;i++) 
          {
              if (checkboxes[i].checked) 
              {
                  vals += ","+checkboxes[i].value;
              }
          }
          if (vals) vals = vals.substring(1);

          var checkboxes = document.getElementsByName('q2');
          for (var i=0, n=checkboxes.length;i<n;i++) 
          {
              if (checkboxes[i].checked) 
              {
                  vals += ","+checkboxes[i].value;
              }
          }
if (vals) vals = vals.substring(1);
        switch (vals) {
          //Gryffindor Badge
          case "a,2b":
          var changingContentDiv = document.getElementById('badge');
          while(changingContentDiv.hasChildNodes()) {
              changingContentDiv.removeChild(changingContentDiv.lastChild);
          }
          var newHeading = document.createElement('h3');
          var headText = document.createTextNode("Congrats! You're in Gryffindor!");
          newHeading.appendChild(headText);
          changingContentDiv.setAttribute('style', 'display: block;');
          changingContentDiv.appendChild(newHeading);
          var newPara = document.createElement('p');
          changingContentDiv.appendChild(newPara);
          var paraText = document.createTextNode("You submitted: Go with my gut and Confront the bully!");
          changingContentDiv.appendChild(paraText);
          var badgeImg = document.createElement('img');
          badgeImg.setAttribute('src', 'img/PngItem_1361603.png');
          badgeImg.style.width = "100%"
          changingContentDiv.appendChild(badgeImg);
          changingContentDiv.setAttribute('style', 'outline: 2px solid black;');
          var caption = document.createElement("a")
          var captionurl = document.createTextNode("https://www.linkpicture.com/q/PngItem_1361603.png");
          caption.append(captionurl);
          caption.href="https://www.linkpicture.com/q/PngItem_1361603.png"
          var captionloc = document.getElementById("caption")
          captionloc.appendChild(caption);
          captionloc.replaceChild(caption, captionloc.childNodes[0]);

          //Welcome Message

          var welcomeName = document.forms["myform"]["first_name_name"].value;
          welcomeName += " ";
          welcomeName += document.forms["myform"]["last_name_name"].value;
          var welcomeEmail =  document.forms["myform"]["email_address_name"].value;
          var welcomePhone = document.forms["myform"]["phone_number_name"].value;
          var welcomeStudent = document.forms["myform"]["student_address_name"].value;
          var welcomeMessage = document.createTextNode("Welcome, " + welcomeName + "!" +  " Your email is: " + welcomeEmail +
          ". Your Phone Number is: " + welcomePhone + ". Your student address is: " + welcomeStudent + ".");
          var welcomeMessageLoc = document.getElementById('displayinfo');
          welcomeMessageLoc.appendChild(welcomeMessage);
          welcomeMessageLoc.replaceChild(welcomeMessage, welcomeMessageLoc.childNodes[0]);

          return false;

          //Ravenclaw Badge
          case "b,2a":
          var changingContentDiv = document.getElementById('badge');
          while(changingContentDiv.hasChildNodes()) {
              changingContentDiv.removeChild(changingContentDiv.lastChild);
          }
          var newHeading = document.createElement('h3');
          var headText = document.createTextNode("Congrats! You're in Ravenclaw!");
          newHeading.appendChild(headText);
          changingContentDiv.setAttribute('style', 'display: block;');
          changingContentDiv.appendChild(newHeading);
          var newPara = document.createElement('p');
          changingContentDiv.appendChild(newPara);
          var paraText = document.createTextNode("You submitted: Make one that will have the best result and Comfort my friend!");
          changingContentDiv.appendChild(paraText);
          var badgeImg = document.createElement('img');
          badgeImg.setAttribute('src', 'img/kindpng_1842118.png');
          badgeImg.style.width = "100%"
          changingContentDiv.appendChild(badgeImg);
          changingContentDiv.setAttribute('style', 'outline: 2px solid black;');
          var caption = document.createElement("a")
          var captionurl = document.createTextNode("https://www.linkpicture.com/q/kindpng_1842118.png");
          caption.append(captionurl);
          caption.href="https://www.linkpicture.com/q/kindpng_1842118.png"
          var captionloc = document.getElementById("caption")
          captionloc.appendChild(caption);
          captionloc.replaceChild(caption, captionloc.childNodes[0]);

          //Ravenclaw Welcome Message
          var welcomeName = document.forms["myform"]["first_name_name"].value;
          welcomeName += " ";
          welcomeName += document.forms["myform"]["last_name_name"].value;
          var welcomeEmail =  document.forms["myform"]["email_address_name"].value;
          var welcomePhone = document.forms["myform"]["phone_number_name"].value;
          var welcomeStudent = document.forms["myform"]["student_address_name"].value;
          var welcomeMessage = document.createTextNode("Welcome, " + welcomeName + "!" +  " Your email is: " + welcomeEmail +
          ". Your Phone Number is: " + welcomePhone + ". Your student address is: " + welcomeStudent + ".");
          var welcomeMessageLoc = document.getElementById('displayinfo');
          welcomeMessageLoc.appendChild(welcomeMessage);
          var welcomeMessageLoc = document.getElementById('displayinfo');
          welcomeMessageLoc.appendChild(welcomeMessage);
          welcomeMessageLoc.replaceChild(welcomeMessage, welcomeMessageLoc.childNodes[0]);

          break;
          //Hufflepuff Badge
          case "a,2a":
          var changingContentDiv = document.getElementById('badge');
          while(changingContentDiv.hasChildNodes()) {
              changingContentDiv.removeChild(changingContentDiv.lastChild);
          }
          var newHeading = document.createElement('h3');
          var headText = document.createTextNode("Congrats! You're in Hufflepuff");
          newHeading.appendChild(headText);
          changingContentDiv.setAttribute('style', 'display: block;');
          changingContentDiv.appendChild(newHeading);
          var newPara = document.createElement('p');
          changingContentDiv.appendChild(newPara);
          var paraText = document.createTextNode("You submitted: Go with my gut and Comfort my friend!");
          changingContentDiv.appendChild(paraText);
          var badgeImg = document.createElement('img');
          badgeImg.setAttribute('src', 'img/NicePng_hufflepuff-png_1676524.png');
          badgeImg.style.width = "100%"
          changingContentDiv.appendChild(badgeImg);
          changingContentDiv.setAttribute('style', 'outline: 2px solid black;');
          var caption = document.createElement("a")
          var captionurl = document.createTextNode("https://www.linkpicture.com/q/NicePng_hufflepuff-png_1676524.png");
          caption.append(captionurl);
          caption.href="https://www.linkpicture.com/q/NicePng_hufflepuff-png_1676524.png"
          var captionloc = document.getElementById("caption")
          captionloc.appendChild(caption);
          captionloc.replaceChild(caption, captionloc.childNodes[0]);

          //Hufflepuff Welcome Message
          var welcomeName = document.forms["myform"]["first_name_name"].value;
          welcomeName += " ";
          welcomeName += document.forms["myform"]["last_name_name"].value;
          var welcomeEmail =  document.forms["myform"]["email_address_name"].value;
          var welcomePhone = document.forms["myform"]["phone_number_name"].value;
          var welcomeStudent = document.forms["myform"]["student_address_name"].value;
          var welcomeMessage = document.createTextNode("Welcome, " + welcomeName + "!" +  " Your email is: " + welcomeEmail +
          ". Your Phone Number is: " + welcomePhone + ". Your student address is: " + welcomeStudent + ".");
          var welcomeMessageLoc = document.getElementById('displayinfo');
          welcomeMessageLoc.appendChild(welcomeMessage);
          var welcomeMessageLoc = document.getElementById('displayinfo');
          welcomeMessageLoc.appendChild(welcomeMessage);
          welcomeMessageLoc.replaceChild(welcomeMessage, welcomeMessageLoc.childNodes[0]);

          break;
          //Slytherin Badge
          case "b,2b":
          var changingContentDiv = document.getElementById('badge');
          while(changingContentDiv.hasChildNodes()) {
              changingContentDiv.removeChild(changingContentDiv.lastChild);
          }
          var newHeading = document.createElement('h3');
          var headText = document.createTextNode("Congrats! You're in Slytherin!");
          newHeading.appendChild(headText);
          changingContentDiv.setAttribute('style', 'display: block;');
          changingContentDiv.appendChild(newHeading);
          var newPara = document.createElement('p');
          changingContentDiv.appendChild(newPara);
          var paraText = document.createTextNode("You submitted: Make the one that will have the best result and Confront the bully!");
          changingContentDiv.appendChild(paraText);
          var badgeImg = document.createElement('img');
          badgeImg.style.width = "100%"
          badgeImg.setAttribute('src', 'img/PngItem_1762298.png');
          changingContentDiv.appendChild(badgeImg);
          changingContentDiv.setAttribute('style', 'outline: 2px solid black;');
          var caption = document.createElement("a")
          var captionurl = document.createTextNode("https://s10.gifyu.com/images/PngItem_1762298.png");
          caption.append(captionurl);
          caption.href="https://s10.gifyu.com/images/PngItem_1762298.png"
          var captionloc = document.getElementById("caption");
          captionloc.replaceChild(caption, captionloc.childNodes[0]);

          captionloc.appendChild(caption)
          //Slytherin Welcome Message
          var welcomeName = document.forms["myform"]["first_name_name"].value;
          welcomeName += " ";
          welcomeName += document.forms["myform"]["last_name_name"].value;
          var welcomeEmail =  document.forms["myform"]["email_address_name"].value;
          var welcomePhone = document.forms["myform"]["phone_number_name"].value;
          var welcomeStudent = document.forms["myform"]["student_address_name"].value;
          var welcomeMessage = document.createTextNode("Welcome, " + welcomeName + "!" +  " Your email is: " + welcomeEmail +
          ". Your Phone Number is: " + welcomePhone + ". Your student address is: " + welcomeStudent + ".");
          var welcomeMessageLoc = document.getElementById('displayinfo');
          welcomeMessageLoc.appendChild(welcomeMessage);
          welcomeMessageLoc.replaceChild(welcomeMessage, welcomeMessageLoc.childNodes[0]);

          break;
      }
    }
  }
}
window.addEventListener("load", validateData, false);
console.log(document)



