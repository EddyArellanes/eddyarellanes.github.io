(function(d, m){
      var kommunicateSettings = {"appId":"1345df364f99cad05ff86f2831af0630d","conversationTitle":"Eddy AB"};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://api.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
})(document, window.kommunicate || {});
