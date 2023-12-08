const toggleNav = () => 
{
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const getGrills = async () => {
    try {
        const response = (await fetch("https://server-qb5v.onrender.com/api/grills"));
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const showGrills  = async () => {
    let grills = await getGrills();
    let grillsDiv = document.getElementById("grill-list");
    grillsDiv.innerHTML = "";
    grills.forEach((grill) => {
        const section = document.createElement("section");
        grillsDiv.append(section);

        const  a = document.createElement("a");
        a.href = "#";
        section.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = grill.title;
        a.append(h3);

        if(grill.img) {
        const img = document.createElement("img");
        section.append(img);
        img.src = "https://server-qb5v.onrender.com/" + grill.img;
        } 

        const h4 = document.createElement("p");
        h4.innerHTML = grill.descript;
        a.append(h4);

        a.onclick = (e) => {
            e.preventDefault();
            displayDetails(grill);
        }
    });
};

const displayDetails = (grill) => 
{
    const grillDetails = document.getElementById("grill-details");
    grillDetails.innerHTML = "";

    const dLink = document.createElement("a");
    dLink.innerHTML = " &#x2715;";
    grillDetails.append(dLink);
    dLink.id = "delete-link";

    const eLink = document.createElement("a");
    eLink.innerHTML = "&#9998;";
    grillDetails.append(eLink);
    eLink.id = "edit-link";

    const h3 = document.createElement("h3");
    h3.innerHTML = grill.title;
    grillDetails.append(h3);

    const h4 = document.createElement("p");
    h4.innerHTML = grill.descript;
    grillDetails.append(h4);


    eLink.onclick = (e) => {
        e.preventDefault();
        document.querySelector(".dialog").classList.remove("transparent");
        document.getElementById("second-title").innerHTML = "Edit Grill";
    };
    dLink.onclick = (e) => {
        e.preventDefault();
        deleteGrill(grill);
    };
    populateEditForm(grill);
};



const deleteGrill = async (grill) => {
    let response = await fetch(`https://server-qb5v.onrender.com/api/grills/${grill.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });

    if(response.status != 200)
    {
        console.log("Error delete");
        return;
    }

    let result = await response.json();
    showGrills();
    document.getElementById("grill-details").innerHTML = "";
    resetForm();
};

const populateEditForm = (grill) => {
    const form = document.getElementById("add-grill");
    form._id.value = grill.id;
    form.title.value = grill.title;
    form.descript.value = grill.descript;
};

const addGrill = async (e) => 
{
    e.preventDefault();
    const form = document.getElementById("add-grill");
    const formData = new FormData(form);
    let response;

    if(form._id.value == -1) {
        formData.delete("_id");
    
        response = await fetch("https://server-qb5v.onrender.com/api/grills", {
            method: "POST",
            body: formData,
        });
    }

        else { 
            response = await fetch(`https://server-qb5v.onrender.com/api/grills/${form._id.value}`,{
                method: "PUT",
                body: formData,
            });
        }
    if(response.status != 200) {
        console.log("Error contacting server");
        return;
    }
    grill = await response.json();

    if(form._id.value != -1)
    {
        displayDetails(grill);
    }

    document.querySelector(".dialog").classList.add("transparent");
    resetForm();
    showGrills();
};

const resetForm = () => {
    const form = document.getElementById("add-grill");
    form.reset();
    form._id = "-1";
};

const showHideAdd = (e) => {
    e.preventDefault();
    document.querySelector(".dialog").classList.remove("transparent");
    document.getElementById("second-title").innerHTML = "Add your Grill";
    resetForm();
};


window.onload = () => 
{
    showGrills();
    document.getElementById("add-grill").onsubmit = addGrill;
    document.getElementById("add-link").onclick = showHideAdd;


    document.querySelector(".close").onclick = () => {
        document.querySelector(".dialog").classList.add("transparent");
    };
    
    document.getElementById("hamburger").onclick = toggleNav;
}