/**
 * GTM Tracking Config.
 *
 * Autore: Juri Paiusco
 * Email: juri@mr-j.it
 */
var GtmTrackConfig = [{

    'selector': '.btn',
    'listener': 'click',
    'type': 'a',

    'attrNameCtrl': 'href',
    'attrValueCtrl': '#click-me-1',

    'dataLayer': {
        'event'     : 'mrj.aClick',
        'category'  : '00_LNK_click-me-1',
        'action'    : 'click',
        'label'     : '#click-me-1'
    }

}, {

    'selector': '.btn',
    'listener': 'click',
    'type': 'a',

    'attrNameCtrl': 'href',
    'attrValueCtrl': '#click-me-2',

    'dataLayer': {
        'event'     : 'mrj.aClick',
        'category'  : '00_LNK_click-me-2',
        'action'    : 'click',
        'label'     : '#click-me-2'
    }

}, {

    'selector': 'button',
    'listener': 'click',
    'type': 'button',

    'searchString': 'Click Me 3',
    'searchUrl': 'click-me-2',

    'dataLayer': {
        'event'     : 'mrj.bClick',
        'category'  : '00_BTN_click-me-btn',
        'action'    : 'click',
        'label'     : 'Click Me 3'
    }

}, {

    'selector': 'button',
    'listener': 'click',
    'type': 'button',

    'searchString': 'Continue',
    'searchUrl': 'continue-1',

    'dataLayer': {
        'event'     : 'mrj.bClick',
        'category'  : '00_BTN_continue',
        'action'    : 'click',
        'label'     : 'Continue 1'
    }

}, {

    'selector': 'button',
    'listener': 'click',
    'type': 'button',

    'searchString': 'Continue',
    'searchUrl': 'continue-2',

    'dataLayer': {
        'event'     : 'mrj.bClick',
        'category'  : '00_BTN_continue',
        'action'    : 'click',
        'label'     : 'Continue 2'
    }

}];