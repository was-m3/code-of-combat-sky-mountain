// Don't touch the boss code until Vega says you're ready!
for (var i = 0; i < 100; i++) {
    boss.moveLeft(5);
    boss.moveRight(5);
}

// Build your Helper items BELOW this line
helper.moveRight(1);
helper.build("rightArrow");
for (var i = 0; i < 5; i = i + 1) {
helper.moveRight(1);
helper.build("rightArrow");
}
for (var i = 0; i < 2; i++) {
    helper.moveLeft();