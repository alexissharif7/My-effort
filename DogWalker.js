class DogWalker {
    numberOfWalksCalculator(dogSizes){
        let numberOfWalks = -1;
        dogSizes = [1, 1, 3, 2, 3]
        // count number of duplicates or occurences
        function countDuplicates(index, number) {
            index[number] = (++index[number] || 1);
        }
        return index  
        // I'm trying to put the dogSizes in tally form
        var duplicates = dogSizes.reduce(countDuplicates, {});
    
        


        // go through count and determine amount of hours
        return numberOfWalks;
    }
}

module.exports = DogWalker;