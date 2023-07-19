function countCharacters() {
    const textarea = document.getElementById('myTextarea');
    const characterCount = document.getElementById('characterCount');
    
    const text = textarea.value;
    const length = text.length;
    
    characterCount.textContent = length + ' caracteres';
  }
  
