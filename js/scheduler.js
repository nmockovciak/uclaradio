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
        var minutes = time.getMinutes();
        time = time.getUTCHours() - 7;
        
        if(time < 0) //saturday
        {
          time = 24 + time;
          day = day -1;
          if (day < 0)
            day = 6;
        }

        time = time + minutes/60;

        console.log(time);
        console.log(day);
        for (i = 0; i < data.length; i++) {
          if((data[i].day == day) && (data[i].start <= time) && (time <= data[i].end))
          {
            show = data[i];
            break;
          }
        }
        document.getElementById("SHOW_TITLE").innerHTML = show.show;
        document.getElementById("DJ_NAME").innerHTML = show.dj;
        if(show.image != "") $("#pic1").attr("src", show.image);
        else
        {
          var parent = document.getElementById("dj_image");
          var child = document.getElementById("pic1");
          parent.removeChild(child);
        }

        document.getElementById("BLURB").innerHTML = show.description;


        //document.getElementById("DJ_IMAGE").innerHTML = show.image;

        console.log(data);
        console.log("Mockup spreadsheet view: https://docs.google.com/spreadsheets/d/1WFD8lerekpe_384yXMdImHtqXH7e17z0ttiunltK7I8/pubhtml?gid=0&single=true");

      }

