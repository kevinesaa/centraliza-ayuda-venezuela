class View {

    #rootView;
    #resultItemViewBuilder;

    constructor(rootView, config) {
        this.#rootView = rootView;
        this.#resultItemViewBuilder = config && config.resultItemViewBuilder
            ? config.resultItemViewBuilder
            : null;
    }

    cleanView() {
        const sitesList = this.#rootView.querySelector('#sites-list');
        if (sitesList) {
            sitesList.innerHTML = '';
        }
    }

    showResult(data) {
        if (!Array.isArray(data) || data.length === 0) {
            return;
        }

        const sitesList = this.#rootView.querySelector('#sites-list');
        if (!sitesList) {
            return;
        }

        for (const site of data) {
            const li = this.#resultItemViewBuilder.buildItemView(site);
            sitesList.appendChild(li);
        }
    }

    showNoResults() {
        const sitesList = this.#rootView.querySelector('#sites-list');
        sitesList.innerHTML = '';
        const li = document.createElement('li');
        li.className = 'no-results-message';
        li.textContent = 'No se encontraron coincidencias para su búsqueda.';
        sitesList.appendChild(li);
    }

    hideErrors() {
        const sitesList = this.#rootView.querySelector('#sites-list');
        const errors = sitesList ? sitesList.querySelectorAll('.error-message') : [];
        errors.forEach((el) => el.remove());
        
        const mainErrors = this.#rootView.querySelector('main');
        if (mainErrors) {
            mainErrors.querySelectorAll('.error-message').forEach((el) => el.remove());
        }
    }

    showError(message) {
        const sitesList = this.#rootView.querySelector('#sites-list');
        if (sitesList) {
            const li = document.createElement('li');
            li.className = 'error-message';
            li.setAttribute('role', 'alert');
            li.textContent = message;
            sitesList.appendChild(li);
        }
    }
}
