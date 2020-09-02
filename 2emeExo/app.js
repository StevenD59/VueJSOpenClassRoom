let app = new Vue({
    el:'#app',
    data: {
        //Je défini le nom de mon restaurant
        restaurantName: 'Café avec vue',
        //Numéro de téléphone du restaurant
        phoneNumbers: '03.20.20.20.20',
        //Adresse mail du restaurant
        mail : 'restaurant@gmail.com',
        //Adresse du restaurant
        address: '17 Rue de la liberté, 59000, Lille',
        //Je défini les prix pour chaque articles
        costOfApples: 5,
        costOfBananas: 6,
        costOfCoconuts: 7,
        //Copyright
        copyrightHtml: 'Copyright ©'
    },
    //Utilisation des propritétés calculés, ce qui va permettre de "calculer" des données
    computed: {
        //Calcul du prix total
        totalPrice(){
            return this.costOfApples + this.costOfBananas + this.costOfCoconuts
        },
        //Footer
        footerHtml(){
            return this.address + ' - ' + this.phoneNumbers
        },
        copyright(){
            return this.copyrightHtml + ' - ' + this.restaurantName
        }
    }
})