(function() {
  particlesJS('blood', {
    'particles': {
      'number': {
        'value': 300,
        'density': {
          'enable': true,
          'value_area': 1800
        }
      },
      'color': {
        'value': '#ab0505'
      },
      'shape': {
        'type': 'circle',
        'stroke': {
          'width': 0.2,
          'color': '#333',
          'opacity': 0.1
        },
        'polygon': {
          'nb_sides': 4
        }
      },
      'opacity': {
        'value': 0.5,
        'random': true,
        'anim': {
          'enable': false,
          'speed': 1,
          'opacity_min': 0.1,
          'sync': false
        }
      },
      'size': {
        'value': 40,
        'random': false,
        'anim': {
          'enable': true,
          'speed': 10,
          'size_min': 20,
          'size_max': 80,
          'sync': false
        }
      },
      'line_linked': {
        'enable': false,
        'distance': 200,
        'color': '#ffffff',
        'opacity': 1,
        'width': 2
      },
      'move': {
        'enable': true,
        'speed': 8,
        'direction': 'none',
        'random': false,
        'straight': false,
        'out_mode': 'out',
        'bounce': false,
        'attract': {
          'enable': false,
          'rotateX': 600,
          'rotateY': 1200
        }
      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {
        'onhover': {
          'enable': false,
          'mode': 'grab'
        },
        'onclick': {
          'enable': false,
          'mode': 'push'
        },
        'resize': true
      },
      'modes': {
        'grab': {
          'distance': 400,
          'line_linked': {
            'opacity': 1
          }
        },
        'bubble': {
          'distance': 400,
          'size': 40,
          'duration': 2,
          'opacity': 8,
          'speed': 3
        },
        'repulse': {
          'distance': 200,
          'duration': 0.4
        },
        'push': {
          'particles_nb': 4
        },
        'remove': {
          'particles_nb': 2
        }
      }
    },
    'retina_detect': true
  });

}).call(this);