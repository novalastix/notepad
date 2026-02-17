const page = document.getElementById("page");
var letter=true;

function printPage()
{
    window.print();
    return false;
}

function downloadPage()
{
    var txtBlob = new Blob([page.value], {type:'text/plain'});
    var dlLink = document.createElement("a");
    	dlLink.download = "note.txt";
    	dlLink.innerHTML = "Download File";
    	if (window.webkitURL != null)
    	{
    		dlLink.href = window.webkitURL.createObjectURL(txtBlob);
    	}
    	else
    	{
    		dlLink.href = window.URL.createObjectURL(txtBlob);
    		dlLink.onclick = destroyClickedElement;
    		dlLink.style.display = "none";
    		document.body.appendChild(dlLink);
    	}
    	dlLink.click();
    return false;
}

function changeSize()
{
    if(letter)
    {
        letter = false;

        main.style.maxWidth = "unset";
        main.style.maxHeight = "unset";
    }
    else
    {
        letter = true;

        main.style.maxWidth = "8.5in";
        main.style.maxHeight = "11in";
    }
    return false;
}

function qr()
{
    var txt = page.value;
    var barcodeAPI = "https://barcodeapi.org/api/qr/"
    window.open(barcodeAPI+txt, "_blank");
}