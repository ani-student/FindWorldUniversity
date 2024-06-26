let url = "http://universities.hipolabs.com/search?name=";

let college1 = "nepal";

let btn = document.querySelector(".btn")

btn.addEventListener("click", async () => {
    let Input = document.querySelector("input").value
    let ResData = await college(Input)
    show(ResData)
})



function show(ResData) {
    let item = document.querySelector(".item");
    for (const col of ResData) {
        let li = document.createElement("li");
        let list = item.appendChild(li)
        list.innerHTML = col.name
     
    }

}

async function college(data) {

    try {
        let res = await axios.get(url + data)
        return res.data
    } catch (e) {
        console.log("error", e)
        return []
    }

}