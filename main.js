const ups = Array.from(document.querySelectorAll(".up"));
const downs = Array.from(document.querySelectorAll(".down"));
const replies = Array.from(document.querySelectorAll(".reply"));
const reports = Array.from(document.querySelectorAll(".report"));
// set attributes to elements
function setAtt(el, attrs) {
    for(key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}
ups.forEach(up => {
    up.addEventListener("click", function() {
        let counter = parseInt(up.nextElementSibling.textContent);
        counter++;
        up.nextElementSibling.textContent = counter;
    });
});

downs.forEach(down => {
    down.addEventListener("click", function() {
        let counter = parseInt(down.previousElementSibling.textContent);
        if(counter > 0) {
            counter--;
        }
        down.previousElementSibling.textContent = counter;
    });
});

replies.forEach(reply => {
    reply.addEventListener("click", function(e) {
        e.stopPropagation();
        let form = document.createElement("form");
        let text = document.createElement("input");
        setAtt(text, {type: "text", class: "text"});
        let addCom  = document.createElement("p");
        setAtt(addCom, {class: "submit input"});
        addCom.innerHTML = "Add";
        form.appendChild(text);
        form.appendChild(addCom);
        document.body.appendChild(form);
        addCom.addEventListener("click", function() {
            this.parentElement.remove();
            comment(text);
        })

    });
});
function comment(field) {
   if(field.value) {
        let msg = document.createElement("p");
        let icon = document.createElement("i");
        setAtt(msg, {class: "msg", style: "z-index: 1111"});
        setAtt(icon, {class: "fas fa-times",});
        let msgText = document.createTextNode("Your comment is created successefully, and it is now under the review.");
        msg.appendChild(msgText);
        msg.appendChild(icon);
        document.body.appendChild(msg);
        icon.addEventListener("click", function(){
            this.parentElement.remove();
        });
   }
   else {
    field.parentElement.remove();
   }
}
reports.forEach( rep => {
    rep.addEventListener("click", function(e) {
        e.stopPropagation();
        report();
    }, false);
});
function report() {
         let msg = document.createElement("p");
         let icon = document.createElement("i");
         setAtt(msg, {class: "msg", style: "z-index: 1111"});
         setAtt(icon, {class: "fas fa-times",});
         let msgText = document.createTextNode("Your request is now under review");
         msg.appendChild(msgText);
         msg.appendChild(icon);
         document.body.appendChild(msg);
         icon.addEventListener("click", function(){
             this.parentElement.remove();
         });
 }


