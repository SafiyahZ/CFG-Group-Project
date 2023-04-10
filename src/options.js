import {api_key} from "./env";

export const catOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "x-api-key": api_key,
    },
}