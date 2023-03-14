var currentBg = -1; // track the current background index
var bgImages = ['new-bg1', 'new-bg2', 'new-bg3', 'new-bg4', 'default-bg']; // array of background class names
var lastBgIndex = -1; // track the last background index

function changeBackground() {
	// remove default background class on first click
	if (currentBg === -1) {
		document.body.classList.remove('default-bg');
	}
	
	// randomly select a new background index that is different from the last one
	var randomIndex;
	do {
		randomIndex = Math.floor(Math.random() * bgImages.length);
	} while (randomIndex === lastBgIndex);
	
	// update the body class to the new background class
	document.body.classList.remove(bgImages[currentBg % bgImages.length]);
	document.body.classList.add(bgImages[randomIndex]);
	
	// update the last background index
	lastBgIndex = randomIndex;
	currentBg = randomIndex;
}

function flashButton(button) {
    button.style.backgroundColor = "#fff";
    button.style.color = "#141414";


    setTimeout(function() {
      button.style.backgroundColor = "#141414";
      button.style.color = "#fff";
    }, 200);
  }

  let prevDivId = null; // variable to keep track of previously visible div

  function toggleDiv(containerId, button) {



    // get the corresponding container element
    var container = document.getElementById(containerId);
  
    // hide the previously visible div
    if (prevDivId !== null) {
      var prevDiv = document.getElementById(prevDivId);
      prevDiv.style.display = "none";
    }
  
    // toggle the visibility of the container
    if (container.style.display === "none") {
      container.style.display = "block";
      prevDivId = containerId; // update the previously visible div
    } else {
      container.style.display = "none";
      prevDivId = null; // reset the previously visible div
    }
  
    // remove active class from previously active button
    var prevButton = document.querySelector(".active");
    if (prevButton !== null) {
      prevButton.classList.remove("active");
    }
  
    // add active class to current button
    button.classList.add("active");
  }

  function hideCheckout() {
    var cart = document.getElementById("cart");
    cart.style.display = "none";
  }

  const imageItems = document.querySelectorAll('.image-item');
  const thumbnail = document.getElementById('thumbnail');

  imageItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('fullscreen');
      thumbnail.classList.toggle('hidden');
    });
  });
  
  const fullscreenItems = document.querySelectorAll('.fullscreen');
  
  fullscreenItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.remove('fullscreen');
      thumbnail.classList.remove('hidden');
    });
  });