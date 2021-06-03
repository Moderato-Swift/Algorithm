# Binary Search(7 - 5)

def binary_search(array, target, start, end):
    if(start > end):
        return False
    mid = (start + end) // 2
    if(array[mid] == target):
        return True
    elif(array[mid] > target):
        return binary_search(array, target, start, mid - 1)
    else:
        return binary_search(array, target, mid + 1, end)


n = int(input())
shop = list(map(int, input().split()))
shop.sort()

m = int(input())
customer = list(map(int, input().split()))

for count in customer:
    if(binary_search(shop, count, 0, len(shop) - 1)):
        print("Yes", end=' ')
    else:
        print("No", end=' ')
