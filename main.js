for (var i = 0; i < 2; i++) {
    north();
}


for (var i = 0; i <= 15; i++) {
    east();
}


for (var i = 0; i < 7; i++) {
    south();
    east();
}

for (var i = 0; i < 13; i++) {
    if (isFree('south')) {
        south();
    }
    else {
        east();
    }
}

var previousStep = '';
for (var i = 0; i <= 30; i++) {
    if (isFree('north') && previousStep != 'south') {
        previousStep = 'north';
        north();

    }
    else if (isFree('east') && previousStep != 'west') {
        previousStep = 'east';
        east();
    }
    else if (isFree('south') && previousStep != 'north') {
        previousStep = 'south';
        south();
    }
    else {
        previousStep = 'west';
        west();
    }
}