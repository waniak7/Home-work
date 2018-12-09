// 1st level

while (isFree('north')) {
    north();
}

// 2nd level

do {
    east();
}
while (isFree('east'));

// 3rd level

for (let i = 0; i < 7 ; i++) {
    south();
    east();
}

// 4th level

while (isFree('south')) {
    south();
    while (isFree('east')) {
        east();
    }
}

// 5th level

while (isFree('east')) {
    east();
}
for (let i = 0; i < 2; i++) {
    while (isFree('south')) {
        south();
    }
    while (isFree('west')) {
        west();
    }
}
while (isFree('north')) {
    north();
}
while (isFree('west')) {
    west();
}
while (isFree('south')) {
    south();
}
while (isFree('east')) {
    east();
}

// 6th level

while (isFree('south')) {
    south();
}
while (isFree('east')) {
    east();
    while (isFree('north')) {
        north();
    }
}
while(isFree('south')||isFree('west')) {
    south();
    west();
}
while (isFree('east')) {
    east();
}

// 7th level

while (isFree('south')) {
    south();
}
while (isFree('east')) {
    east();
}
while (isFree('north')) {
    north();
}
while (isFree('east')) {
    east();
}
while (isFree('south')) {
    south();
}
while (isFree('east')) {
    east();
}
while (isFree('south')) {
    south();
}
while (isFree('west')) {
    west();
}
while (isFree('south')) {
    south();
}
while (isFree('east')) {
    east();
}
while (isFree('south')) {
    south();
}
while (isFree('east')) {
    east();
}