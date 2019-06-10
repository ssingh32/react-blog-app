import moment from 'moment';

export default [{
  id: '1',
  title: 'First Post',
  description: '',
  timestamp: 0
}, {
  id: '2',
  title: 'Second Post',
  description: '',
  timestamp: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  title: 'Third Post',
  description: '',
  timestamp: moment(0).add(4, 'days').valueOf()
}];