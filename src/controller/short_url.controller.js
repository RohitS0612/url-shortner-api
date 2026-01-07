import { nanoid } from "nanoid";
import { genrateNanoId } from "../utils/helper.js";
import { createShortUrlService } from "../service/short_url.service.js";

export const createShortUrl = async (req, res) => {
    const {url} = req.body;

    const shortUrl = await createShortUrlService(url);
    res.send(shortUrl);
}