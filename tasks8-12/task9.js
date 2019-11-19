const tBody = document.querySelector('tbody');
const tHeads = document.querySelectorAll('th');

for(let i = 0; i < tHeads.length; i++){
    tHeads[i].addEventListener('click', () => {
        const tableRows = Array.from(
            document.querySelectorAll('tbody tr')
        );

        const sortedRows = tableRows.sort((a,b) => {
            const paramA = a.children[i].innerText;
            const paramB= b.children[i].innerText;
            if ( paramA === paramB) {
                return 0
            } else if (paramA > paramB) {
                return 1
            }
            return -1
        });

        tBody.innerHTML = "";

        for(let j = 0; j < sortedRows.length; j++) {
            tBody.appendChild(sortedRows[j]);
        }
    });
}


