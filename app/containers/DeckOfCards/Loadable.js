/**
 *
 * Asynchronously loads the component for DeckOfCards
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
