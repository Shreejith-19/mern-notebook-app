import ratelimit from "../config/upstash.js"

export async function rateLimiter(req, res, next){
    try {
        const {success} = await ratelimit.limit(req.ip)// returns false if rate-limit exceeded
        //limit-key, you can use "req.ip" as key, but if ip is shared, it will affect everyone using the ip, or use combination of userid || req.ip
        if(!success){
            return res.status(429).json({"Error Message":"You are sending too many requests, try again later."})
        }
        next()
    }catch(error){
        console.error(error)
        next(error)//skip other middleware and jump to the error handling middleware
    }
}