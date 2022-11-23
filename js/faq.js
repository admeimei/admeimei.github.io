let faqs = [
  {
    "question": "Why do I have to pay a service fee?",
    "answer" : "A service fee is only charged for repairs to devices that are no longer under war-ran-ty. Business customers are not charged a service fee in accord with the terms of their con-tract."
    },
    
    {
    "question": "What is the bond for?",
    "answer" : "The bond is to cover any damage done to the courtesy phone and/or charger. The bond will be refunded upon the safe and undamaged return of the phone and charger."
    },
     
    {
    "question": "Do I need a charger with my courtesy phone?",
    "answer" : "No, a charger is optional. You can add one with the 'Add charger' button. If you don't want one but added one by accident, you can remove it by clicking on the 'Remove charger' button."
    },
  
    {
    "question": " Why isn't my phone under warranty?",
    "answer" : " The length of your phone's warranty depends on the warranty package you chose upon purchase. The standard is 24 months and is calculated from its purchase date."
    },
    {
    "question": " How long will my repair take?",
    "answer" : " Depends on your phone broken status. It takes normally 5 to 7 working days."
    },
    {
    "question": " How do you protect the private information in my phone?",
    "answer" : " We comply with all relevant laws regarding privacy and client confidentiality."
    },
  
    {
    "question": " Where do you get your replacement parts?",
    "answer" : " We will send you a quote of all possible vendors who supply replacement parts for your references and your choice."
    },
  
    {
    "question": " What happens if my phone is further damage after leaving it with you?",
    "answer" : " We make sure that it never happens."
    },
  
    {
    "question": " What kind of warranty do you offer and what does it cover?",
    "answer" : "1 month is the average warranty period. These warranties covers parts and service only."
    },
  
    {
    "question": " What does the repair estimate include?",
    "answer" : " The repair price estimate includes both replacement parts and labor."
    }   

]


$("input#searchBtn").click(function(){
  $("#questions").html("");
  let searchKeyWord = $("input#searchInput").val();
  let results = faqs.filter(function(faqs){
    return faqs.question.indexOf(searchKeyWord) > -1;
  });

  if (results.length == 0) {
    $("#questions").html("No results!!!!!");
  } else {
    for(var i=0; i < results.length; i++) {
      $("#questions").append('<div class="tx">'+'<p class="question-style">' + results[i].question +'</p>'
                              +'<p class="answer-style">' + results[i].answer + '</p>'+'</div>');
    }
  }
});

function openNav() {
	document.getElementById("curtain-nav").style.width = "50%";			
}

function closeNav() {
	document.getElementById("curtain-nav").style.width = "0%";			
}