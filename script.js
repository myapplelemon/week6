const quotes = {
"-키케로" : '"삶이 있는 한 희망은 있다"',
"-로망로랑" : '"산다는것 그것은 치열한 전투이다."',
"-사무엘존슨" : '"하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다."',
"-파울로 코엘료" : '"언제나 현재에 집중할수 있다면 행복할것이다."',
"-찰리 채플린" : '"진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해"',
"-엘버트 허버드" : '"직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다"',
"-켄러" : '"신은 용기있는자를 결코 버리지 않는다"',
"–로버트 엘리엇" : '"피할수 없으면 즐겨라"',
"-마르쿠스 아우렐리우스 안토니우스" : '"행복한 삶을 살기위해 필요한 것은 거의 없다."',
"-L.론허바드" : '"절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다" ',
"-제임스 오펜하임" : '"어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다."',
"-F.스콧 핏제랄드" : '"한번의 실패와 영원한 실패를 혼동하지 마라"',
"-로버트 엘리엇" : '"피할수 없으면 즐겨라"'
}

document.getElementById('generate').addEventListener('click', () => {
	let authors = Object.keys(quotes);
	let author = authors[Math.floor(Math.random()* authors.length)];
	let quote = quotes[author];

	document.getElementById('quote').innerHTML = quote;
	document.getElementById('author').innerHTML = auther; 
});
