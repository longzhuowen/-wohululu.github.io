let imgElement = document.querySelector("img");

imgElement.onclick = function () {
    // 获取img标签src属性
    let mySrc = imgElement.getAttribute("src");
    if (mySrc === "images/Becquerel.jpeg") {
        imgElement.setAttribute("src", "images/Becquerel2.jpg")
    } else {
        imgElement.setAttribute("src", "images/Becquerel.jpeg")
    }
};

// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

// function setUserName() {
//     let myName = prompt("请输入你的名字。");
//     if (!myName) {
//         setUserName();
//     } else {
//         localStorage.setItem("Name", myName);
//         myHeading.textContent = "Mozilla niceTry " + myName;
//     }
// }

// if (!localStorage.getItem("Name")) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem("Name");
//     myHeading.textContent = "Mozilla niceTry " + storedName;
// }

// myButton.onclick = function() {
//     setUserName();
// }