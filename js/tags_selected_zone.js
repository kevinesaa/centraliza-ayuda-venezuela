class TagSelectedZone {


    #onRemoveTagListener;
    #selectedTags;

    constructor(config) {

    }

    setSelectedTags(tags) {

    }
    
    setOnRemoveTagListener(listenerFunc) {
        this.#onRemoveTagListener = listenerFunc;
    }
}