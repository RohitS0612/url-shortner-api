import { nanoid } from "nanoid";
import { genrateNanoId } from "../utils/helper"

export const createShortUrlService  = (url) => {
    const shortUrl = genrateNanoId(7);
    const newUrl = new urlSchema({
        full_url: url,
        short_url: shortUrl
    })
    newUrl.save();
    
    return shortUrl;
}