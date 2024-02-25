import React from "react";

const now = new Date();
const dateOptions = {weekday: "long", hour: '2-digit', minute: '2-digit'}

export const CurrentDateInfo = () => {
  return now.toLocaleTimeString("en", dateOptions)
}

export const GetHours = (timestamp) => {
  const date = new Date(timestamp);
  const utcDate = new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds()
    )
  );
  const hours = utcDate.getUTCHours();
  const minutes = utcDate.getUTCMinutes();
  return `${hours < 10 ? '0' + hours : hours} : ${
    minutes < 10 ? '0' + minutes : minutes
  }`;
};

export const UppercasedWord = (word) => {
  return word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : '';
};

export const ConvertToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};