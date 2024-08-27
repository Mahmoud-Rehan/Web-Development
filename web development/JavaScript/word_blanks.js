function word_blanks(noun, adj, verb, adv) {
    let result = "";

    result += "The " + adj + " " + noun + " " + verb + " " + adv;

    return result;
}


console.log(word_blanks("man", "strong", "works", "hard"));
console.log(word_blanks("bike", "slow", "flew", "slowly"));