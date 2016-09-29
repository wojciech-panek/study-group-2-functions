import _ from 'lodash';
import data1 from './data1.json';
import data2 from './data2.json';

function averageLengthDisk(album) {
  return _.sumBy(album.tracks, track => track.length) / album.tracks.length;
}

export function avgLengthEvery() {
  return _.map(data1['media'], item => averageLengthDisk(item));
}

export function avgLengthOverall() {
  return _.reduce(avgLengthEvery(), (acc, item, index, collection) => {
    return acc + item / collection.length;
  }, 0);
}

export function getAlbums() {
  return data2['release-groups']
    .filter(a => !_.some(a['secondary-types'], t => t === 'Compilation'))
    .sort((a1, a2) => new Date(a1['first-release-date']) - new Date(a2['first-release-date']))
    .map(a => _.pick(a, ['title', 'first-release-date']));
}
