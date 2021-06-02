n, m, k = map(int, input().split())
num_data = list(map(int, input().split()))

num_data.sort()
first = num_data[n - 1]
second = num_data[n - 2]

count = int(m / (k + 1)) * k
count += m % (k + 1)

result = 0
result += (count) * first
result += (m - count) * second

print(result)
