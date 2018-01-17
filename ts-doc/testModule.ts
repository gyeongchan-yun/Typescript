import {StringValidator } from "./validation";
import {ZipCodeValidator } from "./ZipCodeValidator";
import {LettersOnlyValidator } from "./LetterOnlyValidator";

let strings = ["Hello", "98052", "101"];

let validators : {[s: string]: StringValidator; } = {};

validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

strings.forEach(s => {
    for (let name in validators) {
        alert('"${ s }" - $ { validators[name].isAcceptable(s) ? \
            "matches" : "does not match"} ${name}');
    }
});
