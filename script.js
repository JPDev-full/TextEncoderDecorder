function encodeText() {
    var inputText = document.getElementById('inputText').value;
    var encodedText = btoa(inputText);
    document.getElementById('outputText').value = encodedText;
  }
  
  function decodeText() {
    var encodedText = document.getElementById('inputText').value;
    var decodedText = atob(encodedText);
    document.getElementById('outputText').value = decodedText;
  }
  
  