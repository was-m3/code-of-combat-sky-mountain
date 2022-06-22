helper.moveLeft(1);

for (var i = 0; i < 3; i = i + 1) {
    helper.moveUp();
    helper.build("rightArrow");
    helper.moveRight();
    helper.build("upArrow");
}
