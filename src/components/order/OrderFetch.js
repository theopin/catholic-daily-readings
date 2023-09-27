import jsonp from "jsonp";
import moment from "moment";
function fetchData(region, date) {
  const baseUrl = "https://universalis.com/";

  const url = `${baseUrl}${region.value ? region.value + "/" : ""}${moment(date).format('YYYYMMDD')}/jsonpmass.js`;
  console.log(url)

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
