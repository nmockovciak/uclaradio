      window.onload = function() { init() };

      var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1WFD8lerekpe_384yXMdImHtqXH7e17z0ttiunltK7I8/pubhtml?gid=0&single=true';

      function init() {
        Tabletop.init( { key: public_spreadsheet_url,
                         callback: showInfo,
                         simpleSheet: true } );
      }

      function showInfo(data) {
        // data comes through as a simple array since simpleSheet is turned on
        var show;
        var time = new Date();
        var day = time.getDay();
        time = time.getHours() + (time.getMinutes())/60;
        for (i = 0; i < data.length; i++) {
          if((data[i].start <= time) && (time <= data[i].end) && (data[i].day == day))
          {
            show = data[i];
            break;
          }
        }
        document.getElementById("SHOW_TITLE").innerHTML = show.show;
        document.getElementById("DJ_NAME").innerHTML = show.dj;
        document.getElementById("BLURB").innerHTML = show.description;
        console.log(data);
      }

