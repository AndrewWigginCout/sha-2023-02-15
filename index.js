let output = document.getElementById("output");
let textarea = document.querySelector("textarea");
function transform(){
  output.innerHTML=make(sha1(textarea.value));
};