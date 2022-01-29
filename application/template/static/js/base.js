var dropFileForm = document.getElementById("dropFileForm");
var fileLabelText = document.getElementById("fileLabelText");
var uploadStatus = document.getElementById("uploadStatus");
var fileInput = document.getElementById("fileInput");
var predpara = document.getElementById("predpara");
var validFile = false;
var droppedFiles;

function overrideDefault(event) {
  event.preventDefault();
  event.stopPropagation();
}

function fileHover() {
  dropFileForm.classList.add("fileHover");
}

function fileHoverEnd() {
  dropFileForm.classList.remove("fileHover");
}

function addFiles(event) {
  droppedFiles = event.target.files || event.dataTransfer.files;
  showFiles(droppedFiles);
}

function showFiles(files) {
    var exte = files[0].name.split('.')[1];
    if (exte == 'png' || exte == 'jpg') {
      fileLabelText.innerText = files[0].name;
      validFile = true;
    }
    else{
      fileLabelText.innerText = 'File type not allowed. Use either .jpg or .png file.';
    }
  }

function uploadFiles(event) {
  event.preventDefault();
  if (validFile) {
  var formData = new FormData();

  for (var i = 0, file; (file = droppedFiles[i]); i++) {
    formData.append(fileInput.name, file, file.name);
  }

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(data) {
    console.log(xhr.response);
  };


  xhr.onload = function() {
    var response = JSON.parse(this.responseText);
    var predictedClass = response.class_name;
    console.log(predictedClass);

    if (predictedClass == 'size_error'){
      predpara.textContent  = 'Uploaded image should have dimensions of atleast (512px x 512px)';
    }
    else if(predictedClass != ''){
      predpara.textContent = 'Prediction for uploaded image : ' + predictedClass +'.';
    }
    else{
      predpara.style.display = "none";
    }
}

  xhr.open(dropFileForm.method, dropFileForm.action, true);
  xhr.send(formData);
  fileLabelText.innerText = "Choose a file or drag it here";
  dropFileForm.reset();
  validFile = false;
}
}

// function changeStatus(text) {
//   uploadStatus.innerText = text;
// }