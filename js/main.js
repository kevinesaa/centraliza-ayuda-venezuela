function main() {

   const apiSettings = {
      "baseUrl":"http://localhost:3000"
   };
   
   const apiManager = new ApiManager(apiSettings);
   const viewManager = new View(document);
   
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
}

window.addEventListener("load", main);