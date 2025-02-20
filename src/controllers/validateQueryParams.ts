import { Request, Response } from "express";

export const validateQueryParams = (req: Request, res:Response) => {
    const {
        location,
        latitude,
        longitude
    } = req.query

    if (typeof location == 'undefined') {
        if (typeof latitude == 'undefined' && typeof longitude == 'undefined') {
            return res.sendStatus(400)
        }
    }

    return
}