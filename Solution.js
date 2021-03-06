verify(/car|cat/,
       ["my car", "bad cats"],	
       ["camper", "high art"]);

verify(/pop|prop/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/ferret|ferry|ferrari/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/[ious]\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s(.|,|:|;)/,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/\d{6}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/\b[a-df-z]+\b/i,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      print("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      print("Unexpected match for '" + s + "'");
  });
}
