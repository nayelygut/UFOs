// import data from data.js
const tableData=data;
// reference the html table using d3
var tbody = d3.select("tbody");
// function to build a table
function buildTable(data) {
    // clear out existing data
    tbody.html("");
    // loop through each object in the data
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);

        });
    });
}


function handleClick(){
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(
            row => row.datetime === date);
    }
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);