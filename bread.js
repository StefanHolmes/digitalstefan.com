function calcBread() {
    // This isn't a great way to do this, but it works. 

    const flourRatio = document.querySelector("#flour_ratio").value
    const waterRatio = document.querySelector("#water_ratio").value
    const yeastRatio = document.querySelector("#yeast_ratio").value
    const saltRatio = document.querySelector("#salt_ratio").value
    const oilRatio = document.querySelector("#oil_ratio").value
    const flourWeight = document.querySelector("#flour_weight").value

    const flourConst = flourWeight / flourRatio

    document.querySelector("#water_calc").textContent = waterRatio * flourConst
    document.querySelector("#yeast_calc").textContent = yeastRatio * flourConst
    document.querySelector("#salt_calc").textContent = saltRatio * flourConst
    document.querySelector("#oil_calc").textContent = oilRatio * flourConst
}