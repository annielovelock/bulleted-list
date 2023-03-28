document.getElementById("generateButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    const outputText = document.getElementById("outputText");

    const lines = inputText.split("\n");
    const bulletedList = lines.map(line => "• " + line).join("\n");
    
    outputText.value = bulletedList;
});
