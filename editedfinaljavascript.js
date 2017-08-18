  
google.load('search', '1');
			//feed.setNumEntries(16);
			
				

var imageSearch;
var currentImage;
			
function searchComplete(){
	console.log("in Search Complete");
	currentImage = 0;
	var imageFileName=imageSearch.results[currentImage].url;
	//changePicture();
	console.log(imageFileName);
	$('.picHolder').attr('src', imageFileName);
	console.log('search complete done');
}
function OnLoad() {
	console.log("onload");
	imageSearch=new google.search.ImageSearch();
	imageSearch.setSearchCompleteCallback(this, searchComplete, null);
}
function poo(){
	console.log("poo");
	var searched = $('#query').val();

	imageSearch.execute(searched+"s");
		if ((searched%10)!==0 || (searched=="")) {
			alert("Type in a decade 1900, 1910, 1920, 1930 ...");
			die;
		}
}


function nextImage() {
	console.log("next image");
	currentImage=currentImage+1;
	imageFileName=imageSearch.results[currentImage].url;
	$('.picHolder').attr('src', imageFileName);
	$("img").error(function(){
			console.log("error");
			nextImage();
		});
	}

				 
function prevImage() {
	console.log("previous image");
	currentImage=currentImage-1;
	imageFileName=imageSearch.results[currentImage].url;
	$('.picHolder').attr('src', imageFileName);

}

google.setOnLoadCallback(OnLoad);
		   
		   
var audioObject;
audioObject = new Audio(); 


$(document).ready(function() {
	console.log( "ready!" );	   
			
	// find template and compile it
	var albumId = '49a26Wsrp2pBfggY1ld00a',
		currentTrack=0,
		playlistData=null;

	var fetchTracks = function (albumId, callback) {
		$.ajax({
			url: 'https://api.spotify.com/v1/albums/' + albumId,
			success: function (response) {
				callback(response);
			}
		});
	};

	// var searchAlbums = function (query) {
		// $.ajax({
			// url: 'https://api.spotify.com/v1/search',
			// data: {
				// q: query,
				// type: 'album'
			// },
				// success: function (response) {
					// resultsPlaceholder.innerHTML = template(response);
				// }
			// });
		// };
		
	var nextTrack=function(){
		currentTrack = currentTrack + 1; 
		audioObject.src=playlistData.tracks.items[currentTrack].preview_url; 
		audioObject.play();
	}

	var buttonClicked = function (query) {
		console.log('function was called');
		if(query>='2010'||query=='2010s'){
			albumId='4vKOXJObuHpaPvbfP6FBuC';
			console.log('2010');
		}
		else if ((query>='2000'&& query < '2010')||query=='00s'){
			albumId='1CmJSOvHeCYN12VQCRkRC9';
			//playlist: https://play.spotify.com/user/nowthatsmusicus/playlist/1WY9av7pcP8Q8Zpj2gRHNZ
		}
		else if((query>='1990'&& query<'2000')||query=='90s'){
			albumId='3DFnN7SaYffZ6BrSmIhtkR';
			
		}
		else if((query>='1980'&& query<'1990')||query=='80s'){
			albumId='0pvhletDH7CphbKErUtPCF';
			
		}
		else if((query>='1970'&&query<'1980')||query=='70s'){
			albumId='1k7WkNHGPNPnri2tsowvtg';	
			
		}
		else if((query>='1960'&&query<'1970')||query=='60s'){
			albumId='4esm1VL0wnxM9Zqxhu7JI2';
			
		}
		else if((query>='1950'&&query<'1960')||query=='50s'){
			albumId='0Z1LVv7wFvygxOdcwh2lf4';
			
		}
		else if((query>='1940'&& query<'1950')||query=='40s'){
			albumId='2F0eK2QC5MzIX4QBFWql2c';
			
		}
		else if((query>='1930'&&query<'1940')||query=='30s'){
			albumId='4E7jEeq3leEO28LPn2TU9c';
			
		}
		else if((query>='1920'&&query<'1930')||query=='20s'){
			albumId='743HyZC9X626zw37wnE2Cm';
			
		}
		else if((query>='1900'&&query<'1920')||query=='10s'){
			albumId='0suPgpiIhGGEu7nFSlv3cH';
		}
		
		//'https://api.spotify.com/v1/users/'+user_id+'/playlists/'+playlist+'{playlist_id}'
		
		 $.ajax({
		 //albums
			 url: 'https://api.spotify.com/v1/albums/'+albumId,
			 success: function (response) {
				console.log(response);
				playlistData = response;
				var trackBlah=response.tracks.items[0].preview_url;
				audioObject.src = trackBlah;
				audioObject.addEventListener('ended', nextTrack);
				console.log(audioObject);
				audioObject.play();	
			}
		}); 
	};
	
	$("#search").on('click', function(e) {
		console.log("query");
		poo();
		var query = $("#query").val();
		buttonClicked(query);
	});
	
	
});

var play = function() {
	console.log("in play funtion");
	if (audioObject) {
		audioObject.play();
	}
}

var pause = function() {
	console.log("in pause function");
	if (audioObject) {
		audioObject.pause();
	}
}
