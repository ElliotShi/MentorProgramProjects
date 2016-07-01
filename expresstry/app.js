import FakeExpress from './fakeExpress';

const app = new FakeExpress();

app.get('/home', function(){
	console.log('this is get function');
})

app.listen('2020', function(){
	console.log('listening on port 2020');
})