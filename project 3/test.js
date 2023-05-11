showdata();

function showdata() {              
  var resultContainerEl = document.querySelector('#resultContainer');

  var countryEl = document.createElement('h3');
  countryEl.innerText = 'Hello';
  countryEl.classList.add('countrySelected');

  var stateEl = document.createElement('h3');
  stateEl.innerText = 'Hello';
  stateEl.classList.add('stateSelected');

  var cityEl = document.createElement('h3');
  cityEl.innerText = 'Hello';
  cityEl.classList.add('citySelected');

  var locationEl = document.createElement('h6');
  locationEl.innerText = 'Location\n' + ['121.538305', '31.226833'];
  locationEl.classList.add('location');

  var tempEl = document.createElement('h3');
  tempEl.innerText = 11 + '\n' + 'Temperature (Celsius)';
  tempEl.classList.add('temperature');

  var aqiEl = document.createElement('h3');
  aqiEl.innerText = 108 + '\n' + 'Air Quality Index';
  aqiEl.classList.add('aqi');

  var timeEl = document.createElement('h6');
  timeEl.innerText = 'Current Time\n' + '2019-03-31 T01:00:00.000Z';
  timeEl.classList.add('timeStamp');

  var humidityEl = document.createElement('h3');
  humidityEl.innerText = 43 + '\n' + 'Humidity (%)';
  humidityEl.classList.add('humidity');


  var num_particle = 108;
  render(num_particle);
}
  
var num;

function render(spacing) {
  var SPACING = 440 / spacing;
  var num_row = window.innerHeight / SPACING;
  var num_col = window.innerWidth / SPACING;

  var NUM_PARTICLES = ( ( ROWS = num_row ) * ( COLS = num_col ) ),
    
      THICKNESS = Math.pow(80, 2),
     
      
      MARGIN = 0,
      COLOR = 220,
      DRAG = 1,
      EASE = 0.15,

      container,
      canvas,
      mouse,
      stats,
      list,
      ctx,
      tog,
      man,
      dx, dy,
      mx, my,
      d, t, f,
      a, b,
      i, n,
      w, h,
      p, s,
      r, c
      ;

  var particle = {
        vx: 0,
        vy: 0,
        x: 0,
        y: 0
  };

  console.log('Number of particles is: ' + NUM_PARTICLES);
  num = NUM_PARTICLES;

  function init() {

    container = document.getElementById( 'canvasContainer' );
    canvas = document.createElement( 'canvas' );
    
    ctx = canvas.getContext( '2d' );
    man = false;
    tog = true;
    
    list = [];
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    w = canvas.width;
    h = canvas.height;
  
    container.style.marginLeft = Math.round( w * -0.5 ) + 'px';
    container.style.marginTop = Math.round( h * -0.5 ) + 'px';
    
    for ( i = 0; i < NUM_PARTICLES; i++ ) {
      
      p = Object.create( particle );
     
      p.x = p.ox = MARGIN + SPACING * ( i % COLS );
     
      p.y = p.oy = MARGIN + SPACING * Math.floor( i / COLS );
   
      
      list[i] = p;
    }

    container.addEventListener( 'mousemove', function(e) {

      bounds = container.getBoundingClientRect();
      mx = e.clientX - bounds.left;
      my = e.clientY - bounds.top;
      man = true;
      
    });
    
    if ( typeof Stats === 'function' ) {
      document.body.appendChild( ( stats = new Stats() ).domElement );
    }
    
    container.appendChild( canvas );
  }

  function step() {

    if ( stats ) stats.begin();

    if ( tog = !tog ) {

      if ( !man ) {

        t = +new Date() * 0.001;
        mx = w * 0.5 + ( Math.cos( t * 2.1 ) * Math.cos( t * 0.9 ) * w * 0.45 );
        my = h * 0.5 + ( Math.sin( t * 3.2 ) * Math.tan( Math.sin( t * 0.8 ) ) * h * 0.45 );
      }
        
      for ( i = 0; i < NUM_PARTICLES; i++ ) {
        
        p = list[i];
        
        d = ( dx = mx - p.x ) * dx + ( dy = my - p.y ) * dy;
        f = -THICKNESS / d;

        if ( d < THICKNESS ) {
          t = Math.atan2( dy, dx );
          p.vx += f * Math.cos(t);
          p.vy += f * Math.sin(t);
        }

        p.x += ( p.vx *= DRAG ) + (p.ox - p.x) * EASE;
        p.y += ( p.vy *= DRAG ) + (p.oy - p.y) * EASE;

      }

    } else {

      b = ( a = ctx.createImageData( w, h ) ).data;

      for ( i = 0; i < NUM_PARTICLES; i++ ) {

        p = list[i];
        b[n = ( ~~p.x + ( ~~p.y * w ) ) * 4] = b[n+1] = b[n+2] = COLOR, b[n+3] = 255;
      }

      ctx.putImageData( a, 0, 0 );
    }

    if ( stats ) stats.end();

    requestAnimationFrame( step );
  }

  init();
  step();
}

