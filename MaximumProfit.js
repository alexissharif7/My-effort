class MaximumProfit {
    find(input){
        buyPrice = 0;
        sellPrice = 0;
        maxProfit = -1;
        changeBuyIndex = true;

    for(i = 0; i < input.length -1; i++) {
        sellPrice = input[i+1]
        if(changeBuyIndex) {
            buyPrice = input[i];
        }
        if(sellPrice < buyPrice) {
            changeBuyIndex = true
            //??? I'm stuck here... but I know I have to do another else part of the if statement for the place holding profit
            // which is the buy price subtracted from the sales price 
        }
    }

        
        
        
        
        
        
        
        
        return null;
    }
}

module.exports = MaximumProfit;