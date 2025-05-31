

/*
Guideline Colores - Specific Palettes
Guideline Color: ##99CF16
Webpage Color: ##99CF16
Webapge Color 2: #010000
*/
var initPromise = Bots.init({
  appId: '5d72a9b30ad4ad000f3656c5', //Put your Bot appId en the variable appId   
  locale: 'es-MX',
  businessName: 'Viva Chatbot',
  businessIconUrl: '/chatbot-widget/assets/logo.png',
  imageUploadEnabled: true,
  locationEnabled: false,
  customColors: {
    brandColor: '99CF16',
    conversationColor: '99CF16',
    actionColor: 'FFFFFF',
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
    introductionText: 'Tu asistente virtual de VIVA!',
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
})


/**
 * The next Features are for cover specific customization for a Widget, since this Widget is a ReactJS compiled code, it's needed
 *  to use hard Vanilla Javascript to overwrite some styles and so on. - Eddy :c
*/
//To Handle Dom of iframe   

/*
Font Custom
For configure a custom Font you need to follow the next steps:
1-Search in google fonts, the font you like, for example: Exo
2-Copy the name of the FontFamily and put in variable fontFamily. Note: Be carefull with lower and uppercase.
2-Select and get the url of the Font, for example https://fonts.googleapis.com/css?family=Exo
3-Now open the link, and you'll see a css code. Take the link from the first @font-face the src: url(...), example:
https://fonts.gstatic.com/s/exo/v8/4UaOrEtFpBISfH6jyDM.woff2 and put this url in the variable fontURL

4-Call the function fontChange() inside Bots.on('ready') event below

Example of the variables:
var fontFamily = 'Exo'
var fontURL = 'https://fonts.gstatic.com/s/exo/v8/4UaOrEtFpBISfH6jyDM.woff2'
*/

var iframe
var fontFamily = 'Exo'
var fontUrl = 'https://fonts.gstatic.com/s/exo/v8/4UaOrEtFpBISfH6jyDM.woff2'


Bots.on('ready', function () {
  topWidget()
  changeFont()
  changeAvatar()
});
Bots.on('message:received', function (message) {
  changeAvatar()
});
Bots.on('widget:opened', function () {
  //hideLocation()  
  hideButtons()
});
//This function set the z-index of the Widget to highest possible
function topWidget() {
  iframe = document.getElementById('web-messenger-container')
  iframe.style.zIndex = '10000'
}
//Change the Bot Avatar Icon
function changeAvatar() {
  let avatarContainer = iframe.contentWindow.document.querySelectorAll('.msg-avatar')

  for (let i = 0; i < avatarContainer.length; i++) {
    avatarContainer[i].style.width = '42px'
    let avatarImage = avatarContainer[i].getElementsByTagName('img')[0]
    avatarImage.setAttribute('src', '/chatbot-widget/assets/avatar.png')
    avatarImage.style.width = '46px'
    avatarImage.style.height = '31px'
  }
}
//Change the Helvetica default Font to Palanquin
function changeFont() {
  
  const customFont = new FontFace( fontFamily, `url(${fontUrl})`)
  customFont.load().then(function(loaded_face) {   
    
    document.fonts.add(loaded_face)  	
    container = iframe.contentWindow.document.getElementById('container')
    container.style.fontFamily = `"${loaded_face.family}",sans-serif`

  }).catch(function(error) {
    console.error(`Failed to load Font Family ${fontFamily}`)
    console.log( error)
  })  
  //    


}
//Hide Button option for share location 
function hideLocation() {
  let newStyle = document.createElement("style");
  newStyle.innerHTML = `            
        .upload-container > div > div:last-child{
            display:none!important;
        }            
        `
  iframe.contentWindow.document.head.appendChild(newStyle);
}
//Hide Main button with the options
function hideButtons() {
  let newStyle = document.createElement("style");
  newStyle.innerHTML = `            
        #footer > div:first-child{
            display:none!important;
        }            
        `
  iframe.contentWindow.document.head.appendChild(newStyle);

  alignTextBox()
}
//If you use hideButtons, it call it for create a little margin in text box
function alignTextBox() {
  let newStyle = document.createElement("style");
  newStyle.innerHTML = `            
        #footer > form{
            margin-left: 16px!important;
        }            
        `
  iframe.contentWindow.document.head.appendChild(newStyle);
}