const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const screenerUrl = 'https://en.wikipedia.org/wiki/List_of_companies_listed_on_the_National_Stock_Exchange_of_India';

// Function to fetch data from Screener.in
async function fetchData() {
  try {
    // Make a GET request to the Screener.in website
    const response = await axios.get(screenerUrl);


    // Load the HTML content of the page into Cheerio
    const $ = cheerio.load(response.data);

    // console.log(response.data);


    // Now, you can use Cheerio to select and extract data from the HTML
    const data =  $('tr').text().trim();
    

    fs.writeFile('test.txt', str, ()=> 'success');
  

    // Print the extracted data

    console.log(`Data: ${data}`);

    
  } catch (error) {
    console.error('Error fetching data:', error.message);

  }
}

// Call the fetchData function to initiate the scraping process
fetchData();
