

const stations = [
    {
        title: 'Station1',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores consectetur, eveniet reprehenderit illo aut accusantium dolorum nobis. Hic cupiditate adipisci, assumenda doloribus, aliquam quibusdam architecto autem deserunt commodi, distinctio maiores?',
    },
    {
        title: 'Station2',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores consectetur, eveniet reprehenderit illo aut accusantium dolorum nobis. Hic cupiditate adipisci, assumenda doloribus, aliquam quibusdam architecto autem deserunt commodi, distinctio maiores?',
    },
    {
        title: 'Station3',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores consectetur, eveniet reprehenderit illo aut accusantium dolorum nobis. Hic cupiditate adipisci, assumenda doloribus, aliquam quibusdam architecto autem deserunt commodi, distinctio maiores?',
    },
    {
        title: 'Station4',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores consectetur, eveniet reprehenderit illo aut accusantium dolorum nobis. Hic cupiditate adipisci, assumenda doloribus, aliquam quibusdam architecto autem deserunt commodi, distinctio maiores?',
    },
    {
        title: 'Station5',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores consectetur, eveniet reprehenderit illo aut accusantium dolorum nobis. Hic cupiditate adipisci, assumenda doloribus, aliquam quibusdam architecto autem deserunt commodi, distinctio maiores?',
    },
]

function renderExperiences() {
    const experiencesRef = document.getElementById('curriculum');
    console.log(experiencesRef);
    experiencesRef.innerHTML = '';
    for (let index = 0; index < stations.length; index++) {
        const station = stations[index];
        experiencesRef.innerHTML += ` <div class="station">
                            <div class="stationDot"></div>
                            <div class="stationDescription">
                            <span>${station.description}</span>
                            </div>
                        </div>`
    }
}

function getScrollbarPosition() {
    const dots = document.getElementsByClassName('stationDot');
    const scrollbar = document.getElementById('scrollbar');
    const scrollbarRect=scrollbar.getBoundingClientRect();
    const divRef = document.getElementById('experiencesContent');
    const divRect = divRef.getBoundingClientRect();
    const lastIndex = dots.length - 1;
    const startDot = dots[0];
    const finalDot = dots[lastIndex];
    const startDotRect = startDot.getBoundingClientRect();
    const finalDotRect = finalDot.getBoundingClientRect();
    const currentHeight = finalDotRect.bottom - startDotRect.top;
    scrollbar.style.top = `${startDotRect.top - divRect.top}px`;
    const scrollbarPosition = startDotRect.left + (startDotRect.width / 2) - divRect.left-(scrollbarRect.width/2);
    scrollbar.style.left = `${scrollbarPosition}px`
    scrollbar.style.height = `${currentHeight}px`;
}



function scrollVerticalBar() {
    const startpoint = window.innerHeight * 0.5;
    const barInner = document.getElementById('scrollbarInner');
    const bar = document.getElementById('scrollbar');
    const barInnerRect = barInner.getBoundingClientRect();
    const barRect = bar.getBoundingClientRect();
    let currentHeight = getCurrentHeight(startpoint, barRect, barInnerRect);
    barInner.style.height = `${currentHeight}%`;
    giveDotsHighlight(barInnerRect)
}

function getCurrentHeight(startpoint, barRect, barInnerRect) {
    let currentHeight;
    const barHeight = barRect.bottom - barRect.top;
    const innerHeight = startpoint - barInnerRect.top
    if (startpoint < barRect.top) {
        currentHeight = 0;
    } else if (startpoint > barRect.top && startpoint < barRect.bottom) {
        currentHeight = (innerHeight / barHeight) * 100;
    } else if (startpoint > barRect.bottom) {
        currentHeight = 100;
    }
    return currentHeight
}

function giveDotsHighlight(barInnerRect) {
    const dots = document.getElementsByClassName('stationDot');

    for (let index = 0; index < dots.length; index++) {
        const dot = dots[index];
        const dotRect = dot.getBoundingClientRect().top;
        if (dotRect < barInnerRect.bottom) {
            // dot.style.backgroundColor='var(--highlight)';
            dot.classList.add('changeColor');
        } else {
            // dot.style.backgroundColor='var(--secondary)';
            dot.classList.remove('changeColor');
        }

    }
}

window.addEventListener('resize', getScrollbarPosition)