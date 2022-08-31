// import the data from app.js

const tableData = data;

// Reference the HTML table using d3

var tbody = d2.select("tbody")

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

}