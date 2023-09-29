A = [1, 'G', 4, None, (1, 2, 3)]
for x in A:
	x = x + 1
	if type(x) == int:
		print(x)