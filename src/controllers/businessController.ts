import { Request, Response } from "express";
const querystring = require("querystring"); 
import { validateQueryParams } from "./validateQueryParams";

const API_KEY = process.env["API_KEY"];
const options = { 
    method: 'GET',
    headers: {
        accept: 'application/json',
        authorization: 'Bearer ' + API_KEY
    }
};

export const getBusinesses = async (req: Request, res: Response) => {
    validateQueryParams(req, res);

    const queryParamsString = querystring.stringify(req.query)

    const url = "https://api.yelp.com/v3/businesses/search?" + queryParamsString


     const businesses = await fetch(url, options)
         .then((response) => {
            return response.json()
         })
         .catch(err => console.error(err));

         res.send(businesses)
         return;
};

export const getBusinessByID = async (req: Request, res: Response) => {
    const businessID = req.params.id;

    const url = "https://api.yelp.com/v3/businesses/" + businessID

    const business = await fetch(url, options)
    .then((response) => {
       return response.json()
    })
    .catch(err => console.error(err));

    res.send(business)
    return;
};