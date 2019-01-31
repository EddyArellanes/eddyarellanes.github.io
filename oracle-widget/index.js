//To Handle Dom of iframe   
var iframe
//Put your Bot appId en the variable appId    
/*
La Costeña
Guideline Color: #B51F1F
Webpage Color: #B51F1F
Webapge Color 2: #010000
*/
var initPromise = Bots.init({
    appId: '5b3cfe33d890e60022b7fefd',
    locale: 'es-MX',
    businessName: 'Sara',
    businessIconUrl: 'https://eddyarellanes.github.io/oracle-widget/assets/logo.png',        
    imageUploadEnabled: true,
    locationEnabled: false,
    customColors: {
        brandColor: 'B51F1F',
        conversationColor: 'B51F1F',
        actionColor: '010000',
    },

    customText: {
        actionPostbackError: 'Se produjo un error al procesar su acción.',
        clickToRetry: 'Mensaje no entregado. Click aquí para intentar de nuevo.',
        conversationTimestampHeaderFormat: 'MMMM D YYYY, h:mm A',
        fetchHistory: 'Cargar más',
        fetchingHistory: 'Recuperando la conversación...',
        headerText: '',
        inputPlaceholder: 'Escribe un mensaje...',
        invalidFileError: 'Sólo están permitidas imágenes. Elije un archivo con una extensión válida (jpg, jpeg, png, gif, or bmp).',
        introductionText: 'Tu asistente virtual de UAP!',
        locationNotSupported: 'Tu navegador no tiene soporte para servicios de localización. Por favor introduce tu localización manualmente.',        
        locationSecurityRestriction: 'Este sitio web no tiene acceso a tu localización. Por favor introduce tu localización manualmente.',
        locationSendingFailed: 'No se pudo enviar la ubicación',
        locationServicesDenied: 'Este sitio web no tiene acceso a la localización. Permite el acceso desde tu configuración o introduce tu localización manualmente.',
        messageError: 'Un error ha ocurrido mientras se enviaba tu mensaje.Por favor inténtalo de nuevo.',
        messageIndicatorTitlePlural: '({count}) Nuevos mensajes',
        messageIndicatorTitleSingular: '({count}) Nuevo mensaje',
        messageRelativeTimeDay: 'hace {value}d',
        messageRelativeTimeHour: 'hace {value}h',
        messageRelativeTimeJustNow: 'Ahora',
        messageRelativeTimeMinute: 'hace {value}m',
        messageTimestampFormat: 'hh:mm A',
        messageSending: 'Enviando...',
        messageDelivered: 'Entregado',
        sendButtonText: 'Enviar',
        settingsHeaderText: 'Configuración',
        tapToRetry: 'Mensaje no enviado. Volver a intentar.',
        unsupportedMessageType: 'Este tipo de mensaje no está permitido.',
        unsupportedActionType: 'Ésta acción no está permitida.'
        }    
});

Bots.on('ready', function(){
    iframe = document.getElementById('web-messenger-container')                    
    iframe.style.zIndex  = '10000'
    changeFont() 
    changeAvatar()        
});    
Bots.on('message:received', function(message) {
    changeAvatar()        
});
Bots.on('widget:opened', function() {
    hideLocation()
});
//Change the Bot Avatar Icon
function changeAvatar(){                        
    let avatarContainer = iframe.contentWindow.document.querySelectorAll('.msg-avatar')

    for(let i=0; i < avatarContainer.length; i ++){
        avatarContainer[i].style.width = '42px'
        let avatarImage = avatarContainer[i].getElementsByTagName('img')[0]
        avatarImage.setAttribute('src', 'https://eddyarellanes.github.io/oracle-widget/assets/avatar.png')
        avatarImage.style.width = '46px'
        avatarImage.style.height = '31px'                        
    }        
}
//Change the Helvetica default Font to Palanquin
function changeFont(){ 
    /*
    let newStyle = document.createElement("style");   
    newStyle.setAttribute('href', "https://fonts.googleapis.com/css?family=Palanquin")
    newStyle.setAttribute('rel', 'stylesheet')
    iframe.contentWindow.document.head.appendChild(newStyle);                   
    */
    container = iframe.contentWindow.document.getElementById('container')
    container.style.fontFamily = 'Calibri'
    
    
}
//Hide Button option for share location 
function hideLocation(){  
    let newStyle = document.createElement("style");      
    newStyle.innerHTML = `            
        .upload-container > div > div:last-child{
            display:none!important;
        }            
        `
    iframe.contentWindow.document.head.appendChild(newStyle);                   
}