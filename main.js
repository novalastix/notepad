const pageTitle = document.getElementById("title");
const main = document.getElementById("main");
const page = document.getElementById("page");
const markdownPage = document.getElementById("markdown");

var edit = true;
var pageText = "";
var letter=true;

function printPage()
{
    window.print();
    return false;
}

function rename()
{
    let name = prompt("Document Name", document.title);
    if (name == null || name == "") name="Notepad";
    pageTitle.innerHTML="";
    pageTitle.appendChild(document.createTextNode(name));
    document.title=name;
    return false;
}

function changeView()
{
    if(edit)
    {
        edit=false;
        page.style.display = "none";
        pageText = page.value
        markdownPage.innerHTML = markdown(pageText);
        markdownPage.style.display = "unset";
    }
    else
    {
        edit=true;
        markdownPage.style.display = "none";
        markdownPage.innerHTML="";
        page.value=pageText
        page.style.display = "unset";
    }
    return false;
}

function changeSize()
{
    if(letter)
    {
        letter = false;

        main.style.maxWidth = "4in";
        main.style.maxHeight = "6in";
    }
    else
    {
        letter = true;

        main.style.maxWidth = "8.5in";
        main.style.maxHeight = "11in";
    }
    return false;
}