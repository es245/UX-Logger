app.controller('main_controller', ['$scope', function($scope) {

	/* ADD VARIABLES FOR STEP 3 HERE */
	$scope.title = "IMDB + Emil's Top 8 Movies";
	$scope.owner = "Emil";
	$scope.github = "https://github.com/es245/is219_sad_p3";

  $scope.list = []

	/* ADD FUNCTIONS FOR STEP 7 HERE */
	$scope.like = function(index){
		index.likes++;
	}

	$scope.dislike = function(index){
		index.dislikes++;
	}

	$scope.posterClick = function(index){
		if(index.posterindex == index.posters.length-1){
			index.posterindex = 0;
		}

		else {
			index.posterindex++;
		}
	}

	$scope.timeText = function(minutes){
		return Math.floor(minutes / 60) + " hours " + (minutes%60) + " minutes";
	}


  $scope.movies = [
    {
      title:	'The Shawshank Redemption',
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '10', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    {
      title:	'The Godfather',
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '03', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'[http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    {
      title:	'The Godfather: Part II',
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '12', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    {
      title:	'The Dark Knight',
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '07', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    {
      title:	'Schindler\'s List',
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '11', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},
		//Personal Favorite Movies
		{
			title:	'Snatch',
      iscore:	8.3,
      rating:	'R',
      runtime:	102,
      released:	new Date('2000', '1', '19'),
      country:	'USA',
      posters:	['img/snatch1.jpg','img/snatch2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0208092',
      website:	'https://www.facebook.com/snatch',
      likes:	567,
      dislikes:	87,
      posterindex: 0
	},
		{
			title:	'Saving Private Ryan',
			iscore:	8.6,
			rating:	'R',
			runtime:	169,
			released:	new Date('1998', '7', '24'),
			country:	'USA',
			posters:	['img/svp1.jpg','img/svp2.jpg','img/svp3.jpg'],
			imdb:		'http://www.imdb.com/title/tt0120815',
			website:	'https://www.facebook.com/SavingPrivateRyanMovie',
			likes:	1340,
			dislikes:	289,
			posterindex: 0
	},
		{
			title:	'The Departed',
			iscore:	8.5,
			rating:	'R',
			runtime:	151,
			released:	new Date('2006', '10', '6'),
			country:	'USA',
			posters:	['img/departed1.jpg','img/departed2.jpg','img/departed3.jpg'],
			imdb:		'http://www.imdb.com/title/tt0407887',
			website:	'https://www.facebook.com/TheDepartedMovie',
			likes:	988,
			dislikes:	189,
			posterindex: 0
	}


  ];





}]);
