$('document').ready(function(){

    var table;

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

    function single_match(single_str) {
        var input = $('#searchbox').val();
        var i = 0, match = 0;
        while (i + match < single_str.length) {
            if (input[match] == single_str[i + match]) {
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

    function match(input, diagnoses) {
        var table = preprocess(input);
        var results = [];
        diagnoses.foreach(function(diagnosis_name) {
            if (single_match(diagnosis_name)) {
                results.push(diagnosis_name);
            }
        });
        return results;
    };

    $("#submit").click(function() {
        var diagnoses = jQuery.get('../short_diagnoses.txt');
        diagnoses = diagnoses.split("\n");
        var input = $('#searchbox').val();        
        var matches = match(input, diagnoses);
        matches.foreach(function(match) {
            $('#results').append('<li class="result">' + match + '</li>');
        });
    });


});
