let count = 0;

function count_cards(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    let hold_bet = "Hold";

    if (count > 0) {
        hold_bet = "Bet";
    }

    return (count + " " + hold_bet);
}


count_cards(-1);
count_cards(-2);
count_cards(-54);
count_cards(0);
count_cards(1);
count_cards(2);
count_cards(3);
count_cards(4);
count_cards(5);
count_cards(6);
count_cards(9);
count_cards("J");
count_cards("Q");
console.log(count_cards("K"));