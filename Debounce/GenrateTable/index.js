document.addEventListener("DOMContentLoaded", () => {

    const rowInput = document.querySelector("#row")
    const columnInput = document.querySelector("#column")
    const tableContainer = document.querySelector("#tableContainer")
    const createTableButton = document.querySelector("#createTable")


    const getTable = () => {
        if(!rowInput.value || !columnInput.value){
            alert("Please enter value");
            return;
        }

        const table = document.createElement("table");
        for(let i=0;i<rowInput.value;i++){
            const row = document.createElement("tr");
            for(let j=0;j<columnInput.value;j++){
                const column = document.createElement("td");
                column.textContent = i+j;
                row.appendChild(column)
            }
            table.appendChild(row)
        }
        tableContainer.innerHTML = "";
        tableContainer.append(table)
    }

    createTableButton.addEventListener("click",() => {
        getTable();
    })
})