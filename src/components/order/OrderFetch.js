import jsonp from "jsonp";
import moment from "moment";
function fetchData(region, date) {
  const baseUrl = "https://universalis.com/";
  console.log(region)
  const url = `${baseUrl}${region ? region + "/" : ""}${moment(date).format('YYYYMMDD')}/jsonpmass.js`;
  console.log(url, 101)

  return new Promise((resolve, reject) => {
    jsonp(url, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export default fetchData;
