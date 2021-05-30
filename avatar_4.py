n, m = map(int, input().split())
a, b, d = map(int, input().split())

move = [[0] * m for _ in range(n)]
move[a][b] = 1

move_x = [-1, 0, 1, 0]
move_y = [0, 1, 0, -1]

map_state = list()
for i in range(m):
    map_state.append(list(map(int, input().split())))

for i in map_state:
    print(i)


def turn_left():
    global d
    d -= 1
    if(d == -1):
        d = 3


count, turn = 1, 0
while(True):
    turn_left()
    check_x = a + move_x[d]
    check_y = b + move_y[d]
    print(check_x, check_y, turn)
    if(move[check_x][check_y] == 0 and map_state[check_x][check_y] == 0):
        move[check_x][check_y] = 1
        a += check_x
        b += check_y
        count += 1
        turn = 0
        continue
    else:
        turn += 1
    if(turn == 4):
        check_x = a - move_x[d]
        check_y = b - move_y[d]
        if(map_state[check_x][check_y] == 0):
            a += check_x
            b += check_y
        else:
            break
        turn = 0

print(count)
