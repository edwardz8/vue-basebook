import batters from '../../public/batters_2020.json'
import pitchers from '../../public/pitchers_2020.json'

export default {
    getBatters(cb) {
        setTimeout(() => cb(batters))
    },
    getPitchers(cb) {
        setTimeout(() => cb(pitchers))
    },
}