function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity1 = 'go to the office') {
    return `This Monday, I will ${activity1}.`;
}

function wrapAdjective(highlight = '*', msg = 'You are') {
   const innerFunction = function(param1 = 'special'){
    return `${msg} ${highlight}${param1}${highlight}!`;
    };
    return innerFunction;
}
wrapAdjective('%')('a dedicated programmer');