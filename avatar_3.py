n = input()
col, row = int(ord(n[0]) - ord('a')) + 1, int(n[1])

movement = [(2, -1), (2, 1), (-2, -1), (-2, 1),
            (1, 2), (1, -2), (-1, 2), (-1, -2)]

count = 0

for move in movement:
    check_col = col + move[0]
    check_row = row + move[1]
    if(check_col < 1 or check_row < 1 or check_col > 8 or check_row > 8):
        continue
    count += 1

print(count)
