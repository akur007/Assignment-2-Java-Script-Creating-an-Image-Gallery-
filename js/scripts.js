// Function to change background color and display student ID
function changeCustomColor() {
    var customNumber = document.getElementById("customNumber").value;
    var color = "";
    var studentId = document.getElementById("myStudentId");
    studentId.textContent = "";

    if (customNumber < 0 || customNumber > 100) {
        color = "red";
    } else if (customNumber >= 0 && customNumber <= 20) {
        color = "green";
    } else if (customNumber > 20 && customNumber <= 40) {
        color = "blue";
    } else if (customNumber > 40 && customNumber <= 60) {
        color = "orange";
    } else if (customNumber > 60 && customNumber <= 80) {
        color = "purple";
    } else {
        color = "yellow";
    }

    document.body.style.backgroundColor = color;
    studentId.textContent = "Student ID: " + customNumber;
}

// Function to change background color with random number
function changeRandomColor() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("customNumber").value = randomNumber;
    changeCustomColor();
}

// Function to generate options for select tag
function generateOptions() {
    var select = document.getElementById("imageSelect");
    var images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; // Update with your image filenames
    for (var i = 0; i < images.length; i++) {
        var option = document.createElement("option");
        option.value = images[i];
        option.textContent = images[i];
        select.appendChild(option);
    }
}

// Function to display selected image
function displayImage() {
    var select = document.getElementById("imageSelect");
    var imageName = select.value;
    document.getElementById("displayedImage").src = "img/" + imageName;
}

// Event listeners
document.querySelector(".custColor").addEventListener("click", changeCustomColor);
document.querySelector(".randColor").addEventListener("click", changeRandomColor);
document.getElementById("imageSelect").addEventListener("change", displayImage);

// Generate options when page loads
window.onload = generateOptions;
