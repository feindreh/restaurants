export function makeCss(rules){
        //{color:red;background-color:white} => 'color:red ; background-color:white}'
    let cssText = "";
    for(let rule in rules){
        cssText += rule + ":" + rules[rule] + ";"
    }
    return cssText
}


