// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
// dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome
// e immagine di ogni contatto
var app = new Vue({
    el: '#app',
    data: {
        search: '',
        nuovoMex: '',
        count : 0,
        contacts: [
            {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
            
            },
            {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
            ],
            },
        {
            name: 'Giorgio',
            avatar: '_3',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            text: 'Ciao',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Piacere Marco',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            text: 'Piacere Ugo!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Marco',
            avatar: '_4',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            text: 'Hai preso la medicina?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Va presa ogni 4 ore',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Francesco',
            avatar: '_5',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            text: 'Vorrei prendere una gattina',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'É davvero bellissima',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            text: 'Che bellooo',
            status: 'received'
            }
            ],
            }
            ,{
            name: 'Laura',
            avatar: '_6',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            text: 'Usciamo?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Guido io',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            text: 'Dajeee',
            status: 'received'
            }
            ],
        },],
        
    },
    methods :{
        newUser(element,index){
            this.count=index;
        },
        addMex(){

            this.contacts[this.count].messages.push({
            date: '10/01/2020 15:30:55',
            text: this.nuovoMex,
            status: 'received'
            })
            this.nuovoMex = '';
            setTimeout(function(){ 
                
                app.contacts[app.count].messages.push({
                    date: '10/01/2020 15:30:55',
                    text: 'ok',
                    status: 'sent'
                    })
            }, 1000);
        },

        remove(index){
            console.log(index);
            this.contacts[this.count].messages.splice(index,1)
        },
        
            
        cercaUser(){
            if( this.search == ""){
                for(var i=0; i< this.contacts.length; i++){
                    this.contacts[i].visible = true;
                }
            }
            else{
                for(var i=0; i< this.contacts.length; i++){
                    let user = this.contacts[i].name.toLowerCase();
                    search = this.search.toLowerCase();
                    if(user.includes(search)){
                        this.contacts[i].visible =true;
                    }
                    else{
                        this.contacts[i].visible = false;
                    }
                }
            };
            
        },
        
    }
    
  })