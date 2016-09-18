import _ from 'lodash';
import data from './data.json';

export function getAlbums() {
  return data['release-groups']
    .filter(a => !_.some(a['secondary-types'], t => t === 'Compilation'))
    .sort((a1, a2) => new Date(a1['first-release-date']) - new Date(a2['first-release-date']))
    .map(a => _.pick(a, ['title', 'first-release-date']));
}
