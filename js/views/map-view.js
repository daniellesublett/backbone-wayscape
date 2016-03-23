var MapView = Backbone.View.extend({
  template: _.template($('#map-template').html()),
  render: function () {
    this.$el.html(this.template());
    
    var map = L.map(this.$('#map')[0]).setView ([55.75, 37.58], 10);
    L.tileLayer('http://{s}.tile.cloudmade.com/4e5f745e28654b7eb26aab577eed79ee/997/256/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>[…]',
      maxZoom: 18
    }).addTo(map);
    
    return this;
  }
});

var mapView = new MapView();
$('#map-wrapper').html(mapView.render().el);