name_of_first_player = input()
name_of_second_player = input()
game_over = False
first_player_points = 0
second_player_points = 0
while True:
    first_player_card = input()
    if first_player_card == "End of game":
        game_over = True
        break
    first_player_card = int(first_player_card)
    second_player_card = int(input())

    if first_player_card > second_player_card:
        first_player_points += first_player_card - second_player_card
    elif second_player_card > first_player_card:
        second_player_points += second_player_card - first_player_card
    else:
        print(f"Number wars!")
        first_player_card = int(input())
        second_player_card = int(input())

        if first_player_card > second_player_card:
            print(f"{name_of_first_player} is winner with {first_player_points} points")
            break
        else:
            print(f"{name_of_second_player} is winner with {second_player_points} points")
            break


if game_over:
    print(f"{name_of_first_player} has {first_player_points} points")
    print(f"{name_of_second_player} has {second_player_points} points")





