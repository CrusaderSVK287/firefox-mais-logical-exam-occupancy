// Changing the header of the table
{
    const thList = document.querySelectorAll("th");
    for (const th of thList) {
        const raw = th.textContent.trim();
        const title = th.getAttribute("title");

        if (raw === "K/P" || title === "Kapacita / počet prihlásených") {
            th.textContent = "P/K";
            th.setAttribute("title", "počet prihlásených / Kapacita");
        }
    }
}

// Switching the numerical values
{
    const tdList = document.querySelectorAll("td");
    const pattern = /^\s*(\d+)\s*\/\s*(\d+)\s*$/;

    for (const td of tdList) {
        const match = td.textContent.match(pattern);
        if (match) {
            const first = match[1];
            const second = match[2];
            td.textContent = `${second}/${first}`;
        }
    }
}
