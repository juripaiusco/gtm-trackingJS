/**
 * Script di monitoraggio
 *
 * Autore: Juri Paiusco
 * Email: juri@mr-j.it
 */
window.dataLayer = window.dataLayer || [];
selectorListener = [];

$(window).ready(function (){

    // Ciclo tutti gli elementi che voglio tracciare
    for (var i in GtmTrackConfig) {

        // Verifico che il selettore sia tracciato una volta sola
        if (selectorListener.indexOf(GtmTrackConfig[i].selector) < 0) {

            selectorListener.push(GtmTrackConfig[i].selector);

            // Traccio il selettore
            $(GtmTrackConfig[i].selector).bind(
                GtmTrackConfig[i].listener,
                GtmTrackConfig[i],
                function (e) {

                    // Verifico e invio il dataLayer corretto
                    for (var i in GtmTrackConfig) {

                        if (e.data.type == 'a' &&
                            typeof e.data.attrNameCtrl !== 'undefined' &&
                            typeof GtmTrackConfig[i].attrValueCtrl !== 'undefined' &&
                            $(this).attr(e.data.attrNameCtrl) == GtmTrackConfig[i].attrValueCtrl) {

                            pushDataLayer(GtmTrackConfig[i]);
                            break;

                        }

                        if (typeof e.data.searchString !== 'undefined' &&
                            $(this).text().indexOf(GtmTrackConfig[i].searchString) > -1) {
                            
                            pushDataLayer(GtmTrackConfig[i]);
                            break;

                        }

                    }

                }
            );

        }

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