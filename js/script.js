// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
// dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome
// e immagine di ogni contatto
var app = new Vue({
    el: '#app',
    data: {
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
        newUser(item,index){
            this.count=index;
        }
         
    }
    
  })