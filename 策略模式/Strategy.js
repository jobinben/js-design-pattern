// 策略模式的使用，可以避免过多的 if-else 判断，也可以替代简单逻辑的 switch：

const switchType = val => {
   switch (val) {
        case 0:
           return 'number'
        case 1:
            return 'string'
        case 2:
            return 'null'
        case 3:
            return 'undefined'
        case 4:
            return 'boolean'
        case 5:
            return 'symbol'
        case 6:
            return 'object' 
       default:
            return ''
   }
}

const ConcreteStrategyType = val => {
    const type = {
        0 : 'number',
        1 : 'string',
        2 : 'null',
        3 : 'undefind',
        4 : 'boolean',
        5 : 'symbol',
        6 : 'object'
    }
    return type[val]
}



