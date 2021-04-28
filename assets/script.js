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

function switchView(view){
    let listofview = ['home-view' ,'progress-view', 'distribution-view', 'solution-view']
    for (var i = 0; i < listofview.length; i++) {
        $('#'+listofview[i]).addClass('d-none')
    }
    $('#'+view).removeClass('d-none')
}