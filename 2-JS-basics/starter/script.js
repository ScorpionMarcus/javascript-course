// coding challenge 5

// john
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    tips: [],
    final: [],
    calcTip: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50){
                this.tips[i] = this.bills[i] * .2;
                this.final[i] = this.bills[i] + (this.bills[i] * .2);
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                this.tips[i] =  this.bills[i] * .15;
                this.final[i] = this.bills[i] + (this.bills[i] * .15);
            } else {
                this.tips[i] =  this.bills[i] * .1;
                this.final[i] = this.bills[i] + (this.bills[i] * .1);
            }
        }
    }
}

// mark
var mark = {
    fullName: 'Mark Watney',
    bills: [77, 375, 110, 45],
    tips: [],
    final: [],
    calcTip: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100){
                this.tips[i] = this.bills[i] * .2;
                this.final[i] = this.bills[i] + (this.bills[i] * .2);
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                this.tips[i] =  this.bills[i] * .1;
                this.final[i] = this.bills[i] + (this.bills[i] * .1);
            } else {
                this.tips[i] =  this.bills[i] * .25;
                this.final[i] = this.bills[i] + (this.bills[i] * .25);
            }
        }
    }
}

john.calcTip();
console.log(john);

mark.calcTip();
console.log(mark);

// function to find the average tip
function tipAvg(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// who tips more on average?
john.average = tipAvg(john.tips);
mark.average = tipAvg(mark.tips);

if (john.average > mark.average) {
    console.log('John tips more on average.');
} else if (john.average < mark.average) {
    console.log('Mark tips more on average.');
} else {
    console.log('John and Mark tip the same amount on average.');
}