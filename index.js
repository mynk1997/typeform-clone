let index=0;
const data= [
    {
      question: "What is the capital of France?",
      answer: "",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      answer: ""
    },
    {
      question: "What is the largest planet in our solar system?",
      answer: ""
    },
    {
      question: "What is the chemical symbol for gold?",
      answer: ""
    },
    {
      question: "In which year did World War II end?",
      answer: ""
    }
  ];
  
const generateQuestion=(index)=>{
    if(localStorage.getItem("answer")){  
        document.getElementById("response").value=JSON.parse(localStorage.getItem("answer"))[index].answer;
    }
    document.getElementById("question-block").innerHTML=data[index].question;
    document.getElementById("question-number").innerHTML=index +1;

}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click",()=>{
    const response=document.getElementById("response")
    data[index].answer=response.value;
    localStorage.setItem("answer",JSON.stringify(data));
    console.log("response",response.value, data)
    if(index==data.length-1) {
        return
        //Return to Server
    }

    index+=1;
    if(index==data.length-1) {
        submitButton.innerHTML="Submit";
    }
    generateQuestion(index);
    console.log("index:", index)
})


generateQuestion(index);