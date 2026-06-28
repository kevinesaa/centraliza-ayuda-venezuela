class ResultItemViewBuilder {

    #rootView;

    constructor(config) {
        this.#rootView = config.rootView;
    }

    buildItemView(item) {
        const li = this.#rootView.createElement('li');
        li.className = 'site-card';

        if (!item || typeof item !== 'object' || Array.isArray(item)) {
            return li;
        }

        if (item.nombre && item.url) {
            const a = this.#rootView.createElement('a');
            a.href = item.url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.className = 'site-name';
            a.textContent = item.nombre;
            li.appendChild(a);
        }

        if (item.descripcion) {
            const p = this.#rootView.createElement('p');
            p.className = 'site-description';
            p.textContent = item.descripcion;
            li.appendChild(p);
        }

        return li;
    }
}
