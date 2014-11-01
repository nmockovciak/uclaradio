      window.onload = function() { init() };

      var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1WFD8lerekpe_384yXMdImHtqXH7e17z0ttiunltK7I8/pubhtml?gid=0&single=true';

      function init() {
        Tabletop.init( { key: public_spreadsheet_url,
                         callback: showInfo,
                         simpleSheet: true } );
      }

      function showInfo(data) {
        // data comes through as a simple array since simpleSheet is turned on
        var show = null;
        var time = new Date();
        var day = time.getUTCDay(); //0 corresponds to Sunday
        time = time.getUTCHours() - 7 + (time.getMinutes())/60;
        console.log(time);
        for (i = 0; i < data.length; i++) {
          if((data[i].day == day) && (data[i].start <= time) && (time <= data[i].end))
          {
            show = data[i];
            break;
          }
        }
        document.getElementById("SHOW_TITLE").innerHTML = show.show;
        document.getElementById("DJ_NAME").innerHTML = show.dj;
        $("#pic1").attr("src", show.image);
        document.getElementById("BLURB").innerHTML = show.description;


        //document.getElementById("DJ_IMAGE").innerHTML = show.image;

        console.log(data);
        console.log("Mockup spreadsheet view: https://docs.google.com/spreadsheets/d/1WFD8lerekpe_384yXMdImHtqXH7e17z0ttiunltK7I8/pubhtml?gid=0&single=true");

      }

