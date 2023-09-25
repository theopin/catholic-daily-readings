import jsonp from "jsonp";

// const baseUrl = 'https://universalis.com/';
// const url = `${baseUrl}${region ? region + '/' : ''}${formatDate(date)}/jsonpmass.js`;

function fetchData(date) {
  console.log(20222);
  const region = "Asia.Singapore";
  const baseUrl = "https://universalis.com/";
  const url = `${baseUrl}${region ? region + "/" : ""}${formatDate(date)}/jsonpmass.js`;
  console.log(url)
  return new Promise((resolve, reject) => {
    jsonp(url, (err, data) => {
      console.log("errrrrrrr");
      if (err) {
        console.log(10101);
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
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}${month}${day}`;
}

export default fetchData;
