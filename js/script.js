//debug
console.log('JS OK');

//Descrizione:
//Attraverso l'apposita API di Boolean
//https://flynn.boolean.careers/exercises/api/random/mail
//generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const app = new Vue({
    el: '#root',
    data: {
        email: '',
        emailsArray: []
    },

    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                const result = response.data;
                //console.log(result, result.response);
                this.email = result.response;
                //console.log(this.email);
                this.emailsArray.push(this.email);
            });
        }
    }
})






