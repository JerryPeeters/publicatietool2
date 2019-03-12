class Mutation {
    constructor(obj) {

    }
    
    include = false
    
    toggle() {
        this.include = !this.include
    }

    question = new Question()
}

class Question {
    constructor(type, ask, value, placeholder){
        super(type)
        this.ask = ask
       
        if (value) this.value = value
    }

    ask: 'Do you want to include X?'

    types:
        toggle: `true/false`
        value: 'static'
    

        toggleValue: 1,2
        value: 'currentselection / static'

        inputText: '...'
        value: 'dynamic'
        
        inputDate: '...'
        value: 'dynamic'
}





class QuestionTypes extends QuestionDefaults {
    constructor(type) {
        super()
        if (!type) {
            this._toggleBuilder()
        } else {
            type = '_' + type + 'Builder'
            this[type]()
        }
    }
    _toggleBuilder() {

    }
    _toggleValueBuilder() {

    }
}

class QuestionDefaults {
    constructor()
    
    ask = 'This is the default question?'
    value = 'This is the default value.'
    placeholder = 'This is the default placeholder.' 
}


class Sjabloon extends Mutation {
    constructor(obj) {
        super(obj)
    }
}
