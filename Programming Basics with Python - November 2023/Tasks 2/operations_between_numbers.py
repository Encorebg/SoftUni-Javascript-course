num_one = int(input())
num_two = int(input())
operator = input()
odd_or_even = ''
result = 0

if operator == "-" or operator == "+" or operator == "*":
    if operator == "-":
        result = num_one - num_two
    elif operator == "+":
        result = num_one + num_two
    else:
        result = num_one * num_two
    if result % 2 == 0:
        odd_or_even = "even"
    else:
        odd_or_even = "odd"
    print(f"{num_one} {operator} {num_two} = {result} - {odd_or_even}")
elif operator == "/":
    if num_two == 0:
        print(f"Cannot divide {num_one} by zero")
    else:
        result = num_one / num_two
        print(f"{num_one} / {num_two} = {result:.2f}")
else:
    if num_two == 0:
        print(f"Cannot divide {num_one} by zero")
    else:
        result = num_one % num_two
        print(f"{num_one} % {num_two} = {result}")
