import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)


export const formatUtcDatetime = (utcDt: string) => {
    return dayjs.utc(utcDt).local().format('YYYY-MM-DD HH:mm:ss')
}