// Top Row Side-by-Side
Split(['#tlh-col', '#trh-col'], {
    sizes: [75, 25],
    minSize: 300,
    elementStyle: function (dimension, size, gutterSize) {
        return {
            'flex-basis': 'calc(' + size + '% - ' + gutterSize + 'px)',
        }
    },
    gutterStyle: function (dimension, gutterSize) {
        return {
            'flex-basis': gutterSize + 'px',
        }
    },
})

// Top and Bottom
bottom = Split(['#top-row', '#bottom-row'], {
    sizes: [90, 10],
    minSize: 100,
    direction: 'vertical'
})

// bottom.destroy()