// Top Row Side-by-Side
let mainsplitview = Split(['#tlh-col', '#trh-col'], {
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
    onDragEnd: function (){
        endDragUpdate();
    }
})

// Top and Bottom
let bottomsplitview = Split(['#top-row', '#bottom-row'], {
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

// Reserved function for EndDrag callback, update the layout for top figures
let topMainViewFigure = null
let topSecViewFigure = null
function endDragUpdate(){
    if (topMainViewFigure !== null) {
        topMainViewFigure();
    }
    if (topSecViewFigure !== null) {
        topSecViewFigure();
    }
}
// Update topbar name
function updateNavbar(name, time){
    $("#navbar-data-time").html(time)
    $("#navbar-view-name").html(name)
}
// View status variable
let mainViewHeight = 0
let secViewHeight = 0