def solution(money):
    count = 0
    coin_types = [500, 100, 50, 10]
    for coin in coin_types:
        count += money // coin
        money %= coin
    return count


solution(1260)
solution(2830)
