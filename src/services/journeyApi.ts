import { BASE_URL } from "../constants";
import { Journey } from "./types";

/**
 * @description simulate call to API.
 * @returns {promise}
 */
export default async function fetchJourney(): Promise<Journey | unknown> {
  try {
    const response = await fetch(BASE_URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return await response.json();
  } catch (e) {
    return e;
  }
}
