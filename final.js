const fileInput = document.querySelector("input");
const downloadBtn = document.getElementById("submitBtn");
const urlInput = document.getElementById("url");
const select = document.getElementById("YesNo");
const myForm = document.forms['myForm'];
const image = document.getElementById('image');
const resetBtn = document.getElementById("resetBtn");

downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    downloadBtn.innerText = "Downloading file...";
    fetchFile(fileInput.value);
    // Time out function letting downloader know that file finished downloading
});

resetBtn.addEventListener("click", (e) => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(result => {
        console.log(result)
        image.src = result.message
        document.getElementById("blurb").innerHTML = "You've reset your URL. This cute dog wants you to add another URL to download from."
    })
    .catch(err => console.log(err))
})

function fetchFile(url) {
    fetch(url)
    .then(res => res.blob())
    .then(file => {
        localStorage.setItem("url", urlInput.value);
        storedValue = localStorage.getItem("url")
        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        downloadBtn.innerText = "Downloaded File from " + storedValue;
        URL.revokeObjectURL(tempUrl);
        aTag.remove();
        setTimeout(delayedAlert, 2000);
        return true;
    }).catch(() => {
        alert("Failed to download file!");
        downloadBtn.innerText = "Download File";
        return false;
    });
}

function delayedAlert() {
    alert("Download has completed.");
};

const handleSelect = (selectElement) => {
    const selectedValue = selectElement.value;
    if (selectedValue == 'YesOp') {
        urlInput.parentElement.classList.remove("hidden");
        return true;
    } else if (selectedValue == 'NoOp') {
        urlInput.parentElement.classList.add("hidden");
        return false;
    }
};

select.addEventListener("change", () => handleSelect(select));

myForm.url.oninvalid=_=> {
    myForm.url.setCustomValidity('Not a valid url')
}
myForm.onsubmit=evt=> {
    evt.preventDefault()
    console.clear()
    console.log('url = ', myForm.url.value);
}

/*const validateUrl = (urlField) => {
    const re = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
    if (re.test(urlField.value.trim())) {
        urlField.parentElement.classList.remove("invalid");
        return true;
    } else {
        urlField.parentElement.classList.add("invalid");
        return false;
    }
};

form.addEventListener("input", (e) => {
    e.preventDefault();
    validateUrl(urlInput);
});*/