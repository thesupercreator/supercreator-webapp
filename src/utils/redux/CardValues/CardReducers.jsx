const ininitialState = {
    cardData: [],
    IntroCardData:{},
    IntroCardHTML: {}
}

const CardValues = (state = ininitialState,action) => {
    switch (action.type){
        case 'cards':
            return { ...state, cardData: action.payload};
        case 'IntroCards':
            return { ...state, IntroCardData: action.payload};
        case 'IntroCardHTML':
            return { ...state, IntroCardHTML: action.payload};
        default:
            return state
    }
}

export default CardValues