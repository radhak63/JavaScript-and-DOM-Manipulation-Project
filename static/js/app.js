// This program is written by Radha Mahalingam 5-20-19

// Get references to the tbody element, input datetime field and filter button
var $tbody = document.querySelector('tbody');
var $dateInput = document.querySelector('#datetime');
var $filterBtn = document.querySelector('#filter-btn');
var $clrfilterBtn = document.querySelector('#clear-filter-btn');

// Set tableData to Data initially.  Data comes from the data.js file

var tableData = data;

// Render the table for the first time on page load
renderTable();

// Add an event listener to the filterButton, call handleFilterButtonClick, when clicked
$filterBtn.addEventListener('click', handleFilterButtonClick);

// Add an event listener to the clearfilterButton, call handleClearFilterButtonClick, when clicked
$clrfilterBtn.addEventListener('click', handleClearFilterButtonClick);

function renderTable() {
    $tbody.innerHTML = '';
    // console.log(tableData);
    for (var i = 0; i < tableData.length; i++) {
      // Get get the current address object and its fields
      var address = tableData[i];
      var fields = Object.keys(address);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = address[field];
      };
    };
  };

function handleFilterButtonClick() {

    var filterDate = $dateInput.value.toString();
    tableData = data.filter(function(address) {
    var addressDate = address.datetime.toString();
      return addressDate === filterDate;
    });
  // console.log(tableData);
    renderTable();
};

function handleClearFilterButtonClick() {
  tableData = data;
  $dateInput.value = '';
  renderTable();
};
