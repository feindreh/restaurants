function makeCss(rules){
        //{color:red;background-color:white} => 'color:red ; background-color:white}'
    let cssText = "";
    for(let rule of rules){
        cssText += rule + ":" + rules[rule] + ";"
    }
    return cssText
}


const functions = {makeCss}

export default functions;
