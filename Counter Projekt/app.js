let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        console.log(e)
        const styles = e.currentTarget.classList;
        if (styles.contains("minus")) {
            count--;
        } else if (styles.contains("plus")) {
            count++;
        } else {
            count=0;
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    }); 
});