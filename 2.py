

str = input('Введите текст: ')
alphabct = 'QAZWSXEDCRFVTGBYHNUJMIKOLPqazwsxedcrfvtgbyhnujmikolp'
for symbol in str:
    for letter in alphabct:
            if letter == symbol:
                print(letter, '->', str.count(symbol))+