$('document').ready(function(){

    // implemented with Knuth-Morris-Pratt algorithm
    function preprocess(input) {
        var table = [].fill.call({ length: input.length }, 1);
        var shift = 1;
        var iterator = table.entries();

        for (let e of iterator) {
            while (shift <= e[0] && e[1] != input[e[0] - shift]) {
                shift += table[e[0] - shift];
            }
            table[e[0] + 1] = shift;
        }
        return table;
    };

    function single_match(input, haystack) {
        var table = preprocess(input);
        var i = 0, match = 0;
        while (i + match < haystack.length) {
            if (input[match] == haystack[i + match]) {
                match += 1;
                if (match == input.length) {
                    return true;
                }
            } else {
                if (match == 0) {
                    i += 1;
                } else {
                    i += match - table[match];
                }
            }
        }
        return false;
    };

    $("#submit").click(function() {
        var input = $('#searchbox').val();
        matches = match(input);

    });


});
