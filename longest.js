
let sentence = "Skilled developers balance frontend and backend prowess to create a harmonious and impactful digital landscape.";
//let sentence = 'Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers.';

function findLongestWord(sentence) {
    // Ignore non english letter, split the sentence into an array of words & find the longest word(s)
    const words = sentence.replace(/[^a-zA-Z\s]/g, '').split(" "); 
    const maxLength = Math.max(...words.map(word => word.length));

    const longestWords = words.filter(word => word.length === maxLength);
    console.log(longestWords);

    // Find the one with the most vowels
    if (longestWords.length == 1) {
        return longestWords[0];
    } 
        else {
            let maxVowelCount = 0;
            let wordWithMaxVowels = '';

            longestWords.forEach(word => {
                const vowelCount = (word.match(/[aeiou]/g)|| []).length;

                if (vowelCount > maxVowelCount) {
                    maxVowelCount = vowelCount;
                    wordWithMaxVowels = word;
                }
        });
        return wordWithMaxVowels;
    }
}

result = findLongestWord(sentence);
console.log(result);