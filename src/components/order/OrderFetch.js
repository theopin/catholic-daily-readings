
import jsonp from "jsonp"


    // const baseUrl = 'https://universalis.com/';
    // const url = `${baseUrl}${region ? region + '/' : ''}${formatDate(date)}/jsonpmass.js`;

function fetchData(date) {

  const region = "Asia.Singapore"
  const baseUrl = 'https://universalis.com/';
  const url = `${baseUrl}${region ? region + '/' : ''}${formatDate(date)}/jsonpmass.js`;

  return new Promise((resolve, reject) => {
    jsonp(url, { param: 'callback' }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Function to format the date as YYYYMMDD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}${month}${day}`;
}


export default fetchData