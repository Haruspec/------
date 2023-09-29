while True:
    text = input()
    if text == 'stop':
        break
    print(*iter(input, 'stop'))


# v = input('Введите в строку: ')
# set_v = set(v)
# for k in set_v:
#     print(k, '->', v.count(k))
