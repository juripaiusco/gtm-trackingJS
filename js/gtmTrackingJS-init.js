/**
 * Script di monitoraggio
 *
 * Autore: Juri Paiusco
 * Email: juri@mr-j.it
 */
window.dataLayer = window.dataLayer || [];

$(window).ready(function (){

    // Ciclo tutti gli elementi che voglio tracciare
    for (var i in GtmTrackConfig) {

        $('body').on(
            GtmTrackConfig[i].listener,
            GtmTrackConfig[i].selector,
            GtmTrackConfig[i],
            function (e) {

                if (e.data.type == 'a' &&
                    e.data.attrNameCtrl !== 'undefined' &&
                    e.data.attrValueCtrl !== 'undefined' &&
                    $(this).attr(e.data.attrNameCtrl) == e.data.attrValueCtrl) {

                    pushDataLayer(e.data);

                }

                if (e.data.type == 'button' &&
                    e.data.searchString !== 'undefined' &&
                    !e.data.searchUrl &&
                    $(this).text().indexOf(e.data.searchString) > -1) {

                    pushDataLayer(e.data);

                }

                if (e.data.type == 'button' &&
                    e.data.searchString !== 'undefined' &&
                    e.data.searchUrl !== 'undefined' &&
                    $(this).text().indexOf(e.data.searchString) > -1 &&
                    location.href.indexOf(e.data.searchUrl) > -1) {

                    pushDataLayer(e.data);

                }

            }
        );

    }

});

/**
 * Push dataLayer
 * @param d
 */
var pushDataLayer = function (d) {

    window.dataLayer.push({
        'event' : d.dataLayer.event,
        'mrj.category' : d.dataLayer.category,
        'mrj.action' : d.dataLayer.action,
        'mrj.label' : d.dataLayer.label
    });

    console.log(window.dataLayer);

}