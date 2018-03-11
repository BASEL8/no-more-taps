$(document).ready(function() {
    $.getJSON("js/playlists.json", function(json) {
        var scPlayList = json.sound_playList.sc_url;
        var spotify_list = json.sound_playList.spotify;
        var yt_songs_playlist = json.youtube_playlist.songs_url;
        var yt_food_playlist = json.food.youtube_food_url;
        var insta_playlist = json.food.foto_url;
        //soundcloud append
        for (let i = 0; i < scPlayList.length; i++) {
            $('.sc_plays_list').append('<iframe width="250"  height="350" scrolling="yes" frameborder="no" allow="autoplay"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com' + scPlayList[i] + '&color=%23594954&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=true&show_teaser=false"></iframe>');
        };
        //spotify append
        for (let i = 0; i < spotify_list.length; i++) {
            $('.spotify_list').append('<iframe src="https://open.spotify.com/embed/user/' + spotify_list[i] + '" width="250" height="300" frameborder="0" allowtransparency="true"></iframe>');
        };
        //youtube append
        for (let y = 0; y < yt_songs_playlist.length; y++) {
            $('.songs_playlist').append('<iframe width="200" height="200" src="https://www.youtube.com/embed/' + yt_songs_playlist[y] + '?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
        };
        //food youtube append
        for (let y = 0; y < yt_food_playlist.length; y++) {
            $('.food_playlist').append('<iframe width="260" height="215" src="https://www.youtube.com/embed/' + yt_food_playlist[y] + '?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
        };
        // //food foto append
        // for (let z = 0; z < 1; z++) {
        //     $('.carousel').append('<a class="carousel-item" href="#!"><img  src="img/carousel/10.jpg"></a>');
        // };
    });

});