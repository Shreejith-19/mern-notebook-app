import {Redis} from "@upstash/redis"
import {Ratelimit} from "@upstash/ratelimit"
import dotenv from "dotenv"

dotenv.config()

const redis = Redis.fromEnv() //this will read directly from the .env
const ratelimit = new Ratelimit({
    redis,
    limiter : Ratelimit.slidingWindow(60, "60 s"),
})
 
export default ratelimit