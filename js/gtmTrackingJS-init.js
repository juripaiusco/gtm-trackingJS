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
                    var binded = 0;

                    for (var i in GtmTrackConfig) {

                        /**
                         * Verifico:
                         * A
                         * href
                         */
                        if (e.data.type == 'a' &&
                            typeof GtmTrackConfig[i].attrNameCtrl !== 'undefined' &&
                            typeof GtmTrackConfig[i].attrValueCtrl !== 'undefined' &&
                            $(this).attr(GtmTrackConfig[i].attrNameCtrl) == GtmTrackConfig[i].attrValueCtrl) {

                            pushDataLayer(GtmTrackConfig[i]);
                            break;

                        }

                        /**
                         * Verifico:
                         * che il testo all'interno dell'elemento sia presente
                         */
                        if (typeof GtmTrackConfig[i].searchString !== 'undefined' &&
                            typeof GtmTrackConfig[i].searchUrl === 'undefined' &&
                            $(this).text().indexOf(GtmTrackConfig[i].searchString) > -1) {

                            pushDataLayer(GtmTrackConfig[i]);
                            break;

                        }

                        /**
                         * Verifico:
                         * che il testo all'interno dell'elemento sia presente
                         * e che l'URL abbia una string searchUrl
                         */
                        /*if ($(this).text().indexOf(GtmTrackConfig[i].searchString) > -1 &&
                            location.href.indexOf(GtmTrackConfig[i].searchUrl) > -1) {

                            pushDataLayer(GtmTrackConfig[i]);
                            break;

                        }*/

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