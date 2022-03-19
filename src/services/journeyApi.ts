import { BASE_URL } from "../constants";

/**
 * @description simulate call to API.
 * @returns {promise}
 */
export default async function fetchJourney() {
  try {
    const response = await fetch(BASE_URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}
