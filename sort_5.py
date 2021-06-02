# Python Sorting Library

array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

result = sorted(array)
print(result)

array.sort()
print(array)

array_t = [('바나나', 2), ('사과', 5), ('당근', 3)]


def setting(data):
    return data[1]


result_two = sorted(array_t, key=setting)
print(result)
