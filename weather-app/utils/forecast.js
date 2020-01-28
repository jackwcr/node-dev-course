const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const URL =
    "https://api.darksky.net/forecast/0db133ec4c167894466913d69ac0835e/" +
    latitude +
    "," +
    longitude;

  request({ url: URL, json: true }, (error, { body }) => {
    if (error) {
      callback("Error connecting to the forecast services", undefined);
    } else if (body.error) {
      callback("Unable to find forecast", undefined);
    } else {
      callback(undefined, {
        temperature: body.hourly.data[0].temperature,
        summary: body.hourly.summary,
        precipitationProbability: body.hourly.data[0].precipProbability
      });
    }
  });
};

module.exports = forecast;
