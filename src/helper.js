export function randomNumber(min = 0, max = 100){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}

// тут будет рандомайзер export используй