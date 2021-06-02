n = int(input())

array = []
for i in range(n):
    check = input().split()
    array.append((check[0], int(check[1])))

array = sorted(array, key=lambda student: student[1])

for s in array:
    print(s[0], end=' ')
