import {compose, filter, map, transduce,find} from 'ramda';

// Our utility functions…

function isFound(item) {
    return item.found;
};

function getPopularity(item) {
    return item.popularity;
}

function addScores({totalPopularity, itemCount}, popularity) {
    return {
        totalPopularity: totalPopularity + popularity,
        itemCount:       itemCount + 1,
    };
}

// Set up our 'transducer' and our initial value.
const filterAndExtract = compose(filter(isFound), map(getPopularity));
const initVal = {totalPopularity: 0, itemCount: 0};

// Here's where the magic happens.
const {totalPopularity, itemCount} = transduce(
    filterAndExtract, // Transducer function (Ramda magically converts it)
    addScores,        // The final reducer
    initVal,          // Initial value
    [
        {
            term: 'doing the bear',
            found: true,
            popularity: 108,
        },
        ]    // The array we want to process
);

// And spit out the average at the end.
const averagePopularity = totalPopularity / itemCount;
console.log("Average popularity:", averagePopularity);