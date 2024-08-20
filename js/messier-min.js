window.addEventListener('DOMContentLoaded', () => {

    const pnode = document.getElementById('messier-container');
    const tbl = document.createElement('table');
    tbl.id = 'messier';
    pnode.appendChild(tbl);

    const levels = ['Very Easy', 'Easy',
        'Moderate', 'Hard',
        'Very Hard'
    ];

    const sortObjects = (a, b) => {

        const amag = a.magnitude,
            bmag = b.magnitude;

        if (amag > bmag) {
            return 1;
        } else if (bmag > amag) {
            return -1;
        }
        return 0;
    };

    for (let i = 0; i < 8; i++) {

        const tr = document.createElement('tr');
        tbl.appendChild(tr);

        for (let j = 0; j < 18; j++) {

            const td = document.createElement('td');
            td.id = `cell_${i}_${j}`;
            td.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;';
            tr.appendChild(td);
        }
    }

    const groups = {};

    fetch('/data/sky-objects.json').then(async response => {

        const json = await response.json();

        for (let i = 0, end = levels.length; i < end; i++) {
            const lvl = levels[i];

            const flevel = json.filter(item => {

                return item.difficultyLevel === lvl;

            });
            groups[lvl] = flevel;
        }


        let startCol = 0,
            row = 0;

        const TOTAL_ROWS = 8;
        levels.forEach(lvl => {

            const group = groups[lvl].sort(sortObjects);
            const size = group.length;
            const columns = Math.ceil(size / TOTAL_ROWS);
            const fsize = size % TOTAL_ROWS;

            let col = startCol;
            while ((fsize + row) % TOTAL_ROWS !== 0) {
                row++;
            }
            let i = 0;
            if (columns > 1 && row > 0) {
                col++;
                row = 0;
            }
            while (i < size) {
                const cell = document.getElementById(`cell_${row}_${col}`);
                cell.className = group[i].bestViewTimes;
                cell.dataset.type = group[i].type;
                cell.dataset.names = group[i].names.join(' / ');
                cell.dataset.messier = group[i].object;
                cell.dataset.level = group[i].difficultyLevel;
                if (group[i].image) {
                    const img = `<img src="/images/viewimage.png" dataset-messier="${group[i].image}"/>`;
                    cell.innerHTML = group[i].object + '<br>' + group[i].magnitude + img;
                } else {
                    cell.innerHTML = group[i].object + '<br>' + group[i].magnitude;
                }

                col++;
                const diff = col - startCol;
                if (diff >= columns) {
                    col = startCol;
                    row++;
                }
                i++;
            }
            startCol += 1 + columns;
            row = 0;
        });
    });

    document.addEventListener('click', (event) => {
        const target = event.target;
        const name = target.nodeName;
        const isTD = (name.toLowerCase() === 'td'); 
        const isIMG = (name.toLowerCase() === 'img'); 
        if (!isTD && !isIMG) {
            return;
        }
        const obj = document.getElementById('object-info');
        const parent = (isIMG ? target.parent : target);
        
        const dset = parent.dataset;
        if (!dset || !dset.names || !dset.messier) {
            return;
        }
        const title = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${dset.messier} = ${dset.names} => ${dset.type}`;
        obj.innerHTML = title;
        const imageTitle = document.getElementById('object-image');
        const image = document.getElementById('messier-object-image');
        if (imageTitle && image) {
            if (dset.image) {
                imageTitle.innerHTML = title;
                image.innerHTML = `<img src="/images/messier/${dset.image}">`;
            } else {
                imageTitle.innerHTML = '&nbsp;';
                image.innerHTML = '&nbsp;';
            }
        }
    });
});
