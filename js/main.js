

function main() {

   const apiSettings = {
      "baseUrl":"http://localhost:3000"
   };
   
   const apiManager = new ApiManager(apiSettings);
   const resultItemViewBuilder = new ResultItemViewBuilder({ rootView: document });
   const viewManager = new View(document, { resultItemViewBuilder: resultItemViewBuilder });
   
   const payload = {};
   
   
   apiManager.getSites(payload)
        .then((res) => {
                        
            viewManager.cleanView();
            viewManager.showResult(res.data);
        })
        .catch((err) => {
           
            console.error(err);
            viewManager.showError("No se pudieron cargar los datos del directorio. Por favor, intente de nuevo más tarde.");
        })
        .finally(() => {
            
        });
   
   // =========================
   // ==== tag item view builder ===
   // =========================
   const tagItemViewBuilder = new TagItemViewBuilder({ rootView: document });

   // =============================
   // ==== selected tag zone ======
   // =============================
   const selectedTagZone = new TagSelectedZone({
       containerElement: document.getElementById('tags-selected-zone'),
       tagItemViewBuilder: tagItemViewBuilder
   });

   // =========================
   // ====== side bar =========
   // =========================
   const sideBar = new SideBar({
       sidebarElement: document.getElementById('sidebar-nav'),
       overlayElement: document.querySelector('.sidebar-overlay'),
       closeButtonElement: document.querySelector('.sidebar__close-button'),
       hamburgerButtonElement: document.querySelector('.header__menu-button'),
       tagItemViewBuilder: tagItemViewBuilder
   });

   apiManager.getTags({})
        .then((res) => {
            sideBar.setTagItems(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            
        });
    
   // =========================
   // ====== search text ======
   // =========================
   const searchTextInput = document.getElementById("search-text-input");
   const magnifierElement = document.querySelector('.search-bar__icon--magnifier');
   const spinnerElement = document.querySelector('.search-bar__icon--spinner');
   const searchText = new SeachText({
        "searchTextInput":searchTextInput,
        "magnifierElement":magnifierElement,
        "spinnerElement":spinnerElement,
        "debounceDelay":300
   });
   
   searchText.setOnValueChangeListener((value) => {
        
        
        searchText.showLoading(true);
        const tags = sideBar.getSelectedTags();
        apiManager.seachForSites({
            "textToSearch":value,
            "tags":tags
        })
            .then((res) => {
                viewManager.hideErrors();
                viewManager.cleanView();
                if(res?.data?.length > 0) {
                    viewManager.showResult(res.data);
                }
                else{
                    viewManager.showError("No se encontraron coincidencias.");
                }
            })
            .catch((err) => {
                console.error(err);
                viewManager.hideErrors();
                viewManager.cleanView();
                viewManager.showError("No se pudieron cargar los datos del directorio. Por favor, intente de nuevo más tarde.");
            })
            .finally(() => {
                searchText.showLoading(false);
            });
   });

   sideBar.setOnTagItemClickListener((allTags) => {

        selectedTagZone.setSelectedTags(allTags);
        const text = searchText.getText() == "" ? null:searchText.getText();
        apiManager.seachForSites({
            "textToSearch":text,
            "tags":allTags
        })
        .then((res) => {
            viewManager.hideErrors();
            viewManager.cleanView();
            if(res?.data?.length > 0) {
                viewManager.showResult(res.data);
            }
            else{
                viewManager.showError("No se encontraron coincidencias.");
            }
        })
        .catch((err) => {
            console.error(err);
            viewManager.hideErrors();
            viewManager.cleanView();
            viewManager.showError("No se pudieron cargar los datos del directorio. Por favor, intente de nuevo más tarde.");
        })
        .finally(() => {
            searchText.showLoading(false);
        });
   });
   
   selectedTagZone.setOnRemoveTagListener((allSelectedItems) => {

        sideBar.updateSelectedItems(allSelectedItems);
        const text = searchText.getText() == "" ? null:searchText.getText();
        apiManager.seachForSites({
            "textToSearch":text,
            "tags":allSelectedItems
        })
        .then((res) => {
            viewManager.hideErrors();
            viewManager.cleanView();
            if(res?.data?.length > 0) {
                viewManager.showResult(res.data);
            }
            else{
                viewManager.showError("No se encontraron coincidencias.");
            }
        })
        .catch((err) => {
            console.error(err);
            viewManager.hideErrors();
            viewManager.cleanView();
            viewManager.showError("No se pudieron cargar los datos del directorio. Por favor, intente de nuevo más tarde.");
        })
        .finally(() => {
            searchText.showLoading(false);
        });
   });

}

window.addEventListener("load", main);
