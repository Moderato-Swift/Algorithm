n = int(input())
movement = input().split()

move_guide = ['L', 'R', 'U', 'D']
move_x = [0, 0, -1, 1]
move_y = [-1, 1, 0, 0]

x, y = 1, 1

for move in movement:
    for i in range(len(move_guide)):
        if(move == move_guide[i]):
            check_x = x + move_x[i]
            check_y = y + move_y[i]
    if(check_x < 1 or check_x > n or check_y < 1 or check_y > n):
        continue
    x, y = check_x, check_y

print(x, y)
