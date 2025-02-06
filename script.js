document.getElementById('chunk-button').addEventListener('click', function() {
    let inputString = document.getElementById('input-string').value;
    let chunkLength = parseInt(document.getElementById('chunk-length').value);
    let result = chunkString(inputString, chunkLength);

    document.getElementById('result').innerHTML = 'Chunked string: ' + result;
});

function chunkString(str, chunkLength) {
    if (str === null) {
        return [];
    }

    let chunks = [];
    for (let i = 0; i < str.length; i += chunkLength) {
        chunks.push(str.substring(i, Math.min(i + chunkLength, str.length)));
    }

    return chunks.join(', ');
}