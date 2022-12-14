// import the data from app.js

const tableData = data;

// Reference the HTML table using d3

var tbody = d3.select("tbody")

// function to build table with data

function buildTable(data) {
    tbody.html("");


// forEach loop to iterate through each row of data
    data.forEach((dataRow) => {
        
        // Find the tbody tag in the html and add a table row (tr)
        let row = tbody.append("tr");

        // Loop through each dataRow argument referencing one object from the array
        // and append one object to a row on the table.
        Object.values(dataRow).forEach((val) => {

            // creating variable to append the value to the table data (td)
            let cell = row.append("td");

            // add the values
            cell.text(val);
    }
   
    );

});

};

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);